'use client'
import { Button } from '@/shadcn/ui/button'
import { Input } from '@/shadcn/ui/input'
import Link from 'next/link'
import React from 'react'
import { loginSchema } from '../../validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shadcn/ui/form'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { URLS } from '@/src/lib/URLS'
import { axiosClient } from '@/src/lib/api'
import { toast } from 'sonner'

export const SignInForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const { data } = await axiosClient.POST('/auth/login', {
        body: {
          email: values.email,
          password: values.password
        }
      })
      setCookie('token', data, { secure: false })
      toast.success('Logged in successfully')
      router.push(URLS.dashboardHome)
    } catch (error: any) {
      toast.error('Invalid email or password')
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          href="/forgot-password"
          className="ml-auto inline-block text-xs underline"
        >
          Forgot your password?
        </Link>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}
