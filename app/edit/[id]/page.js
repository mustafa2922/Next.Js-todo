import EditForm from '@/components/editForm';
import axios from 'axios';
import React from 'react';

const getTodoById = async (id) => {
  try{
    const data = await axios.get(`http://localhost:3000/api/edit/${id}`);
    return data.data.data;
  }
  catch(e){
    console.log('Error getting todo by id --> ',e);
  };
};


async function EditTodo({params}) {
  const {id} = params;
  const todo = await getTodoById(id);
  return (
    <EditForm title={todo.title} description={todo.description} id={id}/>
  )
};

export default EditTodo;
