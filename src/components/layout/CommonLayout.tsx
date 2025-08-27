import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-svh">
            <Navbar />
            <div className="grow-1 mx-20">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;