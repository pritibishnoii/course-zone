"use client";
import React from 'react';

import { courseDetails } from '@/app/data';
import { FaClock, FaLayerGroup } from "react-icons/fa";
import Link from 'next/link';

const Page = ( { params } ) => {
    const { slug } = React.use( params );

    const course = courseDetails.find( course =>
        course?.title.toLowerCase().includes( slug.toLowerCase() )
    );

    if ( !course ) {
        return (
            <div className="w-screen h-screen flex items-center justify-center text-white text-2xl">
                Course not found
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen bg-gray-900 flex flex-col items-center px-4 py-8">
            <h1 className="text-3xl text-white font-bold mb-8 text-center">
                Explore Full Details of <span className="text-indigo-400">{ slug.toUpperCase() }</span>
            </h1>

            <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{ course.title }</h2>

                <div className="flex gap-6 text-gray-700 mb-6">
                    <div className="flex items-center gap-2">
                        <FaClock className="text-indigo-600" />
                        <span className="font-medium">{ course.duration }</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLayerGroup className="text-indigo-600" />
                        <span className="font-medium capitalize">{ course.level }</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Projects:</h3>
                    <ul className="space-y-2">
                        { course.projects.map( ( project ) => (
                            <li key={ project.id } className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-lg shadow-sm">
                                { project.title }
                            </li>
                        ) ) }
                    </ul>
                </div>

                <div className="mt-6">
                    <Link href="/" className="inline-block bg-indigo-900 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition duration-200">
                        ← Back to Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
