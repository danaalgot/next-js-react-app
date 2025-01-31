import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch(
    "https://snowtooth-hotel-api.fly.dev/"
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Hotel details</h1>
      {data.map((hotel) => (
        <HotelBlock 
          key={hotel.id}
          id={hotel.id} 
          name={hotel.name} 
          capacity={hotel.capacity} 
        />
      ))}
    </>
  )
}