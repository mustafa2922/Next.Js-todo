import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import DeleteComp from './deleteComp';

const getTodo = async () => {
  try {
    const todo = await axios.get('http://localhost:3000/api/todo');
    return todo.data.data;
  }
  catch (e) {
    console.log("error --> ", e);
  };
};

async function TodoList() {

  const  todo  = await getTodo();

  return (
    <>
      {todo.map((item,key) => {
        return (

          <div key={key} className='border border-gray-800 p-3 shadow-md rounded-lg my-4'>

            <div className='flex justify-between my-2' >
              <h1 className='font-bold text-2xl' >{item.title}</h1>
              <div className='flex flex-row gap-2 items-center' >
                <Link href={`/edit/${item._id}`} > <AiFillEdit size={25} /> </Link>
                <DeleteComp id={item._id} />
              </div>
            </div>

            <div>
              <div>{item.description}</div>
            </div>
          </div>
        )
      })
      }
    </>
  )
};

export default TodoList;