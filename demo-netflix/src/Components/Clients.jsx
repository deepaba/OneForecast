function Clients() {
    const logos = ["clientA.png", "clientB.png"];
    return (
      <section className="py-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Trusted By</h3>
        <div className="flex justify-center gap-8">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Client logo" className="h-16" />
          ))}
        </div>
      </section>
    );
  }
  
  export default Clients;