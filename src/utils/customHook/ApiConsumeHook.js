import axios from "axios";
import React, {useEffect, useState} from "react";

export const useApiHook= ()=>{
    const [responseState, setResonseState] = useState()

    const [apiFirst, setApiFirst] = useState()
    const [apiSecond, setApiSecond] = useState()
    
    const getApiResponse= async()=>{
        try {
            const response = await axios.get(`https://bazilmuralidharan.github.io/api/ventinoApiTest.json`)
            // console.log('respponse, ', response)
            setResonseState(response?.data)
            // let apiFirst ; 
            // let apiSecond; 
            let apiFirst= response?.data?.slice(0,8) ; setApiFirst(apiFirst)
            let apiSecond= response?.data?.slice(9,17) ; setApiSecond(apiSecond)
            // console.log('first ',apiFirst)
            // console.log('second',apiSecond)
            
        } catch (error) {
            console.log('error_in_Api', error)
        }
    }

    useEffect(()=>{
        getApiResponse()
    },[])    
    // console.log('first [] ',apiFirst)
    // console.log('second []',apiSecond)
    // return [responseState] ; 

    return {
        apiFirst, apiSecond
    }
}