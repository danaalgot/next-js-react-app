export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message")
    }

    console.log("form fields", formFields);
    return formFields;
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Contact us</h1>
      <form action={submitForm} className="space-y-5">
        <div>
          <label htmlFor="email">Email</label>
          <input 
            className="border-2 rounded-sm block p-2 w-full focus:border-pink-500 outline-0"
            id="email" 
            type="email"
            name="email"
            placeholder="Enter your email"
            required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            className="border-2 rounded-sm block p-2 w-full focus:border-pink-500 outline-0"
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            required></textarea>
        </div>
        <button className="bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-green-700" type="submit">
          Send message
        </button>
      </form>
    </>
  )
}