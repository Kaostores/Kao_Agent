import React, { useState, useEffect, useRef } from "react"
import { VscChromeClose, VscFileSymlinkFile, VscCloudUpload } from 'react-icons/vsc'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

type Iprops = {
    isOpen: boolean
    onClose: () => void
    onFileChange: (files: {
      cacDocument?: File
      kycDocument?: File
      businessDocument?: File
      utilityBill?: File
    }) => void
    onSubmit: () => void
    storeDetails: {
      cacDocument?: string
      kycDocument?: string
      businessDocument?: string
      utilityBill?: string
    }
  }

const Upload: React.FC<Iprops> = ({isOpen, onClose, onFileChange, onSubmit, storeDetails}) => {
    const [cacDocument, setCacDocument] = useState<File | null>(null)
    const [kycDocument, setKycDocument] = useState<File | null>(null)
    const [businessDocument, setBusinessDocument] = useState<File | null>(null)
    const [utilityBill, setUtilityBill] = useState<File | null>(null)

    const cacInputRef = useRef<HTMLInputElement>(null)
    const kycInputRef = useRef<HTMLInputElement>(null)
    const businessInputRef = useRef<HTMLInputElement>(null)
    const utilityInputRef = useRef<HTMLInputElement>(null)

    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(() => {
        setIsButtonDisabled(!(cacDocument || kycDocument || businessDocument || utilityBill))
    }, [cacDocument, kycDocument, businessDocument, utilityBill])

    useEffect(() => {
        if (storeDetails) {
          if (storeDetails.cacDocument) setCacDocument(storeDetails.cacDocument as unknown as File)
          if (storeDetails.kycDocument) setKycDocument(storeDetails.kycDocument as unknown as File)
          if (storeDetails.businessDocument) setBusinessDocument(storeDetails.businessDocument as unknown as File)
          if (storeDetails.utilityBill) setUtilityBill(storeDetails.utilityBill as unknown as File)
        }
    }, [storeDetails])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
        const file = e.target.files?.[0]
        onFileChange({ [docType]: file })
    
        if (docType === "cacDocument") {
          setCacDocument(file || null)
        } else if (docType === "kycDocument") {
          setKycDocument(file || null)
        } else if (docType === "businessDocument") {
          setBusinessDocument(file || null)
        } else if (docType === "utilityBill") {
          setUtilityBill(file || null)
        }
    }

    const triggerFileInput = (ref: React.RefObject<HTMLInputElement>) => {
        ref.current?.click()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] z-[100] bg-[#fff]">
          <DialogHeader>
            <DialogTitle className="text-[#0333ae]">Upload documents</DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
            >
              <VscChromeClose className="h-4 w-4" />
            </button>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="cacDocument">CAC document</Label>
              <div className="flex">
                <Input
                  readOnly
                  value={cacDocument ? cacDocument.name : ""}
                  placeholder="Choose CAC document"
                  className="rounded-r-none"
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-l-none"
                  onClick={() => triggerFileInput(cacInputRef)}
                >
                  <VscCloudUpload className="h-4 w-4" />
                </Button>
              </div>
              <input
                ref={cacInputRef}
                id="cacDocument"
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, "cacDocument")}
              />
              {storeDetails.cacDocument && <p className="text-sm text-muted-foreground">Current file: {storeDetails.cacDocument}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="kycDocument">KYC document</Label>
              <div className="flex">
                <Input
                  readOnly
                  value={kycDocument ? kycDocument.name : ""}
                  placeholder="Choose KYC document"
                  className="rounded-r-none"
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-l-none"
                  onClick={() => triggerFileInput(kycInputRef)}
                >
                  <VscCloudUpload className="h-4 w-4" />
                </Button>
              </div>
              <input
                ref={kycInputRef}
                id="kycDocument"
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, "kycDocument")}
              />
              {storeDetails.kycDocument && <p className="text-sm text-muted-foreground">Current file: {storeDetails.kycDocument}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="businessDocument">Business Document</Label>
              <div className="flex">
                <Input
                  readOnly
                  value={businessDocument ? businessDocument.name : ""}
                  placeholder="Choose Business document"
                  className="rounded-r-none"
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-l-none"
                  onClick={() => triggerFileInput(businessInputRef)}
                >
                  <VscCloudUpload className="h-4 w-4" />
                </Button>
              </div>
              <input
                ref={businessInputRef}
                id="businessDocument"
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, "businessDocument")}
              />
              {storeDetails.businessDocument && <p className="text-sm text-muted-foreground">Current file: {storeDetails.businessDocument}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="utilityBill">Utility bill</Label>
              <div className="flex">
                <Input
                  readOnly
                  value={utilityBill ? utilityBill.name : ""}
                  placeholder="Choose Utility bill"
                  className="rounded-r-none"
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-l-none"
                  onClick={() => triggerFileInput(utilityInputRef)}
                >
                  <VscCloudUpload className="h-4 w-4" />
                </Button>
              </div>
              <input
                ref={utilityInputRef}
                id="utilityBill"
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, "utilityBill")}
              />
              {storeDetails.utilityBill && <p className="text-sm text-muted-foreground">Current file: {storeDetails.utilityBill}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button onClick={onSubmit} className="w-full bg-[#0333ae] hover:bg-[#0333ae]" disabled={isButtonDisabled}>
              <VscFileSymlinkFile className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}

export default Upload