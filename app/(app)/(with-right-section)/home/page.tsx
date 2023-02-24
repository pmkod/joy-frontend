"use client";
import CreatePost from "@/ui/custom/CreatePost/CreatePost";
import Post from "@/ui/custom/Post/Post";
import StoriesSuggestion from "@/ui/custom/StoriesSection/StoriesSection";
import Text from "@/ui/system/Text/Text";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div className="mx-auto w-[580px] sm:w-screen sm:px-3">
            <div className="pt-4">
                <Link
                    href="/home"
                    className="hidden sm:block text-2xl font-bold"
                >
                    Reborn
                </Link>
            </div>
            <StoriesSuggestion />
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default HomePage;
