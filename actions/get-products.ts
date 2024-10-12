"use server";

import { Product } from "@/type/product";

export async function getProducts(): Promise<Product[]> {
    /*
    const res = await fetch('https://...', { next: { revalidate: 3600 } })
    const data = await res.json();
    return data as User;
    */
    return [
        {
            id:"1",
            name: "Coca Cola 330ml",
            description: "Lata cola cola 330ml",
            price: 10,
            image: "https://i.pravatar.cc/300"
        },{
            id:"2",
            name: "Coca Cola 500ml",
            description: "Lata cola cola 500ml",
            price: 20,
            image: "https://i.pravatar.cc/300"
        },{
            id:"3",
            name: "Coca Cola 650ml",
            description: "Lata cola cola 650ml",
            price: 25,
            image: "https://i.pravatar.cc/300"
        },{
            id:"4",
            name: "Pepsi 330ml",
            description: "Lata Pepsi 330ml",
            price: 12,
            image: "https://i.pravatar.cc/300"
        },
    ];
}