import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../scaffold/Loader'
import HttpRequests from '../../Hooks/HttpRequests';

export default function Product() {

    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`

    let product = HttpRequests(url)

    let productInfo = product.error ? <div><p>Something Unexpected has Occured.</p></div> : <Loader />
    if( product.data??true == false ) 
        productInfo = <div className="text-center">
            <div><img src={ product.data.url } alt={ product.data.thumbnailUrl } className="m-auto"/></div>
            <div>{ product.data.title }</div>
        </div>

    return (
        <div>
            { productInfo }
        </div>
    )
}
