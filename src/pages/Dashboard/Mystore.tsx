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
import { ChevronLeft, ChevronRight, Pencil, ChevronDown, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { useDeleteStoreByIdMutation } from "../../components/services/apiSlice"
import { Textarea } from "../../components/ui/textarea"
import StoreEdit from "../../components/store/EditStore"

interface Store {
  id: string
  name: string
  email: string
  address: string
  phone: string
  status: string
}

export default function ApprovedStores() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [editingStore, setEditingStore] = useState<Store | null>(null)
  const [approvedStores, setApprovedStores] = useState<Store[]>([])
  const [storeToSuspend, setStoreToSuspend] = useState<string | null>(null)
  const [suspensionNote, setSuspensionNote] = useState("")
  const [storeList, setStoreList] = useState<Store[]>([])
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false)
  const [selectedStoreUuid, setSelectedStoreUuid] = useState<string | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const { data: stores, isLoading, isError, error } = useViewAllStoresQuery({})

  const [approveStore] = useApproveStoreMutation()
  const [suspendingStore] = useSuspendStoreMutation()
  const [deleteStoreById] = useDeleteStoreByIdMutation()

  useEffect(() => {
    if (stores && stores.data) {
      const filteredStores = stores.data.filter((store: Store) => store.status === "approved")
      setApprovedStores(filteredStores)
    }
  }, [stores])

  const storesPerPage = 10

  const indexOfLastStore = currentPage * storesPerPage
  const indexOfFirstStore = indexOfLastStore - storesPerPage
  const currentStores = approvedStores.slice(indexOfFirstStore, indexOfLastStore)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
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
      }
    } catch (error: any) {
      console.error(`Error ${newStatus === "verified" ? "approving" : "suspending"} store:`, error.message)
    }

    setStoreList((prevStores) =>
      prevStores.map((store) => (store.id === storeUuid ? { ...store, status: newStatus } : store)),
    )
  }

  const handleSuspend = async () => {
    if (storeToSuspend && suspensionNote.trim()) {
      try {
        const response = await suspendingStore({
          store_uuid: storeToSuspend,
          note: suspensionNote,
        }).unwrap()
        console.log("Store suspended response:", response)

        // Remove the suspended store from the approvedStores list
        setApprovedStores((prevStores) => prevStores.filter((store) => store.id !== storeToSuspend))

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

  const handleDeleteStore = async (id: string) => {
    try {
      await deleteStoreById(id).unwrap()
      setApprovedStores((prevStores) => prevStores.filter((store) => store.id !== id))
    } catch (error) {
      console.error("Error deleting store:", error)
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
                    <DropdownMenuTrigger asChild className="bg-[#fff]">
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
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleStatusChange(store.id, "verified")}>
                        Approve
                      </DropdownMenuItem>
                      <DropdownMenuItem
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
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => handleEditClick(store.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleDeleteStore(store.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No approved stores available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between space-x-2 py-4">
        <span className="text-sm text-gray-700">
          Page {currentPage} of {Math.ceil(approvedStores.length / storesPerPage)}
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
            disabled={currentPage === Math.ceil(approvedStores.length / storesPerPage)}
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

      {selectedStoreUuid && (
        <StoreEdit
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          storeUuid={selectedStoreUuid}
          updateStoreInList={(updatedStore: Store) => {
            const updatedList = storeList.map((store) => (store.id === updatedStore.id ? updatedStore : store))
            setStoreList(updatedList)
          }}
          storeDetails={storeList.find((store) => store.id === selectedStoreUuid)}
        />
      )}
    </div>
  )
}

