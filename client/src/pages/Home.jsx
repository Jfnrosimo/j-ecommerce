//Import components
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
