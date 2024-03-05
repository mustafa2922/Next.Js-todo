"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function EditForm({title , description , id}) {

    const [titleValue,setTitleValue] = useState(title);
    const [descValue,setDescValue] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/edit/${id}`,{newTitle:titleValue , newDesc:descValue});
            router.push('/');
            router.refresh();
        }
        catch(e){
            console.log("Error ---> ",e)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input className='border border-gray-800 my-2 p-2' type='text' placeholder='Enter Todo Title' value={titleValue} onChange={(e)=>{setTitleValue(e.target.value)}} />
        <input className='border border-gray-800 my-2 p-2' type='text' placeholder='Enter Todo Description' value={descValue} onChange={(e)=>{setDescValue(e.target.value)}}/>
        <button type='submit' className='border border-green-700 p-2 bg-green-700 text-white rounded-lg my-3' > Update Todo </button>
      </form>
    </div>
  )
};

export default EditForm;