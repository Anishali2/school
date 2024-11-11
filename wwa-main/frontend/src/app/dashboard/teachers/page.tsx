/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EY51k3YDT2p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import CreateTeacherDialog from './(dialog)/create-teacher'
import DeleteClassButton from './(actions)/delete-class'
import { TriangleAlertIcon } from 'lucide-react'
import EditClassButton from './(actions)/edit-class'

export default async function Component() {
  const response = await fetch('http://localhost:1024/classes', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Teachers Details</h1>
        <CreateTeacherDialog />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID#</TableHead>
              <TableHead>Class Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Teachers</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.map((item: any, i: number) => (
              <TableRow key={item.name}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <EditClassButton id={item._id} {...item} />
                    <DeleteClassButton id={item._id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {response.length === 0 && (
          <div className="mx-auto  flex justify-center items-center flex-col">
            <div className="border space-y-2 bg-black text-white flex justify-center items-center flex-col w-96 mt-10 p-4 rounded-md">
              <TriangleAlertIcon className="h-10 w-10" />
              <p className="text-xl font-bold">No classes found</p>
              <p className="text-center">
                Click on the "Add New Class" button above to create a new class
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
