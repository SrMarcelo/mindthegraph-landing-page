import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";

const MainPage = () => {
  return (
    <Box className="bg-gradient-to-r from-orangish to-pinkish relative">
      <Header />
      <Toolbar />
      <HeroSection />
    </Box>
  );
};

export default MainPage;
