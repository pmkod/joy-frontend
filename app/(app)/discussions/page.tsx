"use client"
import Button from '@/ui/system/Button/Button'
import React from 'react'
import { RiChatSmile3Line, RiGroupLine, } from 'react-icons/ri'

const DiscussionsPage = () => {
  return (
    <div className="md:hidden flex-1 flex flex-col justify-center items-center h-full">
      <div>
        <div className="text-3xl font-semibold mb-3">
          Cliquer sur une discussion pour <br /> voir les messages.
        </div>
        {/* <div className="mb-5 text-lg font-medium text-gray-500">Ou</div> */}
        <hr className='mb-12 w-20' />
        <div className="">
          <div className='mb-4'>
            <Button size='lg' variant='outline' colorScheme='dark' rightIcon={
              <RiGroupLine />
            }>
              Nouveau groupe
            </Button>
          </div>
          <Button size='lg' rightIcon={
            <RiChatSmile3Line />
          }>
            Nouveau message

          </Button>
        </div>
      </div>
    </div>
  )
}

export default DiscussionsPage