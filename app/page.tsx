import BottomNav from '@/components/ui/BottomNav'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <section className="relative block h-[16vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://media.istockphoto.com/id/1352613626/vector/wave-3d-abstract-wave-dots-in-dark-background-big-data-technology-vector-background.jpg?s=612x612&w=0&k=20&c=JU9MeTspGLLTqqyKXXKlSpPfKmdH5fZqA2PdRKXpdHo=')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>  

      <section className="relative pt-16">
        <div className="relative mb-6 -mt-32 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto">
            <Card>
              <CardHeader className='p-5 pb-1 text-xl font-bold'>
                Dashboard
              </CardHeader>
              <CardContent className='p-5 pt-0'>
                Isinya materi yang pernah saya pelajari.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className='container px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-4 border-opacity-0'>
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 items-center  space-y-0 pb-3">
              <p className='block font-bold'>Fetching Data Products dan Details Products</p>
              <div className="tracking-tight text-sm font-medium">Content :</div>
            </div>
            <div className="p-6 pt-0">
              <ul className="list-disc list-inside space-y-2 text-gray-700 pb-3">
                <li className='text-sm'>Fakestoreapi</li>
                <li className='text-sm'>Map Products</li>
                <li className='text-sm'>Button State</li>
              </ul>
              <p className="text-xs text-muted-foreground">
                <Link href="/product" className={`${buttonVariants({ variant: "outline" })} bg-slate-50`}>Demo Page</Link>
              </p>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 items-center  space-y-0 pb-3">
              <p className='block font-bold'>Cara Pake useState dan useEffect</p>
              <div className="tracking-tight text-sm font-medium">Content :</div>
            </div>
            <div className="p-6 pt-0">
              <ul className="list-disc list-inside space-y-2 text-gray-700 pb-3">
                <li className='text-sm'>Fetch API</li>
                <li className='text-sm'>useState</li>
                <li className='text-sm'>useEffect</li>
              </ul>
              <p className="text-xs text-muted-foreground">
                <Link href="/usestate" className={`${buttonVariants({ variant: "outline" })} bg-slate-50`}>Demo Page</Link>
              </p>
            </div>
          </div>
        </div>

      </div>

      <BottomNav/>
    </>
  );
}
