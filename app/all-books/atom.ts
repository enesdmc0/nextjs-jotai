import { atom } from "jotai";

export const tableDataAtom = atom([]);

export const tableDataFetchAtom = atom(null, async (_, set) => {
    const response = await fetch("http://localhost:3000/api/books");
    const data = await response.json();
    set(tableDataAtom, data);
});