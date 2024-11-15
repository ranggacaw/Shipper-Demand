import BottomNav from '@/components/ui/BottomNav'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ViewUserButton } from '@/components/ui/ViewUserButton';
import exp from 'constants'
import { Image } from 'lucide-react';
import React from 'react'

const base_url = "https://fakestoreapi.com/products?limit=6";

interface Iproducts {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
}

const ProductPage = async() => {
  const response = await fetch(base_url)
  const products:Iproducts[] = await response.json()

  return (
    <>
      <section className="relative block h-[16vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://media.istockphoto.com/id/1352613626/vector/wave-3d-abstract-wave-dots-in-dark-background-big-data-technology-vector-background.jpg?s=612x612&w=0&k=20&c=JU9MeTspGLLTqqyKXXKlSpPfKmdH5fZqA2PdRKXpdHo=')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>  

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto">
            <Card>
              <CardHeader className='p-5 pb-1 text-xl font-bold'>
                Products
              </CardHeader>
              <CardContent className='p-5 pt-0'>
                Sumber dari fakestoreapi, mari kita coba fetching datanya.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto grid grid-cols-2 gap-1.5">
            {products.map((product) => {
              return (
                <Card key={product.id} className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-semibold text-gray-800 h-14">{product.title}</CardTitle>
                    <div className='w-full h-40 overflow-hidden rounded-lg'>
                      <img src={product.image} className="w-full h-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <CardDescription className="text-gray-600 max-h-14 overflow-hidden">{product.description}...</CardDescription>
                    <ViewUserButton 
                      title={product.title}
                      category={product.category}
                      price={product.price}
                      description={product.description}
                      >Details
                    </ViewUserButton>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

         
      <BottomNav/>
    </>
  )
}

export default ProductPage
