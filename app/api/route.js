import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();


export async function GET(req, res) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(req, res) {
  const { title, description } = await req.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({msg:"TODO CREATED"})
}