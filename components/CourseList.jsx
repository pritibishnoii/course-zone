"use client"
import React from 'react'
import {
    FaCode,
    FaJava,
    FaPhp,
    FaPython,
    FaReact,
    FaServer,
    FaCloudDownloadAlt,
} from "react-icons/fa";
import { courses, courseDetails } from '@/app/data'
import Link from 'next/link';

const CourseList = () => {
    return (
        <div className='w-screen  h-full flex flex-col justify-center items-center '>
            <h1 className='text-center text-3xl text-white my-6 capitalize'>Welcome to course zone - following courses we offer</h1>

            <div className='w-4/5   flex  flex-wrap gap-8 justify-around p-6'>
                {
                    courses.map( course =>
                        <div key={ course.id } className=' bg-transparent border border-gray-600 w-68 h-max py-8   flex justify-center items-center shadow-2xl rounded-lg transition-all delay-100 duration-500 hover:shadow-xl hover:shadow-gray-800 hover:-translate-y-2'>
                            <div className='flex flex-col items-center'>
                                <div className=' text-8xl my-2'>
                                    { course.icon }
                                </div>
                                <h5 className='text-white text-xl my-2 text-wrap text-center'>{ course.title }</h5>
                                <Link
                                    href={ `/coursezon/${ course.id }` } className='text-white bg-indigo-900 py-2 px-6 my-2 rounded-lg transition hover:scale-110 duration-300 hover:bg-indigo-800 delay-200  '>  Explore Course</Link>
                            </div>

                        </div> )
                }
            </div>


        </div>
    )
}

export default CourseList