// app/page.tsx or app/page.jsx
import BackButton from '@/components/BackButton';
import React from 'react'


const fetchUsers = async () => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    if ( !res.ok ) throw new Error( 'Failed to fetch users' );
    return res.json();
}

const Page = async () => {
    const users = await fetchUsers();



    return (
        <div className=''>
            <h1 className='text-center text-2xl text-white font-bold capitalize my-8'>
                This is the server component
            </h1>
            <div className='flex justify-center'><BackButton /></div>
            <div className='flex flex-wrap gap-8 justify-center w-full mx-auto mt-8 '>
                { users.map( ( user ) => (
                    <div key={ user.id } className=' bg-transparent border border-gray-500 shadow-md shadow-gray-800 p-8 w-1/4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800'>
                        <h1 className='text-yellow-300 text-xl font-semibold'>{ user.username }</h1>
                        <p>{ user.email }</p>
                        <p>{ user.phone }</p>
                        <p>{ user.website }</p>
                        <p>{ user.address.city }</p>
                    </div>
                ) ) }

            </div>


        </div>
    )
}

export default Page;
