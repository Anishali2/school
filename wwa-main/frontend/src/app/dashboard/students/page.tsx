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
import CreateStudentDialog from './(dialog)/create-student'
import DeleteClassButton from './(actions)/delete-class'
import { TriangleAlertIcon } from 'lucide-react'
import EditClassButton from './(actions)/edit-class'
import moment from 'moment'

export default async function Component() {
  const response = await fetch('http://localhost:1024/students', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
  const classes = await fetch('http://localhost:1024/classes', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Students Details</h1>
        <CreateStudentDialog classes={classes} />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID#</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Parents</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.map((item: any, i: number) => {
              const studentAge = moment().diff(item.dob, 'years')
              return (
                <TableRow key={item.name}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {moment(item.dob).format('LL')}
                    <span className="text-xs"> ( {studentAge} years )</span>
                  </TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>
                    {item.parents.fatherName
                      ? item.parents.fatherName
                      : item.parents.motherName}
                  </TableCell>
                  <TableCell>{item.parents.contact}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <EditClassButton id={item._id} {...item} />
                      <DeleteClassButton id={item._id} />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
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
