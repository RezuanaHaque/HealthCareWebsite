import  { useEffect, useState } from 'react';

const UseServices = () => {
    const [serviceList,setServices]=useState([])
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // console.log(serviceList);
    return [serviceList]
};

export default UseServices;