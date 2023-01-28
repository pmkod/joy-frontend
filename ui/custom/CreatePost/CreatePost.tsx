import Button from "@/ui/system/Button/Button";
import React from "react";
import { RiImage2Line, RiVideoLine } from "react-icons/ri";

const CreatePost = () => {
    return (
        <div className="rounded-3xl bg-slate-100 border border-slate-300 mb-6">
            <div className="px-6">
                <input
                    type="text"
                    className="w-full h-20 bg-transparent"
                    placeholder="Quoi de neuf ?"
                />
            </div>
            <div className="px-6">
                <hr />
            </div>
            <div className="flex items-center justify-between pt-3 pl-3 pr-6 pb-3">
                <div className="flex">
                    <Button
                        variant="plain"
                        size="sm"
                        colorScheme="dark"
                        leftIcon={<RiImage2Line />}
                    >
                        Ajouter photo
                    </Button>
                    <Button
                        variant="plain"
                        size="sm"
                        leftIcon={<RiVideoLine />}
                        colorScheme="dark"
                    >
                        Ajouter video
                    </Button>
                </div>
                <Button>Publier</Button>
            </div>
        </div>
    );
};

export default CreatePost;
