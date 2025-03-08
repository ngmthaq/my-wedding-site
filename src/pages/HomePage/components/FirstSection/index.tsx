import { Box, Grid2, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import {
  Image,
  ImageWrapper,
  LeftFlowerImage,
  MapText,
  RightFlowerImage,
  TextWrapper,
} from "./FirstSection.styled";

export default function FirstSection() {
  return (
    <Grid2 container spacing={4}>
      <ImageWrapper size={{ xs: 12, md: 4 }}>
        <Image src="/anh-cuoi/0 (2).jpg" alt="couple-image" />
        <LeftFlowerImage
          src="/blue-flower-with-leaf.png"
          alt="blue-flower-with-leaf"
        />
      </ImageWrapper>
      <ImageWrapper size={{ xs: 12, md: 8 }}>
        <TextWrapper>
          <Box>
            <Typography variant="h1" fontFamily="Lobster" fontStyle="italic">
              Mạnh Thắng
            </Typography>
            <Typography variant="h1" fontFamily="Lobster" fontStyle="italic">
              & Hồng Ngọc
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              Ngày 22 tháng 03 năm 2025{" "}
              <Typography variant="caption">
                (Ngày 23 tháng 02 năm 2025 âm lịch)
              </Typography>
            </Typography>
            <MapText variant="subtitle1" mb={2}>
              <a
                rel="noopener"
                target="_blank"
                href="https://maps.app.goo.gl/D6R6i9m6FWLzhksj7"
              >
                Nhà Trai | Thôn Bình Tân, xã Công Lý, huyện Lý Nhân, tỉnh Hà Nam
                <OpenInNew fontSize="small" />
              </a>
            </MapText>
            <Typography variant="h6">
              Ngày 23 tháng 03 năm 2025{" "}
              <Typography variant="caption">
                (Ngày 24 tháng 02 năm 2025 âm lịch)
              </Typography>
            </Typography>

            <MapText variant="subtitle1">
              <a
                rel="noopener"
                target="_blank"
                href="https://maps.app.goo.gl/oLpyjqNBKspefxbN9"
              >
                Nhà Gái | Thôn An Tiến, xã An Ninh, huyện Bình Lục, tỉnh Hà Nam
                <OpenInNew fontSize="small" />
              </a>
            </MapText>
          </Box>
        </TextWrapper>
        <RightFlowerImage src="/pink-flower.png" alt="pink-flower" />
      </ImageWrapper>
    </Grid2>
  );
}
