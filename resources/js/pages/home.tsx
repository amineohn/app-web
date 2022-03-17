import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const Home = () => {
    return (
        <>
            <div className="h-screen bg-rose-500">
                <nav className="bg-rose-600 h-28 py-10 px-8">
                    <div className="flex items-center justify-between content-center">
                        <InertiaLink
                            href="/"
                            className="text-white font-medium text-2xl"
                        >
                            Home
                        </InertiaLink>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Home;
