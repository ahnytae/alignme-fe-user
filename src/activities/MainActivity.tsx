import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getContents } from "../api/content";
import { GetMemberOfStudioInfo, getMemberOfStudioInfo } from "../api/user";
import { Content } from "../model/contentModel";
import useContent from "../stores/useContent";
import useUserStore from "../stores/useUserStore";
import { useFlow } from "@stackflow/react/dist/future";

export interface ExerciseItem {
  name: string;
  difficulty: string;
  registrationDate: string;
  exerciseCount: number;
  imageUrl: string;
}

export interface InstructorInfo {
  name: string;
  centerName: string;
  imageUrl: string;
}

const MainActivity = () => {
  const { push } = useFlow();

  const { setStudioName, setMemberOfInstructor } = useUserStore();
  const {
    setTitle,
    setLevel,
    setDescription,
    setCreatedAt,
    setImageUrl,
    setInstructorInfo,
  } = useContent();

  const [contents, setContents] = useState<Content[]>([]);
  const [total, setTotal] = useState(0);

  const [studioInfo, setStudioInfo] = useState<GetMemberOfStudioInfo>();

  const instructor: InstructorInfo = {
    name: "[선생님이름]",
    centerName: "센터이름",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1714605f22f492aa74522be3528c8e229ae2aae7f590988bd11c2e40f4cedb27?placeholderIfAbsent=true&apiKey=b7bc2be265414248853b38f2c04a5078",
  };

  const onClickContent = (content: Content) => {
    setTitle(content.title);
    setLevel(content.level);
    setDescription(content.description);
    setCreatedAt(content.createdAt);
    setImageUrl(content.imageUrl);
    setInstructorInfo(content.instructor);

    // navigate(`/content/${content.id}`);
    push("DetailContentActivities", {
      contentId: content.id,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getContents();
        setContents(data.data);
        setTotal(data.meta.total);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getMemberOfStudioInfo();
      setStudioInfo(data);
      setMemberOfInstructor(data.name);
      setStudioName(data.studioName);
    })();
  }, []);

  return (
    <Layout appBar={{ title: "운동 컨텐츠" }}>
      <div className="mx-auto flex w-full max-w-[480px] flex-col">
        {/* Header */}
        <div className="flex w-full items-center gap-3 bg-white pb-4 pt-8">
          <div className="my-auto flex items-center gap-3 self-stretch">
            <img
              loading="lazy"
              src={instructor.imageUrl}
              alt={`Instructor ${studioInfo?.name}`}
              className="my-auto aspect-square w-14 shrink-0 self-stretch object-contain"
            />
            <div className="my-auto flex  flex-col justify-center self-stretch">
              <div className=" max-w-full text-lg font-semibold leading-loose text-zinc-900">
                {studioInfo?.name} 강사님
              </div>
              <div className="text-xs font-medium leading-none text-zinc-600">
                {studioInfo?.studioName}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col rounded-2xl pb-4">
          <div className="flex w-full items-center gap-1.5 overflow-hidden border-b border-solid border-b-zinc-200 bg-white text-lg font-semibold text-zinc-950">
            <div className="my-auto flex items-center gap-6 self-stretch">
              <div className="my-auto gap-2 self-stretch border-b-[3px] border-solid border-b-zinc-900 py-3">
                전체 보기
              </div>
            </div>
          </div>
          <div className="mt-4 flex w-full cursor-pointer flex-col">
            <div className="flex w-full flex-col">
              <div className="flex items-center gap-1 self-start text-xs font-medium leading-none text-neutral-500">
                <div className="my-auto self-stretch">총</div>
                <div className="my-auto self-stretch">
                  <span className="text-zinc-950">{total}</span>개
                </div>
              </div>
              <div className="mt-2 h-[calc(100vh-150px)] overflow-y-auto pb-4">
                <div className="flex w-full flex-col whitespace-nowrap">
                  {contents.map((exercise, index) => (
                    <div
                      key={index}
                      className={index > 0 ? "mt-4" : ""}
                      onClick={() => onClickContent(exercise)}
                    >
                      <ExerciseCard exercise={exercise} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainActivity;

const ExerciseCard = ({ exercise }: { exercise: Content }) => {
  // const navigate = useNavigate();

  // const onClickBack = () => {
  //   navigate(-1);
  // };

  return (
    <div className="flex w-full flex-col justify-center rounded-xl border border-solid border-zinc-200 bg-white p-4">
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start gap-3 bg-white font-semibold">
          <img
            loading="lazy"
            src={exercise.imageUrl}
            alt={`Exercise: ${exercise.createdAt}`}
            className="aspect-square w-[82px] shrink-0 rounded-lg object-contain"
          />
          <div className="flex flex-1 shrink basis-0 flex-col">
            <div className="flex w-full flex-1 flex-col">
              <div className="text-ellipsis text-base text-neutral-500">
                {exercise.title}
              </div>
              <div className="mt-2 gap-2 self-start rounded bg-yellow-400 bg-opacity-10 px-1.5 py-0.5 text-sm leading-none text-yellow-400">
                {exercise.level}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex min-h-[1px] w-full bg-zinc-200" />
        <div className="mt-3 flex w-full items-center justify-between gap-10 text-xs font-medium leading-none">
          <div className="my-auto flex items-center gap-1 self-stretch">
            <div className="my-auto self-stretch text-zinc-400">등록일</div>
            <div className="my-auto self-stretch text-neutral-500">
              {new Date(exercise.createdAt).toLocaleDateString()}
            </div>
          </div>
          {/* <div className="my-auto flex items-center gap-1 self-stretch">
            <div className="my-auto self-stretch text-zinc-400"></div>
            <div className="my-auto self-stretch text-zinc-950"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
