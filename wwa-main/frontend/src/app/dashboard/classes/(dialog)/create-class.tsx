'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
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
import { Button } from '@/shadcn/ui/button'
import { Plus } from 'lucide-react'
import { axiosClient } from '@/src/lib/api'
import { toast } from 'sonner'
import { revalidate } from '../../(server)/actions/create-class'
import { Textarea } from '@/shadcn/ui/textarea'

const CreateClassDialog = () => {
  // State variables for form inputs
  const [name, setName] = useState('')
  const [type, setType] = useState<'Co-Education' | 'Boys' | 'Girls'>(
    'Co-Education'
  )
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState('')
  // Handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault()

    const data = {
      name,
      type,
      description
    }
    const response = await axiosClient.POST('/classes', {
      body: data
    })
    console.log('Class created:', response)
    toast('Class created successfully')
    revalidate()
    setOpen(false)
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant={'black'}>
          Add New Class <Plus className="h-4 mx-2 w-4" />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter class name"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="type">Class Type</Label>
            <Select
              // value={type}
              defaultValue="Co-Education"
              onValueChange={(value: 'Co-Education' | 'Boys' | 'Girls') =>
                setType(value)
              }
            >
              <SelectTrigger>{type ? type : 'Select class type'}</SelectTrigger>
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
              value={description}
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
  )
}

export default CreateClassDialog
