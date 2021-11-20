//@flow

import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

type Product = {
    id: number,
    name: string,
    price: number
}

export default function Products(): React$Element<"div"> {
    const [products, setProducts] = useState < Array < Product >> ([]);

    useEffect(() => {
        axios('http://localhost:1337/products')
            .then(response => {
                setProducts(response.data)
            })
    }, [])

    return (
        <div>
            {products.map(pr => {
                return (
                    <p>
                        {JSON.stringify(pr)}
                    </p>
                )
            })}
        </div>
    )
}