import AboutMiddle from "./AboutMiddle/AboutMiddle";
import AboutTop from "./AboutTop/AboutTop";


const About = () => {
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500">
            <AboutTop></AboutTop>
            <AboutMiddle></AboutMiddle>
        </div>
    );
};

export default About;