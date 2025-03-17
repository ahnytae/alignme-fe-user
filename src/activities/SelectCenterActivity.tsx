import { getStudio, Studio } from "@/api/studio";
import Layout from "@/components/Layout";
import LessonCenterListItem from "@/components/LessonCenterListItem";
import SearchBar from "@/components/SearchBar";
import { useFlow } from "@stackflow/react/future";
import { useState } from "react";

export default function SelectCenterActivity() {
  const { replace } = useFlow();

  const [searchQuery, setSearchQuery] = useState("");
  const [studioList, setStudioList] = useState<Studio[]>([]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const studios = await getStudio(searchQuery);
      setStudioList(studios.data);
    } catch {}
  };

  const onClickCenter = async (studioId: string) => {
    replace("SelectInstructorActivity", {
      studioId,
    });
  };

  return (
    <Layout appBar={{ title: "레슨장 선택" }}>
      <div className="max-sm:max-w-[436px] m-auto flex max-w-[370px] items-center gap-2 overflow-y-scroll">
        <div className="my-auto flex w-[390px] flex-col self-stretch">
          <div className="flex w-full items-center gap-2 border-b border-solid border-b-zinc-200 px-5 py-6">
            <div className="my-auto flex w-full min-w-[240px] flex-1 shrink basis-0 flex-col justify-center self-stretch">
              <h1 className="text-2xl font-bold leading-none tracking-tight text-black">
                레슨장을 검색해주세요.
              </h1>
              <SearchBar
                placeholder="레슨장을 검색해주세요."
                onSearch={handleSearch}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <div className="flex h-[664px] w-full flex-col self-center overflow-y-scroll px-5 pt-4">
            {searchQuery && (
              <div className="flex w-full max-w-[350px] flex-col pb-14">
                {studioList.map((center, index) => (
                  <div key={index} onClick={() => onClickCenter(center.id)}>
                    <LessonCenterListItem
                      name={center.studioName}
                      regoinName={center.studioRegionName}
                      // address={center.address}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
