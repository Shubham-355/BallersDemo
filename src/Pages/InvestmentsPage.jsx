
const InvestmentsPage = () => {

  return (
    <div className="bg-black text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-900 opacity"></div>  
          <img src="/investments-hero.jpg" alt="Investments" className="w-full h-full object-cover" />
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">Ballers Investments</h1>
          <p className="text-xl md:text-3xl mb-8 animate-fade-in-up">Fueling the Future of Sports</p>
        </div>
      </section>
    </div>
  );
};

export default InvestmentsPage;
