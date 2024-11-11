'use client'
import { Button } from '@/shadcn/ui/button'
import { cn } from '@/src/lib/utils'
import { UploadDropzone } from '@/src/utils/uploadthing'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

interface Props {
  value: string
  setValue: (value: string) => void
  className?: string
  onCancel: () => void
}
export const FileUpload = ({ className, setValue, value, onCancel }: Props) => {
  return (
    <div className={cn('h-52 w-52 relative', className)}>
      {value ? (
        <>
          <Image
            src={value}
            alt={''}
            fill
            className={cn('object-cover rounded-2xl')}
          />
          <Button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onCancel()
            }}
            size={'icon'}
            className="absolute -right-1 -top-1 rounded-full !bg-white hover:bg-white border border-input shadow-2xl"
          >
            <X className="text-red-500" />
          </Button>
        </>
      ) : (
        <UploadDropzone
          onClientUploadComplete={(res) => {
            setValue(res[0]?.url || '')
          }}
          className="absolute top-0 !mt-0  inset-0   ut-label:hidden ut-allowed-content:ut-uploading:text-red-300"
          endpoint={'imageUploader'}
          onUploadError={(error: Error) => {
            toast.error(error.message)
          }}
        />
      )}
    </div>
  )
}
