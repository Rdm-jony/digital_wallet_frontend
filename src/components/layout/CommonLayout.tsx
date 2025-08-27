import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-svh">
            <Navbar />
            <div className="grow-1 lg:mx-20 md:mx-10 mx-5">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;