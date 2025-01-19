import { Link } from "react-router-dom";
import data from "../../data/index.json";
import pics from "../../data/img/placeholder-image-1.png";

export default function MyPortfolio() {
  console.log(data);
  return (
    <section id="MyPortfolio" className="bg-gradient-to-br from-black via-gray-900 to-black py-16 px-6 lg:px-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight font-serif">
          My <span className="text-gradient text-ellipsis">Projects</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-serif">
          Dive into some of my latest creations. From sleek frontend designs to
          robust backend systems, these projects showcase my skills and
          expertise as a full-stack developer.
        </p>
        <Link
          to="https://github.com/mukulsar143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.818-.261.818-.582 0-.287-.01-1.046-.015-2.053-3.338.726-4.042-1.61-4.042-1.61-.545-1.384-1.33-1.752-1.33-1.752-1.087-.744.083-.729.083-.729 1.202.084 1.834 1.234 1.834 1.234 1.07 1.833 2.806 1.304 3.491.997.107-.774.418-1.304.76-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.521.117-3.168 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.019.005 2.046.138 3.004.403 2.292-1.552 3.299-1.23 3.299-1.23.655 1.646.242 2.865.12 3.168.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.92.429.369.812 1.1.812 2.215 0 1.602-.014 2.891-.014 3.283 0 .324.217.698.823.58C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            Visit My GitHub
          </button>
        </Link>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-52 sm:h-60 md:h-72 lg:h-80">
              <img
                src={pics}
                alt={item.title}
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-sans text-white">{item.title}</h3>
              <p className="text-gray-400 font-serif">{item.description}</p>
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-200 text-sm font-medium"
              >
                Explore Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
