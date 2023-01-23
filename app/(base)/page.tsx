"use client"
import Button from '@/ui/system/Button/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>

      <div className="h-screen text-center flex flex-col items-center">
        <p
          className="mt-20 sm:mt-12 w-2/3 text-center text-7xl md:text-5xl sm:font-medium sm:w-full sm:text-lg text-grey-800 font-semibold"
        >
          Bienvennue sur joy votre espace agreable
        </p>

        <div
          className="mt-10 text-xl md:text-lg w-2/5 md:w-4/5 text-center text-gray-700"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt et neque
          temporibus veritatis accusamus velit.
        </div>

        <div className="flex mt-14">
          <Button size="xl">
            Télecharger l'application
          </Button>
        </div>
      </div>
      <div className='h-screen flex justify-center'>
        <Link href="/home" className=''>
          <Button>
            Home
          </Button>
        </Link>
      </div>
    </div>

  )
}

export default page