import React, { useState, useEffect } from 'react'

import Loader from '../scaffold/Loader'
import ProductCard from './ProductCard';
import HttpRequests from '../../Hooks/HttpRequests';

export default function Products() {

    const url = `https://jsonplaceholder.typicode.com/photos`;
    // const url = `https://reqres.in/api/users`;
    
    let products = HttpRequests(url)
    
    let content = products.error ? <div><p>Something Unexpected has Occured.</p></div> : <Loader />;
    if( products.data ) 
        content = products.data.map((product, key)=><ProductCard key={key} product={product} />)

    return (
        <div>
            <h1 className="text-center font-sans font-bold text-xl mx-3 px-6">Products</h1>

            <div className="flex flex-wrap w-full">
                { content }
            </div>
        </div>
    )
}
