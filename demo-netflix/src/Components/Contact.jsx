function Contact() {
    return (
      <section className="max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" required className="p-2 border rounded" />
          <input type="email" placeholder="Email" required className="p-2 border rounded" />
          <textarea placeholder="Message" required className="p-2 border rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;