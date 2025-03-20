import Layout from "@/components/Layout";
import useContent from "@/stores/useContent";
import { Link } from "@stackflow/link/future";
import { useFlow, useStack, useStepFlow } from "@stackflow/react/future";

type DetailContentParams = {
  params: {
    contentId: string;
  };
};

const DetailContentActivity: React.FC<DetailContentParams> = ({
  params: { contentId },
}) => {
  const { title, level, description, createdAt, imageUrl, instructorInfo } =
    useContent();

  const { push, pop, replace } = useFlow();

  function handleEntryPose() {
    push("PoseEntryActivity", {
      contentId,
    });
  }

  return (
    <Layout appBar={{ title: "운동 컨텐츠 상세" }}>
      <div className="m-auto flex max-w-[390px] flex-col overflow-hidden p-3">
        <img
          loading="lazy"
          src={imageUrl}
          alt="운동 상세 이미지"
          className="aspect-[1.48] w-full rounded-none object-contain"
        />
        <div className="mt-5 flex w-full max-w-[350px] flex-col self-center">
          <div className="flex w-full flex-col">
            <div className="w-full flex-1 shrink gap-2 text-2xl font-bold leading-8 tracking-tight text-zinc-950">
              {title}
            </div>
            <div className="mt-4 flex w-full items-center gap-2 whitespace-nowrap rounded-lg bg-neutral-50">
              <div className="my-auto flex flex-1 shrink basis-0 flex-col justify-center self-stretch p-4">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="text-xs font-medium leading-none text-zinc-400">
                    난이도
                  </div>
                  <div className="text-base font-semibold text-neutral-500">
                    {level}
                  </div>
                </div>
              </div>
              <div className="my-auto flex flex-1 shrink basis-0 flex-col justify-center self-stretch p-4">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="text-xs font-medium leading-none text-zinc-400">
                    등록일자
                  </div>
                  <div className="text-base font-semibold text-neutral-500">
                    {new Date(createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col pb-32">
            <div className="text-lg font-semibold leading-loose text-zinc-950">
              설명
            </div>
            <div className="mt-2 text-base font-medium leading-6 text-neutral-500">
              {description}
            </div>
          </div>
        </div>
        <div
          // activityName="PoseEntryActivity"
          // activityParams={{ contentId }}
          className="z-10 mt-0 flex w-full flex-col whitespace-nowrap border-t border-solid border-t-zinc-200 bg-white px-6 pb-6 pt-4 text-base font-semibold text-white"
          onClick={handleEntryPose}
        >
          <button
            className="w-full gap-2 self-stretch overflow-hidden rounded-xl bg-zinc-900 px-4 py-3"
            aria-label="운동 시작하기"
          >
            시작하기
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailContentActivity;
