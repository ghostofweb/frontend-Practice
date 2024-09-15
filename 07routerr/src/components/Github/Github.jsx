import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData();
// const [data,setdata] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/ghostofweb')
//         .then((res)=>res.json())
//         .then(data=>{
//             console.log(data)
//             setdata(data)
//         })
//     },[])
    
  return (<>
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github followers: {data.followers}
    <div className='flex align-middle justify-center py-20'>
    <img src={data.avatar_url} alt="github profile" />
    </div>
    </div>
    </>
)
}

const Githubinfo = async()=>{
    const response = await fetch('https://api.github.com/users/ghostofweb')
    const data = await response.json()
    return data
}

export{ Github,Githubinfo}
