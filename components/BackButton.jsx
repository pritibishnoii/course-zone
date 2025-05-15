'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={ () => router.back() }
            className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition"
        >
            ⬅ Back
        </button>
    );
};

export default BackButton;
