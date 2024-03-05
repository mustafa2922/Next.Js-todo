import ConnectMongo from "@/libs/mongodb";
import Todo from "@/schema/todo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const data = await request.json();
        const { title, description } = data;
        await ConnectMongo();

        const newTodo = new Todo({ title: title, description: description });
        await newTodo.save();

        return NextResponse.json({ status: 200, message: "todo created" });
    }
    catch (e) {
        return NextResponse.json({ status: 400, message: "request failed", err:e });
    };
};

export const GET = async () => {
    try {
        await ConnectMongo();
        const todos = await Todo.find();
        return NextResponse.json({ status: 200, message: "data retrieved", data: todos });
    }
    catch (e) {
        return NextResponse.json({ status: 400, message: "request failed", err: e });
    }

};

export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get("id");
    try {
        await ConnectMongo();
        await Todo.findByIdAndDelete(id);
        return NextResponse.json({ status: 200, message: "item deleted" });
    }
    catch (e) {
        return NextResponse.json({ status: 400, message: 'request failed', err: e });
    }
}
