import UserToFollowSuggestion from "@/ui/custom/UserToFollowSuggestion/UserToFollowSuggestion";
import Button from "@/ui/system/Button/Button";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1">{children}</div>

            <div className="w-96 pr-4 relative md:hidden">
                <div className="sticky top-8 border border-slate-200 rounded-3xl overflow-hidden pb-2">
                    <div className="flex justify-between px-6 py-4">
                        <div className="text-lg font-medium">Suggestions</div>

                        <Button variant="plain" colorScheme="dark" size="xs">
                            Voir tout
                        </Button>
                    </div>

                    <div>
                        <UserToFollowSuggestion />
                        <UserToFollowSuggestion />
                        <UserToFollowSuggestion />
                        <UserToFollowSuggestion />
                        <UserToFollowSuggestion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
