import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(true);


    useEffect(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Request failed to fetch the data from server.!');
                }
               return res.json();
            })
            .then(data=>{
               setData(data);    
            })
            .catch(err=>{
                setError(err.message);
            })
    },[url]);

    return{data,error}
}
export default useFetch;