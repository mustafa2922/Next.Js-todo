"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function addTodo() {

  const [title,setTitle] = useState('');
  const [description,setDecription] = useState('');

  const router = useRouter();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill out all fields");
      return;
    }

    try{
      await axios.post('http://localhost:3000/api/todo',{title:title , description:description})
      router.push('/');
      router.refresh();
    }
    catch(e){
      console.log("error ---> ",e)
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit} className='flex flex-col'>
        <input className='border border-gray-800 my-2 p-2' type='text' placeholder='Enter Todo Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input className='border border-gray-800 my-2 p-2' type='text' placeholder='Enter Todo Description' value={description} onChange={(e)=>{setDecription(e.target.value)}} />
        <button type='submit' className='border border-green-700 p-2 bg-green-700 text-white rounded-lg my-3' > Add Todo </button>
      </form>
    </div>
  )
};

export default addTodo;