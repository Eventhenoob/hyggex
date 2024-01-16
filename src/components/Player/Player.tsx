import { useEffect, useRef, useState } from "react";
import { RxReload } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TiVolumeMute } from "react-icons/ti";
import { AiOutlineSound } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdFullscreen } from "react-icons/md";
interface controlStatusType {
  currentVideo: number;
  isMuted: boolean;
  isPaused: boolean;
  isVideoWishlist: boolean;
}

const Player = () => {
  const videos = [1, 2];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlStatus, setControlStatus] = useState<controlStatusType>({
    isVideoWishlist: false,
    currentVideo: videos[0],
    isMuted: true,
    isPaused: false,
  });

  const swithToFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current?.requestFullscreen) {
        videoRef.current?.requestFullscreen();
      }
    }
  };
  const setVideo = (videoNo: number) => {
    setControlStatus((prev) => {
      return { ...prev, currentVideo: videoNo };
    });
  };

  const toggleCurrentVideoLeft = () => {
    const currentVideo = controlStatus.currentVideo;
    if (currentVideo === videos[videos.length - 1]) {
      setVideo(videos[0]);
    } else {
      setVideo(videos[videos.indexOf(currentVideo) + 1]);
    }
  };

  const toggleCurrentVideoRight = () => {
    const currentVideo = controlStatus.currentVideo;
    if (currentVideo === videos[0]) {
      setVideo(videos[videos.length - 1]);
    } else {
      setVideo(videos[videos.indexOf(currentVideo) - 1]);
    }
  };

  const togglePause = () => {
    setControlStatus((prev) => {
      return { ...prev, isPaused: !prev.isPaused };
    });
  };

  const checkVideo = (videoNo: number) => {
    if (localStorage.getItem(`${videoNo}`)) {
      return true;
    } else {
      return false;
    }
  };

  const toggleisVideoWishlist = (value: boolean) => {
    setControlStatus((prev) => {
      return { ...prev, isVideoWishlist: value };
    });
  };

  const addVideo = (videoNo: number) => {
    toggleisVideoWishlist(true);
    localStorage.setItem(`${videoNo}`, "true");
  };

  const removeVideo = (videoNo: number) => {
    toggleisVideoWishlist(false);
    localStorage.removeItem(`${videoNo}`);
  };

  useEffect(() => {
    if (videoRef.current) {
      controlStatus.isPaused
        ? videoRef.current.pause()
        : videoRef.current.play();
    }
  }, [controlStatus]);

  useEffect(() => {
    if (checkVideo(controlStatus.currentVideo))
      addVideo(controlStatus.currentVideo);
    else removeVideo(controlStatus.currentVideo);
  }, [controlStatus.currentVideo]);

  return (
    <div className="w-full rounded-3xl flex flex-col justify-center items-center  bg-slate-200 h-full">
      <div className="h-[80%] w-full relative">
        <button
          type="button"
          className="rounded-full absolute top-5 right-8 z-40 bg-white p-2 bg-opacity-45 "
          onClick={() =>
            setControlStatus((prev) => {
              return { ...prev, isMuted: !prev.isMuted };
            })
          }
        >
          {!controlStatus.isMuted ? (
            <AiOutlineSound className="text-blue-900 text-xl hover:text-yellow-500" />
          ) : (
            <TiVolumeMute className="text-blue-900 text-xl hover:text-yellow-500" />
          )}
        </button>
        <button
          type="button"
          className="rounded-full absolute top-5 left-8 z-40 bg-white p-2 bg-opacity-45 "
          onClick={() => {
            checkVideo(controlStatus.currentVideo)
              ? removeVideo(controlStatus.currentVideo)
              : addVideo(controlStatus.currentVideo);
          }}
        >
          {checkVideo(controlStatus.currentVideo) ? (
            <FaLightbulb className="text-yellow-500 text-xl " />
          ) : (
            <FaRegLightbulb className="text-blue-900 text-xl hover:text-yellow-500" />
          )}
        </button>
        <video
          ref={videoRef}
          src={`video${controlStatus.currentVideo}.mp4`}
          autoPlay
          muted={controlStatus.isMuted}
          className="rounded-3xl "
        ></video>
      </div>

      <div className="flex items-center gap-10 justify-center">
        <div className="p-10 gap-10 flex">
          <button
            className=""
            type="button"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
                togglePause();
              }
            }}
          >
            <RxReload className="text-blue-900 text-xl hover:text-blue-700" />
          </button>

          <button type="button" onClick={togglePause}>
            {controlStatus.isPaused ? (
              <FaPlay className="text-blue-900 hover:text-blue-700" />
            ) : (
              <FaPause className="text-blue-900 hover:text-blue-700" />
            )}
          </button>
        </div>

        <div className="flex justify-center items-center w-80% gap-10">
          <button
            className="flex transition-all duration-300 justify-center items-center p-4 rounded-full hover:scale-105 bg-gradient-to-b from-blue-900 from-10% to-blue-700 text-transparent to-90% "
            type="button"
            onClick={() => {
              toggleCurrentVideoLeft();
            }}
          >
            <MdArrowBackIos className="text-white " />
          </button>
          <p className="">
            {videos.indexOf(controlStatus.currentVideo) + 1}/{videos.length}
          </p>
          <button
            className="flex transition-all duration-300 justify-center items-center p-4 rounded-full hover:scale-105 bg-gradient-to-b from-blue-900 from-10% to-blue-700 text-transparent to-90% "
            type="button"
            onClick={() => {
              toggleCurrentVideoRight();
            }}
          >
            <MdArrowForwardIos className="text-white" />
          </button>
        </div>

        <div className="">
          <button
            className="flex transition-all duration-300 justify-center items-center p-4 rounded-full hover:scale-105 bg-gradient-to-b from-blue-900 from-10% to-blue-700 text-transparent to-90% "
            type="button"
            onClick={() => {
              swithToFullScreen();
            }}
          >
            <MdFullscreen className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
