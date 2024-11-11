'use client'
import { Button } from '@/shadcn/ui/button'
import { Trash2, TriangleAlertIcon } from 'lucide-react'
import React from 'react'
import { revalidate } from '../../(server)/actions/create-class'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from '@/shadcn/ui/dialog'

const DeleteClassButton = ({ id }: { id: string }) => {
  const [open, setOpen] = React.useState(false)
  const deleteClass = async () => {
    await fetch('http://localhost:1024/classes/' + id, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    revalidate()
    setOpen(false)
  }

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button variant={'destructive'}>
            Delete
            <Trash2 className="pl-2 h-6 w-6 " />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <TriangleAlertIcon className="size-12 text-destructive" />
            <div className="text-center">
              <h3 className="text-lg font-medium">Delete Class</h3>
              <p className="text-muted-foreground">
                Are you sure you want to delete this class?
              </p>
            </div>
          </div>
          <DialogFooter>
            <div>
              <Button variant="outline">Cancel</Button>
            </div>
            <Button onClick={deleteClass} variant={'destructive'}>
              Delete
              <Trash2 className="pl-2 h-6 w-6 " />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeleteClassButton
