import TermsAndPrivacyPolicyTextInfo from '@/ui/custom/TermsAndPrivacyPolicyTextInfo/TermsAndPrivacyPolicyTextInfo'
import AuthFormOptionsSeperator from '@/ui/system/AuthFormOptionsSeperator/AuthFormOptionsSeperator'
import AuthServiceButton from '@/ui/system/AuthServiceButton/AuthServiceButton'
import Link from 'next/link'
import React from 'react'

const SignupPage = () => {
    return (
        <div className="">
            <div className="font-semibold text-3xl mb-10">Inscrivez vous</div>
            <div className="">
                <AuthServiceButton text="Continuer avec votre mail" />

                <AuthFormOptionsSeperator>Ou</AuthFormOptionsSeperator>

                <div className="mb-5">
                    <AuthServiceButton service="facebook" text="Continuer avec facebook" />
                </div>
                <div className="mb-2">
                    <AuthServiceButton service="google" text="Continuer avec google" />
                </div>
                <div className="mt-5">
                    <TermsAndPrivacyPolicyTextInfo />
                </div>


                <div className="text-sm mt-6">
                    <p className="text-gray-600">Déja un compte ? &nbsp;</p>
                    <Link href="/auth/login" className="text-blue-500">Connectez vous</Link>
                </div>
            </div>
        </div>

    )
}

export default SignupPage