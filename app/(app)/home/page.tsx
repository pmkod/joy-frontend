import CreatePost from '@/ui/custom/CreatePost/CreatePost'
import Post from '@/ui/custom/Post/Post'
import StoriesGroup from '@/ui/custom/StoriesGroup/StoriesGroup'
import Text from '@/ui/system/Text/Text'
import React from 'react'

const HomePage = () => {
    return (

        <div className="flex">
            {/* <div className="w-[180px] mr-10">Aa</div> */}
            <div className='flex-1'>
                <div className='mx-auto w-[580px]'>
                    <StoriesGroup />
                    <CreatePost />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <Post />
            </div>

            <div className='w-96 bg-gray-50'>

            </div>
        </div>

    )
}

export default HomePage