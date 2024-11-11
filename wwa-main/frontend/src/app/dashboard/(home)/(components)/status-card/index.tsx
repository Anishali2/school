import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/src/lib/utils'
import { Button } from '@/shadcn/ui/button'

interface Props {
  title: string
  description: string
  value: number
  errorMessage?: string
  titleClassName?: string
  contentClassName?: string
}
export const StatusCard = ({
  description,
  title,
  value,
  errorMessage,
  titleClassName,
  contentClassName
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn(titleClassName)}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={cn('font-bold text-2xl', contentClassName)}>
        {errorMessage ? <p>{errorMessage}</p> : <p>{value}</p>}
      </CardContent>
      <CardFooter>
        <Button variant={'secondary'} className="text-xs w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
