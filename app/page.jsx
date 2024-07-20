// import Image from "next/image";
'use client'
import Link from "next/link";
import axios from "axios";
import Button from "./components/Button";
import { useEffect, useState } from "react";



export default  function Home() {

  let [topic,setTopic]=useState([]);
  
useEffect(()=>{

  async function getTopic(){
  
    try{
        
        let d=await axios.get("http://localhost:3000/api/topics");
        setTopic(d.data);
    }
    catch(e){
       console.log(e.message);
    }
  }
  
  getTopic();
  
  },[])
  
  function del(id){
  console.log(id);
  }



  return (
  <div>
  {
    topic.map((e)=>{
      return(
        <div key={e._id} className="mn">
          <p>topic: {e.title}</p>
          <p>details:  {e.description}</p>
          <Link href={`/edit/${e._id}`}> Edit </Link>
          <Button  id={e._id} setTopic={setTopic} topic={topic} />
        </div>
      )
    })
    
  }
 </div> 
 
  )
}
