import React from 'react';

const WorkSection = () => {
    return (
        <div>
            <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full outline-2 outline-offset-2 outline-solid outline-red-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Register</h3>
              <p className="text-gray-600">Sign up as a donor or create a blood request</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full outline-2 outline-offset-2 outline-solid outline-red-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">Find compatible donors nearby or get matched with recipients</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full outline-2 outline-offset-2 outline-solid outline-red-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Donate/Receive</h3>
              <p className="text-gray-600">Complete the donation at a certified blood bank</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default WorkSection;