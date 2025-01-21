import React, { useState, useEffect } from 'react'
import { VscArrowRight, VscChromeClose, VscFileSymlinkFile } from 'react-icons/vsc'
import { BiCamera } from 'react-icons/bi'
import {useUpdateStoreMutation} from "../services/apiSlice"
import Upload from './UploadDoc'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

interface FormData {
    name: string
    email: string
    phone: string
    address: string
    category: string
    cac_number: string
    cac_document: File | null
    kyc_document: File | null
    business_document: File | null
    utility_bill: File | null
}

interface StoreEditProps {
    isOpen: boolean
    onClose: () => void
    storeUuid: string
    updateStoreInList: (updatedStore: any) => void
    storeDetails?: {
      name?: string
      email?: string
      phone?: string
      address?: string
      category?: string
      cac_number?: string
      cac_document?: string | null
      kyc_document?: string | null
      business_document?: string | null
      utility_bill?: string | null
    }
}

const StoreEdit: React.FC<StoreEditProps> = ({isOpen, onClose, storeUuid, updateStoreInList, storeDetails = {}}) => {
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        name: storeDetails.name || '',
        email: storeDetails.email || '',
        phone: storeDetails.phone || '',
        address: storeDetails.address || '',
        category: storeDetails.category || '',
        cac_number: storeDetails.cac_number || '',
        cac_document: null,
        kyc_document: null,
        business_document: null,
        utility_bill: null,
    })
    const [loading, setLoading] = useState(false)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    const [updateStore] = useUpdateStoreMutation()

    useEffect(() => {
        const isValid = Object.keys(formData).every((key) => {
          if (key === 'cac_document' || key === 'kyc_document' || key === 'business_document' || key === 'utility_bill') {
            return true
          }
          return formData[key as keyof FormData]?.toString().trim() !== ''
        })
        setIsSubmitDisabled(!isValid)
    }, [formData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent | null) => {
        e?.preventDefault()
        setLoading(true)
    
        const updatedFormData = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          if (value) {
            updatedFormData.append(key, value)
          }
        })
    
        try {
          const response = await updateStore({ store_uuid: storeUuid, ...formData })
          
          updateStoreInList(response)
          toast.success("Store updated successfully!")
          onClose()
        } catch (error: any) {
          console.error('Error updating store:', error.message || error)
          toast.error("Failed to update store.")
        } finally {
          setLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px] bg-[#fff]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-[#0333ae]">Edit Store</DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
            >
              <VscChromeClose className="h-4 w-4" />
            </button>
          </DialogHeader>
          <ScrollArea className="h-[500px] pr-4">
            <div className='flex justify-center items-center flex-col mb-6'>
              <div className='w-24 h-24 flex justify-center items-center rounded-full bg-gray-200 text-[#0333ae] mb-4'>
                <BiCamera size={36} />
              </div>
              <div className='text-[#0333ae] font-semibold'>
                Store ID - {storeUuid}
              </div>
            </div>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {Object.keys(formData).map((key) => (
                key !== 'cac_document' && key !== 'kyc_document' && key !== 'business_document' && key !== 'utility_bill' ? (
                  <div key={key} className='space-y-2'>
                    <Label htmlFor={key}>{key.split('_').map(word => word.charAt(0) + word.slice(1)).join(' ')}</Label>
                    <Input
                      id={key}
                      name={key}
                      type={key === 'email' ? 'email' : 'text'}
                      value={typeof formData[key as keyof FormData] === 'string' ? formData[key as keyof FormData] as string : ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ) : null
              ))}
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <Label htmlFor="upload" className='flex items-center'>
                    <VscFileSymlinkFile className="mr-2" />
                    Upload
                  </Label>
                  <Button variant="ghost" size="sm" onClick={() => setShowUploadModal(!showUploadModal)}>
                    <VscArrowRight />
                  </Button>
                </div>
                <Input
                  id="upload"
                  type="text"
                  readOnly
                  value={[
                    formData.cac_document?.name,
                    formData.kyc_document?.name,
                    formData.business_document?.name,
                    formData.utility_bill?.name
                  ].filter(Boolean).join(', ') || 'No files uploaded'}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0333ae] hover:bg-[#0333ae]/90"
                disabled={loading || isSubmitDisabled} // Disable if loading or form is invalid
              >
                {loading ? 'Updating...' : 'Update Store'}
              </Button>
            </form>
          </ScrollArea>
        </DialogContent>
        {showUploadModal && (
          <Upload
            isOpen={showUploadModal}
            onClose={() => setShowUploadModal(false)}
            onFileChange={(files) => {
              setFormData((prev) => ({
                ...prev,
                cac_document: files.cacDocument || prev.cac_document,
                kyc_document: files.kycDocument || prev.kyc_document,
                business_document: files.businessDocument || prev.business_document,
                utility_bill: files.utilityBill || prev.utility_bill,
              }))
            }}
            onSubmit={() => handleSubmit(null)} 
            storeDetails={{
              cacDocument: formData.cac_document?.name || '',
              kycDocument: formData.kyc_document?.name || '',
              businessDocument: formData.business_document?.name || '',
              utilityBill: formData.utility_bill?.name || '',
            }}
          />
        )}
      </Dialog>
    )
}

export default StoreEdit