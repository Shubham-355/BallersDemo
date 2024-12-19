import { Heart, Users, Globe } from 'lucide-react';

const PhilanthropyPage = () => {

    const values = [
              { title: 'Lives Touched', icon: <Users className="h-16 w-16 mb-6 text-blue-400" />, value: '100,000+' },
              { title: 'Communities Served', icon: <Globe className="h-16 w-16 mb-6 text-green-400" />, value: '500+' },
              { title: 'Funds Raised', icon: <Heart className="h-16 w-16 mb-6 text-red-400" />, value: '$10M+' }
            ]

  return (
    <div className="bg-black text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-80"></div>
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">Ballers Philanthropy</h1>
          <p className="text-xl md:text-3xl mb-8 animate-fade-in-up">Empowering Communities Through Sports</p>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((stat, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition duration-500 hover:scale-105 animate-on-scroll">
                {stat.icon}
                <h3 className="text-2xl font-semibold mb-4">{stat.title}</h3>
                <p className="text-4xl font-bold text-blue-400">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilanthropyPage;