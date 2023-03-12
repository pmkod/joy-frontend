"use client";
import ImagesGaleryWrapper from "@/ui/custom/ImageGaleryWrapper/ImageGaleryWrapper";
import Button from "@/ui/system/Button/Button";
import IconButton from "@/ui/system/IconButton/IconButton";
import Tabs from "@/ui/system/Tabs/Tabs";
import React, { PropsWithChildren } from "react";
import { RiEditLine, RiMore2Fill } from "react-icons/ri";

type AccountStatItemProps = {
    label: string;
    value: number;
};

const AccountStatItem = ({ label, value }: AccountStatItemProps) => {
    return (
        <div className="flex items-center mr-5 [&:nth-child(3)]:mr-0">
            <div className="text-gray-900 text-lg sm:text-base font-semibold mr-1.5">
                {value}
            </div>
            <div className="text-gray-500 text-sm sm:text-xs font-light">
                {label}
            </div>
        </div>
    );
};

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
];

const likes = [
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
];

const saves = [
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
                src: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            },
        ],
    },
];

const AccountPage = () => {
    return (
        <div className="pt-5 sm:pt-8">
            <div className="px-20 sm:px-4">
                <div className="flex">
                    <div className="mr-8 sm:mr-4">
                        <img
                            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            className="w-32 h-32 sm:w-20 sm:h-20 rounded-full bg-gray-100 object-cover"
                        />
                    </div>

                    <div>
                        <div className="mt-2 text-xl sm:text-xl font-semibold">
                            Kodossou Kouassi
                        </div>
                        <div className="text-xl sm:text-lg font-medium text-gray-600">
                            kodokoua
                        </div>

                        <div className="mt-5">
                            <div className="flex">
                                <div className="mr-1">
                                    <Button
                                        variant="outline"
                                        colorScheme="dark"
                                        leftIcon={<RiEditLine />}
                                    >
                                        modifier profil
                                    </Button>
                                </div>
                                <div>
                                    <IconButton
                                        rounded="full"
                                        variant="outline"
                                        colorScheme="dark"
                                    >
                                        <RiMore2Fill />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg w-full">
                    <div className="mt-6 flex">
                        <AccountStatItem label="Posts" value={10} />
                        <AccountStatItem label="Abonnés" value={800} />
                        <AccountStatItem label="Abonements" value={200} />
                    </div>
                    <div className="mt-6 text-gray-700 font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Amet nobis veritatis labore optio harum beatae
                        odit numquam praesentium voluptates esse!
                    </div>

                    <a
                        href="http://kodossoukouassi.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="mt-2 text-blue-500 hover:text-blue-600 cursor-pointer">
                            kodossoukouassi.vercel.app
                        </div>
                    </a>
                </div>
            </div>

            <div className="mt-4 mb-10 px-20 sm:px-0">
                <Tabs>
                    <Tabs.List>
                        <Tabs.Tab>Posts</Tabs.Tab>

                        <Tabs.Tab>Enregistrements</Tabs.Tab>

                        <Tabs.Tab>Likes</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Body>
                        <Tabs.Panel>
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
                        </Tabs.Panel>
                        <Tabs.Panel>
                            <ImagesGaleryWrapper>
                                {saves.map(({ medias }, index) => (
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
                        </Tabs.Panel>
                        <Tabs.Panel>
                            <ImagesGaleryWrapper>
                                {likes.map(({ medias }, index) => (
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
                        </Tabs.Panel>
                    </Tabs.Body>
                </Tabs>
            </div>
        </div>
    );
};

export default AccountPage;
