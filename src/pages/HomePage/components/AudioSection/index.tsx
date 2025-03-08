import { Fragment, useEffect, useRef, useState } from "react";
import { Button, Drawer, IconButton, Typography } from "@mui/material";
import {
  GraphicEqRounded,
  MusicNoteRounded,
  PauseCircle,
  PlayCircle,
} from "@mui/icons-material";
import {
  DrawerContainer,
  PlayAudioButtonContainer,
} from "./AudioSection.styled";

export default function AudioSection() {
  const audio = useRef<HTMLAudioElement>(null);
  const [isOpenAudioDrawer, setIsOpenAudioDrawer] = useState<boolean>(false);
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);

  const handleAudioDrawerClose = () => {
    setIsOpenAudioDrawer(false);
  };

  const handlePlayMusic = () => {
    setIsOpenAudioDrawer(false);
    setIsAudioPlay(true);
    audio.current?.play();
  };

  const handlePauseMusic = () => {
    setIsAudioPlay(false);
    audio.current?.pause();
  };

  useEffect(() => {
    setIsOpenAudioDrawer(true);
  }, []);

  return (
    <Fragment>
      <Drawer anchor="bottom" open={isOpenAudioDrawer}>
        <DrawerContainer>
          <MusicNoteRounded color="primary" sx={{ fontSize: "100px" }} />
          <Button onClick={handlePlayMusic}>
            <Typography variant="subtitle1" align="center" textTransform="none">
              Tiếp tục lướt web kèm âm nhạc
            </Typography>
          </Button>
          <Button onClick={handleAudioDrawerClose}>
            <Typography
              variant="caption"
              align="center"
              textTransform="none"
              color="textSecondary"
            >
              Không phát nhạc
            </Typography>
          </Button>
        </DrawerContainer>
      </Drawer>
      <PlayAudioButtonContainer>
        <GraphicEqRounded />
        <IconButton onClick={isAudioPlay ? handlePauseMusic : handlePlayMusic}>
          {isAudioPlay ? <PauseCircle /> : <PlayCircle />}
        </IconButton>
      </PlayAudioButtonContainer>
      <audio
        ref={audio}
        src="/anh-muon-minh-nhu-con-thuyen-kia.mp4"
        controls
        hidden
        loop
      />
    </Fragment>
  );
}
