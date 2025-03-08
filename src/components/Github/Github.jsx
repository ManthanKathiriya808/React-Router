import React, { useEffect, useState } from "react";


export function Github(){
    const [data,setData] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
    },[])

    return(
        <div className="text-center m-4 bg-gray-600 p-10 text-3xl  text-white"> GitHub followers: {data.followers}
        <img src={data.avatar_url} className="mt-15 mx-auto" alt="" /></div>
    )
}