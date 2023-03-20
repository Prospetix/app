import { writable } from "svelte/store";


export const feedStore = writable([
    {
        id: 1,
        name: 'john',
        text: 'this is new math calculations',
        date: '2023-01-04'
    },
    {
        id: 2,
        name: 'peter',
        text: 'this is new math calculations',
        date: '2023-01-04'
    },
    {
        id: 3,
        name: 'mary',
        text: 'this is new math calculations',
        date: '2023-01-04'
    }
])