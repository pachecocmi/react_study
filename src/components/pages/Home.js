import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div>
            <h1 className="text-center font-sans font-bold text-xl my-4 py-2">Title</h1>
            
            <div className="my-4">
                <img src="https://picsum.photos/seed/picsum/1200/420" className="w-full"/>
            </div>

            <h2 className="text-center font-sans font-bold text-l my-4 py-2">Featured Products</h2>

            <div className="my-4">
                <Products colLimit="4" />
            </div>
        </div>
    )
}
