import HeroSection from "./components/HeroSection";
// import { useProductContext } from "./context/productcontex";

const About = () => {
  // const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      
      <HeroSection myData={data} />
    </>
  );
};

export default About;