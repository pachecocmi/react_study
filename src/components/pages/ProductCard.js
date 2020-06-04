import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {

    const product = props.product

    return (
        <div className="p-3 text-center overflow-hidden rounded mb-4">
            <Link to={`/product/${product.id}`}>
                <div><img src={product.avatar} alt={product.avatar} /></div>
                <div>{product.first_name} {product.last_name}</div>
                <div>{ product.email }</div>
            </Link>
        </div>
    )
}
