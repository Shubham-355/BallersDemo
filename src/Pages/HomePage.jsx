import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Users, Award, Globe } from 'lucide-react';
import InvestmentIcon from '../Components/SVG/InvestmentIcon';
import PhilanthropyIcon from '../Components/SVG/PhilanthropyIcon';


const HomePage = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const values = [
    { title: 'Direct Impact:', icon: <PhilanthropyIcon className="h-16 w-16 mb-6 text-green-400" />, description: 'Your donations go directly to the athletes who need it most. Every contribution you make helps nurture the next generation of champions, providing them with the resources they need to excel.', link: '/investments' },
    { title: 'Transparency:', icon: <InvestmentIcon className="h-16 w-16 mb-6 text-red-400" />, description: "We prioritize complete transparency in our philanthropic process. You'll always know where your donations are going and see the tangible difference they make in the lives of athletes.", link: '/philanthropy' },
    { title: 'Genuine Talent:', icon: <Users className="h-16 w-16 mb-6 text-blue-400" />, description: 'At Ballers, we conduct thorough vetting to ensure that only deserving athletes benefit from your generosity. No scammers—just real stories of perseverance, passion, and potential waiting to be unlocked.', link: '/about' }
  ]

  const valuess = [
    { name: 'Alex Johnson', sport: 'Basketball' },
    { name: 'Sarah Williams', sport: 'Soccer' },
    { name: 'Michael Chen', sport: 'Tennis' },
    { name: 'Emma Rodriguez', sport: 'Swimming' }
  ]

  const valuesss = [
    { title: 'Invest', icon: <InvestmentIcon className="h-16 w-16 mb-6 text-purple-400" />, description: 'Choose from a variety of investment opportunities in sports.' },
    { title: 'Support', icon: <Award className="h-16 w-16 mb-6 text-yellow-400" />, description: 'Directly support athletes and sports initiatives you believe in.' },
    { title: 'Grow', icon: <Globe className="h-16 w-16 mb-6 text-indigo-400" />, description: 'Watch your investments grow as athletes and sports evolve.' }
  ]

  const valuessss = [
    { name: 'John D.', role: 'Investor', quote: 'Ballers has revolutionized the way I invest in sports. It\'s not just about returns, it\'s about being part of something bigger.' },
    { name: 'Sarah M.', role: 'Athlete', quote: 'The support I\'ve received through Ballers has been instrumental in advancing my career. It\'s more than just financial backing, it\'s a community.' }
  ]

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">Welcome to Ballers</h1>
          <p className="text-xl md:text-3xl mb-8 animate-fade-in-up">Invest in Sports. Support Champions.</p>
          <Link to="/investments" className="bg-black/20 p-8 backdrop-filter backdrop-blur-lg border border-blue-500 shadow-md shadow-blue-950 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 animate-fade-in-up inline-block">
            Start Investing
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll bg-black/20 p-8 backdrop-filter backdrop-blur-lg border rounded-lg border-blue-500 shadow-lg shadow-blue-950">Why Give Through Ballers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((pillar, index) => (
              <div key={index} className="bg-black/20 p-8 backdrop-filter backdrop-blur-lg border rounded-lg border-blue-500 shadow-lg shadow-blue-950 text-center transform transition duration-500 hover:scale-105 animate-on-scroll">
                <div className="flex justify-center items-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-gray-300 mb-6">{pillar.description}</p>
                <Link to={pillar.link} className="text-blue-400 hover:text-blue-300 inline-flex items-center transition duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-8 animate-on-scroll">Featured Athletes</h2>
          <div className='border-b backdrop-filter backdrop-blur-lg rounded-lg border-blue-500 shadow-lg shadow-blue-950 mb-8'></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {valuess.map((athlete, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-blue-500 shadow-blue-950 overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 animate-on-scroll">
                <div className="p-6 flex flex-col items-center">
                  <div className="flex justify-center items-center mb-4">
                    <Users className="w-24 h-24 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
                  <p className="text-gray-400 mb-4">{athlete.sport}</p>
                  <Link to="/investments" className="text-blue-400 hover:text-blue-300 transition duration-300">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valuesss.map((step, index) => (
              <div key={index} className=" bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition duration-500 hover:scale-105 animate-on-scroll">
                <div className="flex justify-center items-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {valuessss.map((testimonial, index) => (
              <div key={index} className="bg-black/20 p-8 backdrop-filter backdrop-blur-lg border rounded-lg border-blue-500 shadow-blue-950 bg-gray-800 shadow-xl transform transition duration-500 hover:scale-105 animate-on-scroll">
                <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-xl">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-on-scroll">Ready to Make an Impact?</h2>
          <p className="text-xl mb-12 animate-on-scroll">Join Ballers today and be part of the future of sports investment and philanthropy.</p>
          <Link to="/investments" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 animate-on-scroll inline-block">
            Explore Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

