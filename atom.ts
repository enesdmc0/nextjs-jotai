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

// Sample - 2
export const firstNameAtom = atom("");
export const lastNameAtom = atom("");
export const ageAtom = atom("");

interface User {
    firstName: string;
    lastName: string;
    age: string;
}
export const updateUserAtom = atom(
    null,
    (get, set, userData: User) => {
        set(firstNameAtom, userData.firstName);
        set(lastNameAtom, userData.lastName);
        set(ageAtom, userData.age);

        return { success: true, message: "User updated successfully" };
    }
)

export const clearUserAtom = atom(null, (_, set) => {
    set(firstNameAtom, "");
    set(lastNameAtom, "");
    set(ageAtom, "");
    return { success: true, message: "User cleared successfully" };
})