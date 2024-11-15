"use client"

import BottomNav from '@/components/ui/BottomNav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'

interface Iarticle {
  title: string,
  body: string,
}

const statePage = () => {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState<Iarticle | null>(null); 
  // usetState di setting null(kalau belom fetching api) atau interface Iarticle
  // const [article, setArticle] = useState("") kalo di setting begini, tipedata useState udah pasti string tapi kosong
  // trs kita declare lagi di dalem interface Iarticle, bingung dia di declare 2 kali jadi error pas di return

  function prevPage () {
    setCount(count - 1)
  }

  function nextPage () {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/posts/' + count)
    .then(res => res.json()) 
    .then(data => setArticle(data)) 
  }, [count])
  // []) kalo begini, tiap count berubah, useEffect ga reload. cuma sekali doang pas page baru di buka
  // tujuanya [count]) supaya tiap kali state count berubah, dia bakalan di reload sama si useEffect 

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
                useState dan useEffect
              </CardHeader>
              <CardContent className='p-5 pt-0'>
                Contoh dari penggunaan useState untuk mengganti state count dan useEffect untuk fetching API nya.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className='container px-4'>
          <div className="rounded-xl bg-card text-card-foreground text-center">
            <div className="p-6 items-center space-y-0 pb-3">
              <div className="tracking-tight text-sm font-medium">{count}</div>
              <Button onClick={prevPage} disabled={count == 1} className='mr-3'>Prev Page</Button>
              <Button onClick={nextPage}>Next Page</Button>
            </div>
            
            <div className="p-6 items-center space-y-0 pb-3">
              {article ? ( // kalo article kaga null/kosong, dia nampilin ini
                <>
                  <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                  <p>{article.body}</p>
                </>
              ) : (
                <p>Loading...</p> // Display while fetching data
              )}
            </div>
          </div>
      </div>

      <BottomNav/>
    </>
  )
}

export default statePage