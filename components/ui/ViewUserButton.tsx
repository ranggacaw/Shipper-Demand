"use client"
import React, { ReactNode } from 'react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Label } from './label';
import { Input } from './input';
import { Textarea } from './textarea';

interface ViewUserButtonProps {
  title: string,
  price: number,
  category: string,
  description: string,
  children: ReactNode;
}

export const ViewUserButton = ({ children, title, price, category, description }: ViewUserButtonProps) => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className='w-full bg-gray-700 text-white hover:bg-gray-600 hover:text-white mt-4 duration-150'>{children}</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Product Details</h4>
              <p className="text-sm text-muted-foreground">
                {title}
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label>Price</Label>
                <Input
                  defaultValue={price}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label>Category</Label>
                <Input
                  defaultValue={category}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Description</Label>
                <Textarea
                  defaultValue={description}
                  className="col-span-2 h-full"
                  disabled
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
