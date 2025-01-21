"use client"

import React, { useState, type ChangeEvent, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Label } from "../../components/ui/label"
import { MdOutlineStorefront } from "react-icons/md"
import { IoCameraOutline } from "react-icons/io5"
import { HiOutlineDocumentArrowUp } from "react-icons/hi2"
import {
  useViewAllStoresQuery,
  useApproveStoreMutation,
  useSuspendStoreMutation,
} from "../../components/services/apiSlice"
import { Skeleton } from "../../components/ui/skeleton"
import { ChevronLeft, ChevronRight, Pencil, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Textarea } from "../../components/ui/textarea"

interface Store {
  id: string
  name: string
  email: string
  address: string
  phone: string
  status: string
}

const Notverified = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [editingStore, setEditingStore] = useState<Store | null>(null)
  const [storeList, setStoreList] = useState<Store[]>([])
  const [storeToSuspend, setStoreToSuspend] = useState<string | null>(null)
  const [suspensionNote, setSuspensionNote] = useState("")
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false)
  const [selectedStoreUuid, setSelectedStoreUuid] = useState<string | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const { data: stores, isLoading, isError, error } = useViewAllStoresQuery({})
  const [approveStore] = useApproveStoreMutation()
  const [suspendingStore] = useSuspendStoreMutation()

  useEffect(() => {
    if (stores && stores.data) {
      const filteredStores = stores.data.filter(
        (store: Store) => store.status === "suspended" || store.status === "pending",
      )
      setStoreList(filteredStores)
    }
  }, [stores])

  const storesPerPage = 10

  const indexOfLastStore = currentPage * storesPerPage
  const indexOfFirstStore = indexOfLastStore - storesPerPage
  const currentStores = storeList.slice(indexOfFirstStore, indexOfLastStore)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Inspect":
        return "bg-green-100 text-green-800"
      case "Not Verified":
        return "bg-red-100 text-red-800"
      case "Suspended":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isError) {
    console.error("Error loading store details.", error)
    return <div>Error loading store details.</div>
  }

  const handleStatusChange = async (storeUuid: string, newStatus: string) => {
    try {
      if (newStatus === "verified") {
        const response = await approveStore(storeUuid).unwrap()
        console.log("Store approved response:", response)

        // Remove the approved store from the list
        setStoreList((prevStores) => prevStores.filter((store) => store.id !== storeUuid))
      }
    } catch (error: any) {
      console.error(`Error ${newStatus === "verified" ? "approving" : "suspending"} store:`, error.message)
    }
  }

  const handleSuspend = async () => {
    if (storeToSuspend && suspensionNote.trim()) {
      try {
        const response = await suspendingStore({
          store_uuid: storeToSuspend,
          note: suspensionNote,
        }).unwrap()
        console.log("Store suspended response:", response)

        setStoreList((prevStores) =>
          prevStores.map((store) => (store.id === storeToSuspend ? { ...store, status: "suspended" } : store)),
        )
        setIsSuspendModalOpen(false)
        setSuspensionNote("")
        setStoreToSuspend(null)
      } catch (error) {
        console.error("Error suspending store:", error)
      }
    } else {
      console.error("Suspension note is required")
    }
  }

  const handleEditClick = (storeUuid: string) => {
    setSelectedStoreUuid(storeUuid)
    setIsEditModalOpen(true)
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-[600]">Store Name</TableHead>
            <TableHead className="font-[600]">Address</TableHead>
            <TableHead className="font-[600]">Phone No</TableHead>
            <TableHead className="font-[600]">Email</TableHead>
            <TableHead className="font-[600]">Status</TableHead>
            <TableHead className="text-right font-[600]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: 5 }).map((_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
              </TableRow>
            ))
          ) : currentStores.length > 0 ? (
            currentStores.map((store: Store) => (
              <TableRow key={store.id}>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.address}</TableCell>
                <TableCell>{store.phone}</TableCell>
                <TableCell>{store.email}</TableCell>
                <TableCell className={store.status === "pending" ? "text-red-500" : ""}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-between rounded-full ${
                          store.status === "approved"
                            ? "bg-[#0333ae] hover:bg-[#0333ae] hover:text-[#fff] text-white"
                            : store.status === "suspended"
                              ? "bg-red-500 hover:bg-red-500 hover:text-[#fff] text-white"
                              : store.status === "pending"
                                ? "bg-red-300 text-[#fff]"
                                : "bg-gray-300 text-white"
                        }`}
                      >
                        {store.status === "pending"
                          ? "Not Verified"
                          : store.status.charAt(0).toUpperCase() + store.status.slice(1)}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#fff]">
                      <DropdownMenuItem className="cursor-pointer" onClick={() => handleStatusChange(store.id, "verified")}>
                        Approve
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer"
                        onClick={() => {
                          setStoreToSuspend(store.id)
                          setIsSuspendModalOpen(true)
                        }}
                      >
                        Suspend
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={() => setEditingStore(store)}>
                        <MdOutlineStorefront className="h-4 w-4 text-blue-800" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#fff]">
                      <DialogHeader>
                        <DialogTitle>Edit Store</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
                            <IoCameraOutline className="h-8 w-8 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-blue-600">Store ID - {editingStore?.id}</span>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue={editingStore?.name} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue={editingStore?.phone} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" defaultValue={editingStore?.address} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="file">Upload Document</Label>
                          <div className="flex items-center gap-2">
                            <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                            <Button asChild variant="outline">
                              <label htmlFor="file" className="cursor-pointer">
                                {selectedFile ? selectedFile.name : "Upload the titled document here"}
                              </label>
                            </Button>
                            <HiOutlineDocumentArrowUp className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No pending or suspended stores available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between space-x-2 py-4">
        <span className="text-sm text-gray-700">
          Showing {Math.min(currentPage * storesPerPage, storeList.length)} of {storeList.length}
        </span>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(storeList.length / storesPerPage)}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <Dialog open={isSuspendModalOpen} onOpenChange={setIsSuspendModalOpen}>
        <DialogContent className="bg-[#fff]">
          <DialogHeader>
            <DialogTitle className="mb-[20px]">Suspend Store</DialogTitle>
          </DialogHeader>
          <Textarea
            value={suspensionNote}
            onChange={(e) => setSuspensionNote(e.target.value)}
            placeholder="Enter suspension note..."
            className="min-h-[100px] resize-none mb-[20px] outline-none"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsSuspendModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleSuspend} className="bg-[#0333ae] text-[#fff]">
              Suspend
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Notverified

