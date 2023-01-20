import React from 'react'

const Post = () => {
    return (
        <div className="w-[500px] mb-10">
            <div className="flex items-center">
                <div className="mr-2.5 rounded-full w-11 h-11 bg-gray-200" />

                <div>
                    <div className="text-sm">Pierre Marie</div>
                    <div className="text-xs text-gray-400">pierma</div>
                </div>
            </div>

            <div className="text-sm text-gray-800 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a dolorem
                totam cumque tempore recusandae blanditiis, ratione soluta quis! Suscipit,
                atque eius debitis vitae animi dolores architecto? Earum, voluptatem sunt.
            </div>

            <div className="mt-3">
                <img
                    src="https://images.pexels.com/photos/14284974/pexels-photo-14284974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-[500px] h-[500px] object-cover"
                    alt=""
                />
            </div>
        </div>

    )
}

export default Post