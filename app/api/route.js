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
  return NextResponse.json({ msg: "TODO CREATED" });
}

export async function DELETE(req, res) {
  const mongoId = await req.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "TODO Deleted" });
}

export async function PUT(req, res) {
  const mongoId = await req.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId,{$set:{isCompleted:true}});
  return NextResponse.json({ msg: "TODO Completed" });
}
