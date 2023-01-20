import AuthFormOptionsSeperator from '@/ui/system/AuthFormOptionsSeperator/AuthFormOptionsSeperator'
import AuthServiceButton from '@/ui/system/AuthServiceButton/AuthServiceButton'
import Button from '@/ui/system/Button/Button'
import Input from '@/ui/system/Input/Input'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (

        <div className="">
            <form action="">
                <div className="mb-8">
                    <div className="font-semibold text-2xl">Connectez vous</div>
                </div>

                <Input type="email" label="Email" placeholder="" />
                <Input
                    type='password'
                    label="Mot de passe"
                    placeholder=""
                    hasMarginBottom={false}

                />
                <div className="mb-2 mt-2 flex justify-end">
                    <Link
                        href="/auth/password/reset"
                        className="text-sm text-gray-800 hover:text-blue-500 border-b border-transparent hover:border-blue-500"
                    >
                        Mot de passe oublié
                    </Link>
                </div>
                <div className="mt-6">
                    <Button rounded='md' fullWidth={true}>Se connecter</Button>
                </div>
            </form>

            <AuthFormOptionsSeperator>Ou</AuthFormOptionsSeperator>
            <div className="flex flex-col gap-4 mb-4">
                <AuthServiceButton
                    service="facebook"
                    text="Continuez avec facebook"
                />
                <AuthServiceButton
                    service="google"
                    text="Continuez avec google"
                />
            </div>
            <div className="text-sm flex mt-2">
                <p className="text-gray-600">Pas de compte ? &nbsp;</p>
                <Link href="/auth/signup" className="text-blue-500">Inscrivez vous</Link>
            </div>
        </div>

    )
}

export default LoginPage