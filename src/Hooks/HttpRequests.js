import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HttpRequests(url) {
    
    const [result, setResult] = useState({
        loading: true,
        data: null,
        error:false
    })

    useEffect(()=>{
        axios.get(url).then(response=>{
            setResult({
                loading: true,
                data: response.data
            })
        }).catch(error=>{
            setResult({ loading: false, error: true });
        });
    }, [url])

    return result
}
