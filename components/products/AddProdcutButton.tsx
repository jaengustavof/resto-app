"use client";
import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProdcutButtonProps = {
    product: Product
}
export default function AddProdcutButton({product}: AddProdcutButtonProps) {

    const addToOrder = useStore((state) => state.addToOrder);

    return (
        <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={() => addToOrder(product)}
        >Agregar</button>
    )
}
