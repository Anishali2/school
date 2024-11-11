'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/shadcn/ui/card'
import {
  CakeIcon,
  CalendarIcon,
  MegaphoneIcon,
  PencilIcon,
  SchoolIcon,
  UsersIcon
} from 'lucide-react'
import { Button } from '@/shadcn/ui/button'
const DashboardPreview = () => {
  return (
    <div className="">
      <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <UsersIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Teachers
                </CardTitle>
                <SchoolIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Classes
                </CardTitle>
                <PencilIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">
                  +1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Attendance Rate
                </CardTitle>
                <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">
                  +3% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming Events
                </CardTitle>
                <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Parent-Teacher Meeting</p>
                      <p className="text-xs text-muted-foreground">
                        May 15, 2023 - 6:00 PM
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Science Fair</p>
                      <p className="text-xs text-muted-foreground">
                        June 1, 2023 - 9:00 AM
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sports Day</p>
                      <p className="text-xs text-muted-foreground">
                        June 15, 2023 - 10:00 AM
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Announcements
                </CardTitle>
                <MegaphoneIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <p className="font-medium">New Cafeteria Menu</p>
                    <p className="text-xs text-muted-foreground">
                      Check out the updated cafeteria menu for this week.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">School Closed on May 22</p>
                    <p className="text-xs text-muted-foreground">
                      The school will be closed on May 22 for a teacher training
                      day.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Yearbook Photo Shoot</p>
                    <p className="text-xs text-muted-foreground">
                      Yearbook photo shoot will be held on June 1st. Please
                      ensure all students are present.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Birthdays</CardTitle>
                <CakeIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        May 15, 1990 (Teacher)
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Wish
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">
                        June 1, 2010 (Student)
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Wish
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Michael Johnson</p>
                      <p className="text-xs text-muted-foreground">
                        June 15, 1985 (Teacher)
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Wish
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPreview
