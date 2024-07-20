"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
// import { title } from "process";
import { useState } from "react"

export default function Add(){
let router=useRouter();
let fld={title:"",description:""}
let[data,setData]=useState(fld);

function fun(e){
  let v=e.target.value;
  setData({...data,[e.target.name]:v});
}

async function sub(e){
  e.preventDefault();
  if(data.title.length==0 || data.description.length==0){
    return alert("title and description require");
  }

  try{
    await axios.post("http://localhost:3000/api/topics",data);
    router.refresh();
    router.push('/');
  }

  catch(e){
    console.log(e.message);
  }

}


  return(
       <form>
       <div className="mn">
        <input type="text" placeholder="add Task" name="title" className="ip" value={data.title} onChange={fun} />
        <br /><br />
        <input type="text" placeholder="add description" name="description" className="ip" value={data.description}  onChange={fun}/>
        <br /> <br />

        <button onClick={sub}> Add task</button>

        </div>

       </form>
  )
}