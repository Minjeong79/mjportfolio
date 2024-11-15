'use client'

import {useStore, useStoreModal} from "../store/store";

export default function Counter(){
    const { count } = useStore();
    const { num } = useStoreModal();
    return(<>{count}<br/>{num}</>)
}