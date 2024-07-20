import main from "@/libs/mongodb";
import Topic from "@/schema/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    let id=params.id;
    let {title,description}=await request.json();
    console.log(title,description);
    await main();
    let data=await Topic.findByIdAndUpdate(id,{title:title,description:description},{new:true});
    console.log(data);
    return NextResponse.json(data);
}



export async function GET(_request,{params}){
    let {id}=params;
    await main();
    let d=await Topic.findOne({_id:id});

    return NextResponse.json(d);
}

