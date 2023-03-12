import { PropsWithChildren } from "react";

const ImagesGaleryWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid gap-x-2 gap-y-2 sm:gap-1 grid-cols-4 sm:grid-cols-3">
            {children}
        </div>
    );
};

export default ImagesGaleryWrapper;
