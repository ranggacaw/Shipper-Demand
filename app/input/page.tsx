"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import BottomNav from '@/components/ui/BottomNav'

const InputPage = () => {
  const [date, setDate] = React.useState<Date>()
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <section className="relative block h-[20vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://media.istockphoto.com/id/1352613626/vector/wave-3d-abstract-wave-dots-in-dark-background-big-data-technology-vector-background.jpg?s=612x612&w=0&k=20&c=JU9MeTspGLLTqqyKXXKlSpPfKmdH5fZqA2PdRKXpdHo=')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto">
            <Card>
              <CardHeader className='p-5 text-xl font-bold'>
                Shipper Demand
              </CardHeader>
              <CardContent className='p-5 pt-0'>
                Lengkapi form sesuai dengan ketentuan yang berlaku.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto">
            <Tabs defaultValue="customer" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer">Data Customer</TabsTrigger>
                <TabsTrigger value="pic">Data PIC</TabsTrigger>
              </TabsList>
              <TabsContent value="customer">
                <Card>
                  <CardContent className="space-y-2 pt-4.5">
                    <div className="space-y-1">
                      <Label htmlFor="customer" className='text-sm'>Customer<span className="text-red-500 ml-1">*</span></Label>
                      <Input id="customer" placeholder="PT. Cinta Bumi Abadi" />
                    </div>
                  </CardContent>
                  <CardContent className='grid grid-cols-2 gap-4'>
                    <div className="space-y-1">
                      <Label htmlFor="pol" className='text-sm'>POL<span className="text-red-500 ml-1">*</span></Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Loading" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Asam Asam">Asam Asam</SelectItem>
                            <SelectItem value="Paiton">Paiton</SelectItem>
                            <SelectItem value="Masinton">Masinton</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="pod" className='text-sm'>POD<span className="text-red-500 ml-1">*</span></Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Discharge" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Asam Asam">Asam Asam</SelectItem>
                            <SelectItem value="Paiton">Paiton</SelectItem>
                            <SelectItem value="Masinton Dimana Mana">Masinton Dimana Mana</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="cargo" className='text-sm'>Cargo</Label>
                      <Input id="cargo" placeholder="Coal" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="quantity" className='text-sm'>Quantity</Label>
                      <Input id="quantity" placeholder="0" />
                    </div>
                  </CardContent>
                  
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name" className='text-sm'>Date<span className="text-red-500 ml-1">*</span></Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Submit</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="pic">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
                            
      <BottomNav/>
    </>
  )
}

export default InputPage