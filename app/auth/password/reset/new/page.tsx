import Button from '@/ui/system/Button/Button'
import Input from '@/ui/system/Input/Input'
import React from 'react'

const PasswordResetNewPasswordPage = () => {
    return (
        <div>
            <div className="text-3xl text-gray-800 font-semibold mb-6">
                Votre nouvau mot de passe
            </div>

            <Input type="password" label="Nouveau mot de passe" placeholder="" />
            <Input type="password" label="Confirmer le mot de passe " placeholder="" />

            <div className="mt-7">
                <Button fullWidth={true} size="lg">Continuer</Button>
            </div>
        </div>
    )
}

export default PasswordResetNewPasswordPage