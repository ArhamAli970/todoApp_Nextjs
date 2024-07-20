import main from "@/libs/mongodb";
import Topic from "@/schema/topic";
// import { Gothic_A1 } from "next/font/google";
import { NextResponse } from "next/server";

export  async function GET(){
    await main();
    let topics=await Topic.find({});
    // console.log(data);
    return NextResponse.json(topics);
 
}

export async function POST(request){
    // console.log(request['title']);
    let {title,description}=await request.json();
    await main();
    let data= new Topic({
        title:title,
        description:description
    })
    await data.save()
    return Response.json({nam:"hello world"});
}

export async function DELETE(request){
    let id=request.nextUrl.searchParams.get('id');
    await main();
    let data=await Topic.findByIdAndDelete(id);

    return NextResponse.json(data);


}