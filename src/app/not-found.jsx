import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center bg-red-50">

            <h1 className="text-4xl font-bold  text-black">404 Page not found</h1>
            <Link href={'/'}>
                <button className="btn btn-primary">
                    Go back home
                </button>
            </Link>
        </div>
    );
};

export default notFoundPage;