import TermsAndPrivacyPolicyTextInfo from '@/ui/custom/TermsAndPrivacyPolicyTextInfo/TermsAndPrivacyPolicyTextInfo'
import Button from '@/ui/system/Button/Button'
import Input from '@/ui/system/Input/Input'
import Link from 'next/link'
import React from 'react'

const SignupDefaultPage = () => {
    return (

        <form action="#">
            <div className="text-3xl text-gray-800 font-semibold mb-6">Inscrivez vous</div>
            <Input label="Nom complet" placeholder="" />
            <Input
                label="Nom d'utilisateur"
            // helperText="Vous ne pourrez plus le changer"
            />
            <Input label="Email" placeholder="" />
            <Input type="password" label="Mot de passe" placeholder="" hasMarginBottom={false} />
            <div className="mt-7">
                <Button fullWidth={true} rounded="md" size="md">S'inscrire</Button>
            </div>
            <div className="mt-2">
                <TermsAndPrivacyPolicyTextInfo />
            </div>
            <div className="text-sm flex mt-2 mb-10">
                <p className="text-gray-600">Déja un compte ? &nbsp;</p>
                <Link href="/auth/login" className="text-blue-500">Connectez vous</Link>
            </div>
        </form>
    )
}

export default SignupDefaultPage