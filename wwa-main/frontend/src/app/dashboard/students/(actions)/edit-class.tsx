'use client'
import { Button } from '@/shadcn/ui/button'
import { Pencil } from 'lucide-react'
import React from 'react'
import { revalidate } from '../../(server)/actions/create-class'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shadcn/ui/dialog'
import { Label } from '@/shadcn/ui/label'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectSeparator
} from '@/shadcn/ui/select'
import { Input } from '@/shadcn/ui/input'
import { axiosClient } from '@/src/lib/api'
import { toast } from 'sonner'
import { Textarea } from '@/shadcn/ui/textarea'

type ClassType = 'Co-Education' | 'Boys' | 'Girls'
const EditClassButton = ({
  id,
  name,
  type,
  description
}: {
  id: string
  name: string
  type: ClassType
  description: string
}) => {
  const [editName, setName] = React.useState(name)
  const [editType, setType] = React.useState<ClassType>(type)
  const [editDescription, setDescription] = React.useState(description)
  const [open, setOpen] = React.useState(false)
  async function handleSubmit(e: any) {
    e.preventDefault()

    const data: Record<string, any> = {
      name: editName,
      type: editType,
      description: editDescription
    }
    const response = await axiosClient.PATCH((`/classes/` + id) as any, {
      body: data
    })
    console.log('Class created:', response)
    toast('Class created successfully')
    revalidate()
    setOpen(false)
  }

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button variant={'outline'}>
            Edit
            <Pencil className="pl-2 h-6 w-6 " />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Class</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name">Class Name</Label>
              <Input
                id="name"
                type="text"
                value={editName}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter class name"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="type">Class Type</Label>
              <Select
                value={editType}
                onValueChange={(value: 'Co-Education' | 'Boys' | 'Girls') =>
                  setType(value)
                }
              >
                <SelectTrigger>
                  {type ? type : 'Select class type'}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Boys">Boys</SelectItem>
                  <SelectItem value="Girls">Girls</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="Co-Education">Co-Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editDescription}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter class description"
              />
            </div>

            <DialogFooter>
              <Button variant={'black'} type="submit">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditClassButton
