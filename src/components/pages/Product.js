import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../scaffold/Loader'
import HttpRequests from '../../Hooks/HttpRequests';

export default function Product() {

    const { id } = useParams()
    const url = `https://reqres.in/api/users/${id}`

    let product = HttpRequests(url)
    
    let productInfo = product.error ? <div><p>Something Unexpected has Occured.</p></div> : <Loader />
    if( product.data ) 
        productInfo = <div>
            <div><img src={ product.data.avatar } alt={ product.data.avatar } /></div>
            <div>{ product.data.first_name } { product.data.last_name }</div>
            <div>{ product.data.email }</div>
        </div>

    return (
        <div>
            <h1>Products</h1>

            { productInfo }
        </div>
    )
}
