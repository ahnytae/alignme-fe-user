import { toast, ToastContainer } from "react-toastify";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  useFlow,
  useStack,
  type ActivityComponentType,
} from "@stackflow/react/future";
import { VideoPoseLandmarker } from "@ahnytae/alignme-core/dist";
import PortraitAlert from "@/components/PortraitAlert";
import Layout from "@/components/Layout";

const PoseEntryActivity: ActivityComponentType<"PoseEntryActivity"> = ({
  params,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const [poseInfo, setPoseInfo] = useState<PoseData>();
  const { push, pop, replace } = useFlow();

  function handleExit() {
    VideoPoseLandmarker.stop();
    console.log("exit");
    // pop("DetailContentActivity", {
    //   contentId: params.contentId,
    // });
    pop();
  }

  const [isLandScape, setIsLandScape] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        setIsLandScape(true);
        const body = document.getElementsByTagName("body")[0];
        if (body) {
          body.style.overscrollBehavior = "none";
          body.style.overflow = "visable";
        }
      } else {
        // Landscape 모드일 때 실행할 스크립트
        setIsLandScape(false);
        const body = document.getElementsByTagName("body")[0];
        if (body) {
          body.style.overscrollBehavior = "contain";
          body.style.overflow = "auto";
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      const body = document.getElementsByTagName("body")[0];
      if (body) {
        body.style.overscrollBehavior = "none";
        body.style.overflow = "visable";
      }
    };
  }, [isLandScape]);

  useLayoutEffect(() => {
    (async () => {
      if (!videoRef.current || !canvasRef.current || isLandScape) {
        return;
      }
      new VideoPoseLandmarker(
        videoRef.current!,
        canvasRef.current!,
        360,
        480,
        onSuccess
      );
      VideoPoseLandmarker.preCheckEnanbleCam();
    })();

    // return () => VideoPoseLandmarker.stop();
  }, [videoRef.current, canvasRef.current, isLandScape]);

  const onSuccess = (status: boolean) => {
    const contentId = params.contentId;

    if (!status) {
      toast.error("유효한 자세 필요");
      toast.clearWaitingQueue();
      return;
    } else {
      toast.success("자세인식 준비 완료");
      push("PlayContentActivity", {
        contentId,
      });
    }
  };

  return (
    <Layout appBar={{ title: "pose" }}>
      {!isLandScape ? (
        <div className="h-[100dvh] w-screen bg-black">
          <div className="relative flex h-full w-full">
            {/* 비디오 영역 - 60% */}
            <div className="relative w-[60%] min-w-[320px] flex-shrink-0 bg-black">
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="relative aspect-[3/4] h-[90%]">
                  {/* 포커스 이미지 */}
                  <div className="absolute inset-0 z-[999] flex items-center justify-center">
                    <img
                      src="/assets/foucs-human.svg"
                      alt="포커스 가이드"
                      className="h-4/5 w-auto object-contain"
                    />
                  </div>

                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="h-full w-full rounded-r-lg object-cover"
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute left-0 top-0 z-10 h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* 텍스트 영역 - 40% */}
            <div className="xs:p-4 flex w-[40%] flex-col justify-center bg-zinc-800 p-6 sm:p-6 md:p-8">
              <div className="max-w-lg">
                <h1 className="xs:text-lg text-xl font-semibold text-neutral-50 sm:text-xl md:text-2xl">
                  자세 인식 준비
                </h1>
                <p className="xs:text-sm mt-4 text-base font-medium text-zinc-400 sm:text-base">
                  운동 시작을 위해 전신이 모두 보이게 서주세요.
                </p>
                <p className="xs:text-xs mt-2 text-sm italic text-zinc-400 sm:text-sm">
                  화면은 자세 인식을 위해서만 사용돼요.
                </p>
              </div>
            </div>
          </div>

          <button onClick={handleExit}>종료</button>

          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            limit={1}
          />
        </div>
      ) : (
        <PortraitAlert />
      )}
    </Layout>
  );
};

export default PoseEntryActivity;
