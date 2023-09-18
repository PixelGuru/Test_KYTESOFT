import YouTube from "react-youtube";
import { OverlayBackground, VideoBackground } from "./styled";

const VIDEO_HEIGHT = 800;
const VIDEO_WIDTH = 1587;
const VIDEO_ID = "JPe2mwq96cw"; // ID của video trên YouTube

export const VideoSectionHero = () => {
  const videoOpts = {
    height: VIDEO_HEIGHT,
    width: VIDEO_WIDTH,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      enablejsapi: 1,
      rel: 1,
      playlist: VIDEO_ID,
      end: 1200,
    },
  };
  return (
    <>
      <VideoBackground>
        <OverlayBackground />
        <YouTube videoId={VIDEO_ID} opts={videoOpts} />
      </VideoBackground>
    </>
  );
};
