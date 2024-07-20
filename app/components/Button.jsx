"use client"

import axios from "axios"
import { useRouter } from "next/navigation";


export default function Button({id,setTopic,topic}){
let router=useRouter();
    async function del(id){
      let conf=confirm("are you sure");
      if(conf){

    try{
      let data=await axios.delete(`http://localhost:3000/api/topics?id=${id}`)
      let ans=data.data;

      topic=topic.filter((e)=>{
        return e._id !=  ans._id
      })

      setTopic(topic);
      
    
      // router.refresh();
    }

    catch(e){
        console.log(e.message);
    }

      }
    }

    return(
        <button className="del" onClick={()=>{del(id)}}>
            Delete
        </button>
    )
}