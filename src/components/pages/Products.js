import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Products() {

    const url = "https://reqres.in/api/users/2"
    const [product, setProduct] = useState(null)

    let productInfo = ""
    useEffect(()=>{
        axios.get(url).then(response=>{
            setProduct(response.data)
        })
    }, [url])

    if( product ) 
        productInfo = <div>{ product.name }</div>

    return (
        <div>
            <h1>Products</h1>

            { productInfo }
        </div>
    )
}
