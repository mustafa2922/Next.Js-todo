import ConnectMongo from "@/libs/mongodb";
import Todo from "@/schema/todo";
import { NextResponse } from "next/server";

export const PUT = async (request, {params}) => {
    const { id } = params;
    try {
        const { newTitle, newDesc } = await request.json();
        console.log(newTitle , newDesc);
        await ConnectMongo();
        await Todo.findByIdAndUpdate(id, { title: newTitle, description: newDesc });
        return NextResponse.json({ status: 200, message: "todo updated" });
    }
    catch(e){
        return NextResponse.json({status:400,message:'request failed',err:e});
    };
};

export const GET = async (request , { params }) => {
    const {id} = params;
    try {
        await ConnectMongo();
        const todo = await Todo.findOne({ _id: id });
        return NextResponse.json({ status: 200, message: "data retrieved", data: todo });
    }
    catch(e){
        return NextResponse.json({status:400,message:"failed to retrieve data",err:e});
    };
};