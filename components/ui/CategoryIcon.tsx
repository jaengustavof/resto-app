'use client';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Category } from "@prisma/client";

type CategoryIconProps = {
    category: Category; // el tipo Category se genera automáticamente con prisma. definido en schema.prisma
}

export default function CategoryIcon({category}: CategoryIconProps) {
    
    const params = useParams<{category: string}>();

    return (
        <Link
                className="text-xl font-bold"
                href={`/order/${category.slug}`}
            >
            <div
                className={`${category.slug === params.category ? 'bg-amber-400 ': ''}flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
            >
                <div className="w-16 h-16 relative">{/* el div padre controla el ancho de la imagen */}
                    <Image 
                        src={`/icon_${category.slug}.svg`} 
                        alt={`imagen ${category.name}`} 
                        fill
                    />
                </div>
                {category.name}
            
            </div>
        </Link>
    )
}
