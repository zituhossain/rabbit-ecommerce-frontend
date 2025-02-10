import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searc:", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full h-24 z-50 bg-white" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* search icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          {/* close icon */}
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <HiMiniXMark className="h-6 w-6 cursor-pointer text-gray-700" />
          </button>
        </form>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiMagnifyingGlass className="h-6 w-6 cursor-pointer text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
