'use client'
import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/shadcn/ui/button'
import { TriangleAlert } from 'lucide-react'

interface Props {
  open: boolean
  setClose: (value: boolean) => void
  title?: string
  description?: string
  handleSubmit?: () => void
  loading?: boolean
}
export const AlertModal = ({
  open,
  setClose,
  handleSubmit,
  title = 'Are you absolutely sure?',
  description = `This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.`,
  loading
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={setClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center gap-2.5">
              <div className="bg-destructive/20 h-14 w-14 rounded-full flex items-center justify-center">
                <TriangleAlert className="text-destructive h-8 w-8" />
              </div>
              {title}
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            disabled={loading}
            variant={'secondary'}
            onClick={() => setClose(false)}
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant={'destructive'}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
