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
      <Masonry columns={3} spacing={2}>
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
    img: "/bglobal-1.jpeg",
    title: "Ảnh đầu tiên khi làm cùng công ty",
  },
  {
    img: "/ha-noi-2.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-3.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-4.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-5.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-6.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-7.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-8.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-9.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-10.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-11.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-12.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-13.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/ha-noi-14.jpeg",
    title: "Hà Nội nè",
  },
  {
    img: "/nam-dinh-1.jpeg",
    title: "Nam Định nè",
  },
  {
    img: "/da-nang-1.jpeg",
    title: "Du lịch Đà Nẵng",
  },
  {
    img: "/da-nang-2.jpeg",
    title: "Du lịch Đà Nẵng",
  },
  {
    img: "/da-nang-3.jpeg",
    title: "Du lịch Đà Nẵng",
  },
  {
    img: "/da-nang-4.jpeg",
    title: "Du lịch Đà Nẵng",
  },
  {
    img: "/ha-long-1.jpeg",
    title: "Du lịch Hạ Long",
  },
  {
    img: "/ha-long-2.jpeg",
    title: "Du lịch Hạ Long",
  },
  {
    img: "/ha-long-3.jpeg",
    title: "Du lịch Hạ Long",
  },
  {
    img: "/ha-long-4.jpeg",
    title: "Du lịch Hạ Long",
  },
  {
    img: "/thailand-1.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-2.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-3.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  //   {
  //     img: "/thailand-4.jpeg",
  //     title: "Du lịch Thái Lan nè",
  //   },
  {
    img: "/thailand-5.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-6.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-7.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-8.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-9.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/thailand-10.jpeg",
    title: "Du lịch Thái Lan nè",
  },
  {
    img: "/cuoi-4.jpeg",
    title: "Cưới thui",
  },
  {
    img: "/cuoi-2.jpeg",
    title: "Cưới thui",
  },
  {
    img: "/cuoi-3.jpeg",
    title: "Cưới thui",
  },
];
