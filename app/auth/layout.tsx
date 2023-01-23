import Link from 'next/link'
import React from 'react'



type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            <div className="sm:mb-4">
                <div className="pl-10 py-3 sm:pl-3">
                    <Link href="/" className="text-3xl sm:text-2xl font-bold text-black">Reborn</Link>
                </div>
            </div>

            <div className="w-[450px] sm:w-11/12 mx-auto">
                {children}
            </div>
        </div>

    )
}

export default AuthLayout