"use client";
import CreatePost from "@/ui/custom/CreatePost/CreatePost";
import Post from "@/ui/custom/Post/Post";
import StoriesSuggestion from "@/ui/custom/StoriesSection/StoriesSection";
import Text from "@/ui/system/Text/Text";
import React from "react";

const HomePage = () => {
    return (
        <div className="mx-auto w-[580px]">
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
