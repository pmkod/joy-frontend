import Button from "@/ui/system/Button/Button";
import React from "react";

const UserToFollowSuggestion = () => {
    return (
        <div className="flex items-center px-6 py-3 hover:bg-slate-100 cursor-pointer transition-colors">
            <div className="mr-3">
                <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full cursor-pointer"
                />
            </div>
            <div className="flex-1">
                <div className="">Pierre Marie</div>
                <div className="text-sm text-gray-500">pierma</div>
            </div>
            {/* <div className=""> */}
            <Button size="sm">Suivre</Button>
            {/* </div> */}
        </div>
    );
};

export default UserToFollowSuggestion;
