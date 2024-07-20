import Link from "next/link";


export default function Navbar(){
    return(
        <nav className="cc">
            <Link  href='/'>home</Link>
            <Link  href='/add'>Add Task</Link>
        </nav>
    )
}