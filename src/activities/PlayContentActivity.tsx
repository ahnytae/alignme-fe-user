import { getContentById } from "@/api/content";
import SuccessIndicator from "@/components/SuccessIndicator";
import { ActivityComponentType } from "@stackflow/react/future";
import { useLayoutEffect, useRef, useState } from "react";
import { IPose, VideoPoseLandmarker } from "@ahnytae/alignme-core/dist";
import { IPoseData } from "@/model/poseModel";

export const PlayContentActivity: ActivityComponentType<
  "PlayContentActivity"
> = ({ params }) => {
  const contentId = params.contentId;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const refrencePosecanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [poseData, setPoseData] = useState<IPoseData>();

  const [isPassed, setPassed] = useState(false);

  const [score, setScore] = useState(0);

  const handleScore = (score: number) => {
    setScore(score * 100);
  };

  const onSuccess = (status: boolean) => {
    if (!status) {
      return;
    } else {
      setPassed(true);

      setTimeout(() => {
        setPassed(false);
      }, 2000);
    }
  };

  useLayoutEffect(() => {
    (async () => {
      if (
        !videoRef.current ||
        !canvasRef.current
        // isStart
        // !refrencePosecanvasRef.current
      )
        return;

      // if (!isPortrait) return;

      const { data } = await getContentById(`${contentId}`);

      // const parseData = JSON.parse(data.pose.poseData);
      const parseData = JSON.parse(data.pose.poseData);

      const newData = {
        ...data,
        pose: { ...data.pose, poseData: parseData },
      };
      setPoseData(newData);

      new VideoPoseLandmarker(
        videoRef.current!,
        canvasRef.current!,
        videoRef.current.clientHeight,
        videoRef.current.clientWidth,
        onSuccess,
        handleScore
      );
      VideoPoseLandmarker.equalEnanbleCam(parseData!);

      // poseRefrenceRender(parseData, refrencePosecanvasRef.current);
    })();
  }, [
    videoRef.current,
    canvasRef.current,
    // isStart,
    // refrencePosecanvasRef.current
  ]);

  function handleExit() {
    VideoPoseLandmarker.stop();
    window.location.replace("/contents");
  }

  return (
    <>
      <div className="h-screen w-full bg-black">
        {/* Navigation */}
        <div className="flex items-center gap-3 px-4 py-3 text-white">
          <button type="button" onClick={handleExit} className="p-1">
            <img
              src="/assets/icon-arrow-left.svg"
              alt="back"
              width={24}
              height={24}
            />
          </button>
          <h1 className="text-lg font-semibold">운동 기본자세</h1>
        </div>

        {/* Main Content */}
        <div className="relative flex h-[calc(100vh-64px)] w-full flex-row">
          {/* Video Section - 60% width */}
          <div className="relative w-[60%] min-w-[320px]">
            {/* <span className="absolute left-0 top-0 bg-[#9ACD32] px-[1.5rem] text-[1.5rem] text-xl font-extrabold">
              <span className="text-red-500">{score.toFixed(0) || 0}</span> / 95
            </span> */}
            {/* 점수 오버레이 */}
            <ScoreOverlay score={Number(score.toFixed(0)) || 0} />
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <canvas
              ref={canvasRef}
              className="absolute left-0 top-0 z-10 h-full w-full"
            />

            {/* <canvas ref={refrencePosecanvasRef} className="absolute left-0 top-0"></canvas> */}
            {isPassed && <SuccessIndicator />}
          </div>

          {/* Image Section - 40% width */}
          <div className="flex w-[40%] flex-col justify-between bg-zinc-800 p-4">
            <div className="h-[80%] overflow-hidden rounded-lg">
              <img
                src={poseData?.imageUrl}
                alt={poseData?.title}
                className="h-full w-full object-contain"
              />
            </div>
            <button
              type="button"
              onClick={handleExit}
              className="mt-4 w-full rounded-xl bg-[#FF5757] p-3 text-white transition hover:bg-[#ff4242]"
            >
              종료
            </button>
          </div>
        </div>
      </div>
      {/* ) : (
        <CountdownCircle onStart={onStart} />
      )} */}
    </>
  );
};

const ScoreOverlay = ({ score }: { score: number }) => {
  // 점수에 따른 스타일 결정
  const getScoreStyle = () => {
    if (score <= 70) {
      return "text-white text-4xl font-bold"; // 기본 스타일
    } else if (score > 70 && score <= 80) {
      return "text-yellow-400 text-4xl font-bold animate-pulse"; // 노란색 + 애니메이션
    } else if (score > 80 && score <= 90) {
      return "text-white text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-2 rounded-lg"; // 주황색 + 그라데이션
    } else if (score > 90 && score < 95) {
      return "text-green-500 text-4xl font-bold animate-bounce"; // 초록색 + 애니메이션
    } else if (score >= 95) {
      return "text-blue-500 text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 px-4 py-2 rounded-lg"; // 파란색 + 그라데이션
    }
  };

  // 95점 이상일 때 통과 메시지 추가
  const renderScore = () => {
    if (score >= 95) {
      return (
        <div className="flex flex-col items-center">
          <span className={getScoreStyle()}>{score}</span>
          <span className="mt-2 text-2xl text-white">통과!</span>
        </div>
      );
    }
    return <span className={getScoreStyle()}>{score}</span>;
  };

  return <div className="absolute right-4 top-4">{renderScore()}</div>;
};
