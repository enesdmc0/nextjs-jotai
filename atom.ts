import { atom } from "jotai";

// Sample - 1 
export const priceAtom = atom<number>(150);
export const quantityAtom = atom<number>(2);
export const taxRateAtom = atom<number>(0.18);

export const totalPriceAtom = atom((get) => {
    const price = get(priceAtom);
    const quantity = get(quantityAtom);
    const taxRate = get(taxRateAtom);

    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    return subtotal + tax;
})