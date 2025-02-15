import { Typography } from "@mui/material";
import {
  Flower1,
  Flower2,
  Flower3,
  SecondSectionContainer,
} from "./SecondSection.styled";

export default function SecondSection() {
  return (
    <SecondSectionContainer>
      <Typography variant="h3" textAlign="center" mb={6}>
        Bắt đầu từ một sự cố
      </Typography>
      <Typography variant="body1" textAlign="justify" mb={1}>
        Ngọc và Thắng làm cùng nhau tại một công ty công nghệ, một người làm kỹ
        sư phần mềm, một người làm chuyên viên phân tích nghiệp vụ, cả hai trùng
        hợp làm chung một dự án.
      </Typography>
      <Typography variant="body1" textAlign="justify" mb={1}>
        Buổi tối hôm đó, sau khi kết thúc ca làm, xe của Ngọc bất ngờ không khởi
        động được. Đang loay hoay, Ngọc nhớ ra Thắng, nhờ Thắng chở Ngọc về nhà.
        Nhờ đó, họ quen nhau, dần trò chuyện và trở nên thân thiết.
      </Typography>
      <Typography variant="body1" textAlign="justify" mb={6}>
        Từ những lần gặp gỡ, tình cảm nảy nở lúc nào không hay. Ba năm sau, từ
        một sự cố nhỏ, họ nắm tay nhau bước vào lễ đường, bắt đầu hành trình mới
        của cuộc đời.
      </Typography>
      <Flower1 src="/flowers.webp" alt="flowers" />
      <Flower2 src="/pink-flower-with-leaf.png" alt="flowers" />
      <Flower3 src="/leaves-branch.jpg" alt="flowers" />
    </SecondSectionContainer>
  );
}
