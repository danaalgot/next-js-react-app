"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({src}) => {
    return `./hotels/${src}.jpeg`
  }
  return (
    <div className="flex mb-4 pb-4 border-b gap-4 last:border-b-0">
      <Image 
        src={id} 
        width={300} 
        height={300} 
        loader={imageLoader} 
        alt={name}
      />
      <div>
        <h2 className="text-2xl">{name}</h2>
        <p>Has a capacity of {capacity} people</p>
      </div>
    </div>
  )
}