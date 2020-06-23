import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {

    const product = props.product

    return (
        <div className="p-3 text-center overflow-hidden rounded mb-4 w-full sm:w-1/2 md:w-1/4 lg:1-1/8 xl:w-1/16 px-1">
            <Link to={`/product/${product.id}`}>
                <div><img src={product.thumbnailUrl} alt={product.thumbnailUrl} className="w-full" /></div>
                <div>{product.title}</div>
            </Link>
        </div>
    )
}
