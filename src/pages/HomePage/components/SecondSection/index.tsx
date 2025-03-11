import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Flower1,
  Flower2,
  Flower3,
  SecondSectionContainer,
  TimelineWrapper,
} from "./SecondSection.styled";

export default function SecondSection() {
  return (
    <SecondSectionContainer>
      <Typography variant="h3" textAlign="center" mb={6}>
        Lịch trình hôn lễ
      </Typography>
      <TimelineWrapper>
        <Timeline>
          <Typography variant="h6" textAlign="center" mb={4}>
            Ngày 22 tháng 03 năm 2025
          </Typography>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              22/03/2025 09:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Bắt đầu sang nhà gái ăn hỏi</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              22/03/2025 09:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Lễ ăn hỏi tại nhà gái</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              22/03/2025 11:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Dùng bữa trưa tại tư gia</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              22/03/2025 16:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
            </TimelineSeparator>
            <TimelineContent>Dùng bữa chiều tại tư gia</TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <Typography variant="h6" textAlign="center" mb={4}>
            Ngày 23 tháng 03 năm 2025
          </Typography>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              23/03/2025 08:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Dùng bữa sáng tại tư gia</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              23/03/2025 13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Xuất phát đón dâu tại nhà trai</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              23/03/2025 13:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Dự lễ đón dâu tại nhà gái</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              23/03/2025 14:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" />
            </TimelineSeparator>
            <TimelineContent>Dự lễ đón dâu tại nhà trai</TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineWrapper>
      <Flower1 src="/flowers.webp" alt="flowers" />
      <Flower2 src="/pink-flower-with-leaf.png" alt="flowers" />
      <Flower3 src="/leaves-branch.jpg" alt="flowers" />
    </SecondSectionContainer>
  );
}
