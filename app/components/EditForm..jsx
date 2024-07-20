"use client"
import axios from "axios";
// import { Router } from "next/navigation";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"
export default function EditForm({id}){

    let router=useRouter();

    let fin={title:"",description:""};
    let [data,setData]=useState(fin);
    

    useEffect(()=>{

       async function fun(){ 

        try{
       let d= await axios.get(`http://localhost:3000/api/topics/${id}`)

       let {title,description}=d.data;

       setData({title:title,description:description});

        }

        catch(e){
            console.log(e);
        }


       }

       fun();


    },[])

    function chg(e){
        let v=e.target.value;

        setData({...data , [e.target.name]:v });

    }


    async function sub(e){
        e.preventDefault();

        try{

            await axios.put(`http://localhost:3000/api/topics/${id}`,data)
            router.refresh();
            router.push("/");
             
        }

        catch(e){

        }


    }


    return(


        <>
        <h1>Edit form</h1>
        <form>
       <div className="mn">
        <input type="text" name="title" placeholder="add Task" className="ip" 
        value={data.title} onChange={chg}/>
        <br /><br />
        <input type="text" name="description" placeholder="add description" className="ip" value={data.description} onChange={chg} />
        <br /> <br />

        <button onClick={sub}>Edit Task</button>

        </div>

       </form>
       </>

    )

}