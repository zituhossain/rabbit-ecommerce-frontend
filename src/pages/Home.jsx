import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=1", altText: "Product 1" },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=2", altText: "Product 2" },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=3", altText: "Product 3" },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=4", altText: "Product 4" },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=5", altText: "Product 5" },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=6", altText: "Product 6" },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=7", altText: "Product 7" },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=8", altText: "Product 8" },
    ],
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Sellers */}
      <h2 className="text-3xl font-bold text-center mb-4">Best Seller</h2>
      <ProductDetails />

      {/* Womens Top Wear */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Featured Section */}
      <FeaturedSection />
    </div>
  );
};

export default Home;
