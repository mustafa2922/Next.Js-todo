"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";


function DeleteComp({id}) {

    const router = useRouter();

    const DeleteTopic = async () => {
        const confirmed = confirm("Are You Sure ??");

        if (confirmed) {
            try{
                await axios.delete(`http://localhost:3000/api/todo?id=${id}`)
                router.refresh();
            }
            catch(e){
                console.log("error --> ",e)
            }
        }
        else{
            return;
        }
    };

  return (
    <button onClick={DeleteTopic} className='text-red-600' > <AiOutlineDelete/> </button>
  )
};

export default DeleteComp;