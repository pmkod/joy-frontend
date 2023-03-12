import ImagesGaleryWrapper from "@/ui/custom/ImageGaleryWrapper/ImageGaleryWrapper";
import Input from "@/ui/system/Input/Input";
import React from "react";

const posts = [
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
        ],
    },
    {
        medias: [
            {
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
];

const ExplorePage = () => {
    return (
        <div>
            <div className="py-2 sm:py-4 px-8 sm:px-4">
                <div className="w-96 sm:w-full">
                    <Input
                        placeholder="Rechercher un utilisateur, un sujet"
                        hasMarginBottom={false}
                    />
                </div>
            </div>

            <div className="pl-8 sm:pl-0">
                <ImagesGaleryWrapper>
                    {posts.map(({ medias }, index) => (
                        <div
                            className="relative aspect-square cursor-pointer group"
                            key={index}
                        >
                            <div className="w-full h-full absolute group-hover:bg-gray-900 group-hover:bg-opacity-50 transition-colors"></div>
                            <img
                                src={medias[0].src}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </ImagesGaleryWrapper>
            </div>
        </div>
    );
};

export default ExplorePage;
