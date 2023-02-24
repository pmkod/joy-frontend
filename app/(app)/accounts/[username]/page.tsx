"use client";
import Button from "@/ui/system/Button/Button";
import IconButton from "@/ui/system/IconButton/IconButton";
import Tabs from "@/ui/system/Tabs/Tabs";
import React, { PropsWithChildren } from "react";
import {
    RiEdit2Fill,
    RiEdit2Line,
    RiEditLine,
    RiMore2Fill,
    RiMore2Line,
} from "react-icons/ri";

type AccountStatItemProps = {
    label: string;
    value: number;
};

const AccountStatItem = ({ label, value }: AccountStatItemProps) => {
    return (
        <div className="flex items-center mr-5">
            <div className="text-gray-900 text-lg font-semibold mr-1.5">
                {value}
            </div>
            <div className="text-gray-500 text-sm font-light">{label}</div>
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

const ImagesGaleryWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid gap-x-2 gap-y-2 grid-cols-4 sm:grid-cols-3">
            {children}
        </div>
    );
};

const AccountPage = () => {
    return (
        <div className="px-20 pt-5">
            <div className="flex">
                <div className="mr-8">
                    <img
                        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        className="w-32 h-32 rounded-full bg-gray-100 object-cover"
                    />
                </div>

                <div className="flex">
                    <div>
                        <div className="mt-2 text-2xl font-semibold">
                            Kodossou Kouassi
                        </div>
                        <div className="text-xl font-medium text-gray-600">
                            kodokoua
                        </div>
                        <div className="mt-6 flex">
                            <AccountStatItem label="Posts" value={10} />
                            <AccountStatItem label="Abonnés" value={800} />
                            <AccountStatItem label="Abonements" value={200} />
                        </div>
                    </div>

                    <div className="mt-2 ml-12">
                        <div className="flex">
                            <div className="mr-1">
                                <Button
                                    variant="outline"
                                    colorScheme="dark"
                                    leftIcon={<RiEditLine />}
                                >
                                    modifier mon profil
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
                        {/* Ou */}
                        {/* <Button variant="fill">Suivre</Button> */}
                    </div>
                </div>
            </div>
            <div className="max-w-lg">
                <div className="mt-6 text-gray-700 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet nobis veritatis labore optio harum beatae odit numquam
                    praesentium voluptates esse!
                </div>

                <div className="mt-2 text-blue-500 hover:text-blue-600 cursor-pointer">
                    kodossoukouassi.vercel.app
                </div>
            </div>
            <div className="mt-4 mb-10">
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
