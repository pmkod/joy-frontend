"use client";
import Button from "@/ui/system/Button/Button";
import IconButton from "@/ui/system/IconButton/IconButton";
import Input from "@/ui/system/Input/Input";
import PostActionButton from "@/ui/system/PostActionButton/PostActionButton";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const Comment = () => {
    return (
        <div className="flex mb-4">
            <div className="mr-3">
                <img
                    src="https://images.unsplash.com/photo-1620794108219-aedbaded4eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>

            <div className="flex-1  px-4 pt-2 pb-2.5 rounded-2xl border border-slate-300">
                <div className="flex items-center">
                    <div className="text-sm mr-1">Amandine</div>
                    <div className="text-sm text-gray-500">aman</div>
                    <div className="mx-2 text-gray-600">·</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                        il y'a 1h
                    </div>
                </div>

                <div className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    pariatur!
                </div>
            </div>
        </div>
    );
};

const Post = () => {
    const [commentInputAreVisible, setCommentInputAreVisible] = useState(false);
    const showCommentInput = () => {
        setCommentInputAreVisible(true);
    };
    return (
        <div className="mb-10 p-6 sm:px-0 rounded-3xl border bg-white sm:border-0 border-slate-300">
            <div className="flex">
                <div className="mr-2.5 w-12 h-12">
                    <img
                        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-full cursor-pointer"
                    />
                </div>

                <div className="">
                    <div className="w-full flex items-center">
                        <div className="font-medium">Pierre Marie</div>
                        <div className="mx-3">-</div>
                        <div className="text-gray-500 text-sm">il y'a 1h</div>
                    </div>
                    <div className="text-sm text-gray-500">pierma</div>
                </div>
            </div>

            <div className="text-sm text-gray-800 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
                dolorem totam cumque tempore recusandae blanditiis, ratione
                soluta quis! Suscipit, atque eius debitis vitae animi dolores
                architecto? Earum, voluptatem sunt.
            </div>

            <div className="mt-3">
                <img
                    src="https://images.pexels.com/photos/14284974/pexels-photo-14284974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-[500px] h-[400px] object-cover rounded-xl"
                    alt=""
                />
            </div>

            <div className="flex mt-1 transform -translate-x-3">
                <div className="mr-1">
                    <PostActionButton
                        counter={50}
                        onClick={() => {}}
                        action="like"
                    />
                </div>
                <PostActionButton
                    counter={20}
                    onClick={showCommentInput}
                    action="comment"
                />
            </div>
            <div className="mb-3 text-sm">50 J'aime</div>

            {commentInputAreVisible && (
                <div className="flex mb-3">
                    <div className="mr-3">
                        <img
                            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            variant="fill"
                            rounded="full"
                            autoFocus={commentInputAreVisible}
                            hasMarginBottom={false}
                            placeholder="Ecrivez votre commentaire ici"
                        />
                    </div>
                </div>
            )}

            <div>
                <Comment />
                <Comment />
                <div className="cursor-pointer text-sm text-slate-600 hover:text-sky-700 transition-colors mt-2 text-right">
                    Afficher les 14 commentaires
                </div>
            </div>
        </div>
    );
};

export default Post;
