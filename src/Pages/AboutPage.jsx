import { Link } from 'react-router-dom';
import { Users, Trophy, Target, ChevronRight } from 'lucide-react';

const AboutPage = () => {

    const values = [
        { icon: <Users className="h-12 w-12 mb-4 text-blue-400" />, title: 'Community', description: 'We foster a supportive and inclusive community of athletes, investors, and sports enthusiasts.' },
        { icon: <Trophy className="h-12 w-12 mb-4 text-yellow-400" />, title: 'Excellence', description: 'We strive for excellence in everything we do, from our platform to our investments and philanthropic efforts.' },
        { icon: <Target className="h-12 w-12 mb-4 text-green-400" />, title: 'Innovation', description: 'We continuously innovate to create new opportunities and solutions in the sports industry.' },
    ]

  return (
    <div className="bg-black text-white">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">About Ballers</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">Revolutionizing Sports Investment and Philanthropy</p>
          <Link to="/investments" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block animate-fade-in-up">
            Start Investing
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At Ballers, our mission is to revolutionize the sports industry by creating a platform that connects athletes, investors, and fans. We aim to empower athletes, foster innovation in sports, and create meaningful opportunities for everyone involved in the sports ecosystem.
              </p>
              <p className="text-gray-300">
                We believe in the power of sports to inspire, unite, and drive positive change in communities around the world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-4">
                We envision a future where sports investment is accessible to all, where athletes have the resources they need to excel, and where fans can directly support and benefit from the success of their favorite sports and athletes.
              </p>
              <p className="text-gray-300">
                Ballers is committed to making this vision a reality by leveraging technology, fostering community, and promoting sustainable growth in the sports industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Ballers Community</h2>
          <p className="text-xl mb-12">Be part of the revolution in sports investment and philanthropy.</p>
          <Link to="/investments" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block">
            Get Started <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

