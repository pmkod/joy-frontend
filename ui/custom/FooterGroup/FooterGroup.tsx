import Link from "next/link";

const FooterGroup = () => {
    return (
        <div className="w-52">
            <div className="text-xl font-medium text-gray-800 mb-5">
                Company
            </div>
            <div className="flex flex-col gap-y-1 items-start text-gray-600">
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    Carrers
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    News
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    About
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    Party
                </Link>
            </div>
        </div>
    );
};

export default FooterGroup;
