import Button from '@/ui/system/Button/Button'
import Input from '@/ui/system/Input/Input'
import React from 'react'

const PAsswordResetPage = () => {
    return (

        <div>
            <div className="text-3xl text-gray-800 font-semibold mb-6">
                Renitializer votre mot de passe
            </div>

            <Input label="Email" placeholder="" />

            <div className="mt-7">
                <Button fullWidth={true} size="lg">Continuer</Button>
            </div>

            <div className="mt-8 text-sm text-gray-700">
                Un code vous seras envoyé par mail
            </div>
        </div>

    )
}

export default PAsswordResetPage