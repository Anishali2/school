/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zi7lYKe9K8f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UploadIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className="space-y-4 mx-auto container max-w-screen-md">
      <Card className="border-none p-0 shadow-none">
        <CardHeader>
          <CardTitle>School Profile</CardTitle>
          <CardDescription>
            Update your school's profile information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">School Name</Label>
              <Input id="name" type="text" defaultValue="Acme School" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                defaultValue="123 Main St, Anytown USA 12345"
                className="min-h-[80px]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="(555) 555-5555" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="info@acmeschool.com"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                defaultValue="https://www.acmeschool.com"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue="Acme School is a leading educational institution that has been providing high-quality education to students for over 50 years. Our mission is to empower students to reach their full potential and become responsible, compassionate, and engaged citizens."
                className="min-h-[120px]"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="black" size="sm">
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-none p-0 shadow-none">
        <CardHeader>
          <CardTitle>Branding Assets</CardTitle>
          <CardDescription>
            Update your school's logo, cover photo, and other branding assets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="logo">Logo</Label>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.iconify.design/mdi:file-image.svg?color=%23000000"
                    width={64}
                    height={64}
                    alt="School Logo"
                    className="rounded-md"
                    style={{ aspectRatio: '64/64', objectFit: 'cover' }}
                  />
                  <div>
                    <p className="text-sm font-medium">Acme School Logo</p>
                    <p className="text-sm text-muted-foreground">
                      PNG, 64x64px
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <UploadIcon className="h-4 w-4" />
                  <span>Upload</span>
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="cover">Cover Photo</Label>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.iconify.design/mdi:file-image.svg?color=%23000000"
                    width={40}
                    height={40}
                    alt="School Cover Photo"
                    className="rounded-md"
                    style={{ aspectRatio: '64/64', objectFit: 'cover' }}
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Acme School Cover Photo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      JPEG, 1920x960px
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <UploadIcon className="h-4 w-4" />
                  <span>Upload</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant={'black'} size="sm">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
