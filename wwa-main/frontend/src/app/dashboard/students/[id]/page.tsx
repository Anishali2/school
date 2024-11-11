import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Book, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

function StudentDetail() {
  // In a real application, you would fetch this data from an API or database
  const student = {
    id: '12345',
    name: 'Jane Doe',
    grade: '11th',
    email: 'jane.doe@school.edu',
    phone: '(555) 123-4567',
    address: '123 School St, Anytown, USA',
    avatar: '/placeholder.svg?height=100&width=100',
    gpa: 3.8,
    attendance: 95,
    subjects: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'Science', grade: 'A-' },
      { name: 'English', grade: 'B+' },
      { name: 'History', grade: 'A' }
    ],
    activities: ['Student Council', 'Debate Club', 'Basketball Team']
  }

  return (
    <div className="container max-w-screen-md mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>
              {student.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{student.name}</CardTitle>
            <CardDescription>
              Student ID: {student.id} | Grade: {student.grade}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <Mail className="text-muted-foreground" />
            <span>{student.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-muted-foreground" />
            <span>{student.phone}</span>
          </div>
          <div className="flex items-center gap-2 md:col-span-2">
            <MapPin className="text-muted-foreground" />
            <span>{student.address}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Academic Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">GPA</span>
              <span>{student.gpa.toFixed(2)}</span>
            </div>
            <Progress value={(student.gpa / 4) * 100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Attendance</span>
              <span>{student.attendance}%</span>
            </div>
            <Progress value={student.attendance} className="h-2" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead className="text-right">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {student.subjects.map((subject) => (
                <TableRow key={subject.name}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell className="text-right">{subject.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Book className="text-primary" />
            Extracurricular Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {student.activities.map((activity) => (
              <Badge key={activity} variant="secondary">
                {activity}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Edit Details</Button>
        <Button>Print Report</Button>
      </div>
    </div>
  )
}

export default StudentDetail
