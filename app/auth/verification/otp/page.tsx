"use client";
import Button from "@/ui/system/Button/Button";
import OtpInput from "@/ui/system/OtpInput/OtpInput";
import React from "react";

const OtpVerificationPage = () => {
    const onChange = () => {};
    return (
        <div>
            <div className="text-2xl font-medium mb-5">
                Entrez le code que vous avez reçu
            </div>
            <div className="mb-2">
                <OtpInput onChange={onChange} />
            </div>
            <div className="mt-7">
                <Button fullWidth={true} rounded="md">
                    Continuer
                </Button>
            </div>
            {/* <div className="mt-4">
                <div className="text-sm text-gray-700">
                    <div>
                        Vous pouvez copier le code depuis votre mail et le
                        collez
                    </div>
                    <div>
                        Il est assez long et compliqué pour des raison de
                        sécurité
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default OtpVerificationPage;
