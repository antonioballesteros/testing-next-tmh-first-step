"use server";

import { User } from "@/type/user";

export async function getUser(): Promise<User> {
    /*
    const res = await fetch('https://...', { next: { revalidate: 3600 } })
    const data = await res.json();
    return data as User;
    */
    return {
        name: "Antonio",
        email: "email@demo.test",
        image: "https://i.pravatar.cc/1200"
    };
}