import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-black text-white px-5 py-3 m-3' >
        <Link className='font-semibold' href={'/'}> TodoApp    </Link>
        <Link className='font-semibold border border-white p-2 rounded-xl' href={'/addTodo'}> Add Todo </Link>
    </nav>
  )
};

export default Navbar;
