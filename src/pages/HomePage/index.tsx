import { Box } from "@mui/material";
import {
  AudioSection,
  FirstSection,
  FourthSection,
  SecondSection,
  ThirdSection,
} from "./components";
import { PinImage, WebContainer } from "./HomePage.styled";

export default function HomePage() {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <PinImage src="/header-1.jpg" alt="footer" />
      </Box>
      <WebContainer maxWidth="lg">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <AudioSection />
      </WebContainer>
      <Box display="flex" alignItems="center" justifyContent="center" mb={8}>
        <PinImage src="/footer-1.jpg" alt="footer" />
      </Box>
    </Box>
  );
}
