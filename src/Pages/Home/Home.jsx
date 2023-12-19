import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const Home = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
      <TopSection></TopSection>
      <MiddleSection></MiddleSection>
      <BottomSection></BottomSection>
    </div>
  );
};

export default Home;
