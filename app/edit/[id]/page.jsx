

import EditForm from "@/app/components/EditForm."



export default function edit({params}){
    return(
        <EditForm id={params.id}/>
    )
}