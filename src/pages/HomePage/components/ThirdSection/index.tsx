import { Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import {
  MasonryImage,
  MasonryItem,
  ThirdSectionContainer,
} from "./ThirdSection.styled";

export default function ThirdSection() {
  return (
    <ThirdSectionContainer>
      <Typography variant="h3" textAlign="center" mb={6}>
        Một hành trình
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: 0 }}>
        {itemData.map((item, index) => (
          <MasonryItem key={index} title={item.title}>
            <MasonryImage src={item.img} alt={item.title} loading="lazy" />
          </MasonryItem>
        ))}
      </Masonry>
    </ThirdSectionContainer>
  );
}

const itemData = [
  {
    img: "/anh-cuoi/0 (1).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (3).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (4).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (5).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (6).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (7).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/0 (8).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/2 (1).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/2 (2).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/2 (3).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/2 (4).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/5 (1).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/5 (2).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/5 (3).jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/5.jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/6.jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/8.jpg",
    title: "anh cuoi Thang & Ngoc",
  },
  {
    img: "/anh-cuoi/10.jpg",
    title: "anh cuoi Thang & Ngoc",
  },
];
