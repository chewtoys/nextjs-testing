import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */

export const counter = atom({
    key: Atoms.Counter,
    default: 0,
});

export const searchText = atom({
    key: Atoms.SearchText,
    default: "",
});


interface Todo{
    id: number;
    text: string;
}


export const todoList = atom<Todo[]>({
    key: Atoms.Todos,
    default: [],
});
