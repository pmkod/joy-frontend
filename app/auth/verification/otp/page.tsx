import Button from '@/ui/system/Button/Button'
import Input from '@/ui/system/Input/Input'
import React from 'react'

const OtpVerificationPage = () => {
    return (
        <div>
            <div className="text-3xl text-gray-800 font-semibold mb-6">
                Entrez le code que vous avez reçu
            </div>

            <Input label="Code" placeholder="" />
            <div className="mt-7">
                <Button fullWidth={true} size="lg">Continuer</Button>
            </div>
            <div className="mt-4">
                <div className="text-sm text-gray-700">
                    <div>Vous pouvez copier le code depuis votre mail et le collez</div>
                    <div>Il est assez long et compliqué pour des raison de sécurité</div>
                </div>
            </div>
        </div>

    )
}

export default OtpVerificationPage