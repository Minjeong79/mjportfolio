import { selector } from "recoil";
import { modalState } from "./atom";

export const modalSelectState = selector({
    key:"modalSelectState",
    get : ({get})=>{
        const value = get(modalState);
        return value;
    },
});