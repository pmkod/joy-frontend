import React from 'react'

const AuthFormOptionsSeperator = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex items-center gap-4 my-5">
            <div className="h-px flex-1 bg-gray-400" />
            <span className="text-gray-600">
                {children}
            </span>
            <div className="h-px flex-1 bg-gray-400" />
        </div>
    )
}

export default AuthFormOptionsSeperator