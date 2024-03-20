import { useEffect,useState } from "react"
import 'boxicons' 
import {Link,NavLink} from 'react-router-dom'
import { useLoaderData } from "react-router-dom"
function Github(){
const data = useLoaderData()
//     const [data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/Swarup012')
//        .then(response =>response.json())
//        .then(data=>{
//            setData(data)
//        })
// },[])
    return(
       <>
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl justify-center flex items-center gap-4'>Github followers: {data.followers}
         <img src={data.avatar_url} alt="Git picture" width={300} />
         <Link to='https://github.com/Swarup012' target="blank"><box-icon type='logo' className='w-1.5' name='github'></box-icon></Link>
         </div>
       </>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Swarup012')
    return response.json()
}