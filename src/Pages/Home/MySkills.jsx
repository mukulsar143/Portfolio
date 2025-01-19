import data from "../../data/index.json";
import pics from "../../data/img/feather-pen-2.png";  // Example static image

export default function MySkills() {
  return (
    <section
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20"
      id="mySkills"
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-300 font-serif">
            My Expertise
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto font-sans">
            A showcase of the tools and technologies I master to build
            innovative and scalable solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.skills?.map((item, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 bg-opacity-70 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-3 p-6"
            >
              {/* Skill Icon with Background */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center">
                  {/* Ensure the image source is dynamically pulled from the data */}
                  <img
                    src={item.icon || pics}  // Use item's icon or fallback to a default image
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-3 font-sans">{item.description}</p>
              </div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-10 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
