'use client'

import { zodResolver } from '@hookform/resolvers/zod'
// import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './button'
import { Calendar } from './calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './form'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/src/lib/utils'
import { CalendarIcon } from 'lucide-react'

const FormSchema = z.object({
  datetime: z.date({
    required_error: 'Date & time is required!.'
  })
})

export function DateTimePicker({
  date,
  setDate
}: {
  date: Date | null
  setDate: (date: Date) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  // const [time, setTime] = useState<string>('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`Meeting at: ${format(data.datetime, 'PPP, p')}`)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full gap-4 mb-4">
            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>
                    Date
                    {field.value && (
                      <span className="text-sm text-muted-foreground">
                        {` (${Math.abs(
                          new Date().getFullYear() - field.value.getFullYear()
                        )} years old)`}
                      </span>
                    )}
                  </FormLabel>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            `${format(field.value, 'PPP')}`
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 border "
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        selected={date || field.value}
                        onSelect={(selectedDate) => {
                          // const [hours, minutes] = time?.split(':')!
                          // selectedDate?.setHours(
                          //   parseInt(hours),
                          //   parseInt(minutes)
                          // )
                          setDate(selectedDate!)
                          field.onChange(selectedDate)
                        }}
                        onDayClick={() => setIsOpen(false)}
                        fromYear={2000}
                        toYear={new Date().getFullYear()}
                        // disabled={(date) =>
                        //   Number(date) < Date.now() - 1000 * 60 * 60 * 24 ||
                        //   Number(date) > Date.now() + 1000 * 60 * 60 * 24 * 30
                        // }
                        defaultMonth={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                  {/* <FormDescription>Set your date and time.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={time!}
                      onValueChange={(e) => {
                        setTime(e)
                        if (date) {
                          const [hours, minutes] = e.split(':')
                          const newDate = new Date(date.getTime())
                          newDate.setHours(parseInt(hours), parseInt(minutes))
                          setDate(newDate)
                          field.onChange(newDate)
                        }
                      }}
                    >
                      <SelectTrigger className="font-normal focus:ring-0 w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className="h-[15rem]">
                          {Array.from({ length: 96 }).map((_, i) => {
                            const hour = Math.floor(i / 4)
                              .toString()
                              .padStart(2, '0')
                            const minute = ((i % 4) * 15)
                              .toString()
                              .padStart(2, '0')
                            return (
                              <SelectItem key={i} value={`${hour}:${minute}`}>
                                {hour}:{minute}
                              </SelectItem>
                            )
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </>
  )
}
