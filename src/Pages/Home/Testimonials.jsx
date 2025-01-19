import data from "../../data/index.json";
import logo from '../../Pics/python.jpg';

export default function Testimonial() {
  return (
    <section className="testimonial-section bg-gradient-to-br from-black via-gray-900 to-black py-16" id="testimonial">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight font-serif">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-gray-400">
            Read what others are saying about my work and expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data?.testimonial?.map((item, index) => (
            <div key={index} className="testimonial-card bg-gray-800 text-white rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-600">
              <div className="p-8 space-y-4">
                {/* Star Rating */}
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: 5 }, (reviews, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-gray-200">{item.description}</p>

                {/* Author Information */}
                <div className="flex items-center mt-6 space-x-4">
                  <img 
                    src={logo} 
                    alt="Author Avatar" 
                    className="w-12 h-12 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-110"
                  />
                  <div>
                    <p className="text-md font-semibold">{item.author_name}</p>
                    <p className="text-sm text-gray-400">{item.author_designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
