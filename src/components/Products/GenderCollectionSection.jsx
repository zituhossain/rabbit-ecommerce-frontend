import { Link } from "react-router-dom";
import womensCollectionImage from "../../assets/womens-collection.webp";
import mensCollectionImage from "../../assets/mens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens Collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="Womens Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white opacity-80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women&apos;s Collection{" "}
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mens Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="mens Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white opacity-80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men&apos;s Collection{" "}
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
