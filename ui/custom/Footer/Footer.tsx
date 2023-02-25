import React from "react";
import FooterGroup from "../FooterGroup/FooterGroup";

const Footer = () => {
    return (
        <div>
            <div className="bg-white pt-20 pb-20 px-32 sm:px-10">
                <div className="flex justify-between gap-x-10 sm:gap-y-10 flex-wrap">
                    <FooterGroup />
                    <FooterGroup />
                    <FooterGroup />
                    <FooterGroup />
                </div>
            </div>

            <div className="h-10 bg-gray-100 text-xs flex justify-between items-center px-12 sm:px-4 text-gray-600">
                <div className="">Copyright©2023</div>
                <div>Created by Kouassi Kodossou</div>
            </div>
        </div>
    );
};

export default Footer;
