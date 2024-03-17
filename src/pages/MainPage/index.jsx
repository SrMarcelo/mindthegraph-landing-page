import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import InfoCardsGroup from "../../components/InfoCardsGroup";
import FeaturesBox from "../../components/FeaturesBox";

const MainPage = () => {
  return (
    <>
      <Box className="bg-gradient-to-r from-orangish to-pinkish relative">
        <Header />
        <Toolbar />
        <HeroSection />
      </Box>
      <Box className="bg-gray">
        <InfoCardsGroup />
        <FeaturesBox />
      </Box>
    </>
  );
};

export default MainPage;
