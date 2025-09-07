import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { useMediaQuery } from "react-responsive";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
  <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
    </section>
  );
};

export default Hero;
