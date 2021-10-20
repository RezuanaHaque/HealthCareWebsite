import  { useEffect, useState } from 'react';

const UseServices = () => {
    const [serviceList,setServices]=useState([])
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return [serviceList]
};

export default UseServices;