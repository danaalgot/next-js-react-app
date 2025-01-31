async function getData() {
  const res = await fetch(
    "https://snowtooth-api-rest.fly.dev/"
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Lift status info</h1>
      <table className="border border-sky-800 w-full">
        <thead>
          <tr>
            <th className="bg-sky-800 text-white border-r py-2 px-5">Lift Name</th>
            <th className="bg-sky-800 text-white py-2 px-5">Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => (
            <tr key={lift.id} className="odd:bg-slate-100">
              <td className="px-5 py-2 border-r border-sky-800 text-center">{lift.name}</td>
              <td className="px-5 py-2 text-center">{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}