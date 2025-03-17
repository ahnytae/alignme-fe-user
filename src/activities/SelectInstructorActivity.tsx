import { getInstrucotrsOnStudio, Instructors } from "@/api/studio";
import { joinMember } from "@/api/user";
import InstructorListItem from "@/components/InstructorListItem";
import Layout from "@/components/Layout";
import { ActivityComponentType, useFlow } from "@stackflow/react/future";
import { useEffect, useState } from "react";

const SelectInstructorActivity: ActivityComponentType<
  "SelectInstructorActivity"
> = ({ params }) => {
  const { push, replace } = useFlow();

  const id = params.studioId;
  const [isOpen, setOpen] = useState(false);
  // const [isSelected, setSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [instructors, setInstructors] = useState<Instructors[]>([]);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructors>();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleSetSelected = (index: number) => {
    setOpen(true);
    setSelectedInstructor(instructors[index]);
  };

  const handleSelectSubmit = async (isOk: boolean) => {
    if (!id) return;

    if (!isOk) {
      setOpen(false);
      return;
    }

    try {
      await joinMember(id, selectedInstructor?.id || "");
      replace("JoinWaitingActivity", {});
    } catch {}
  };

  useEffect(() => {
    (async () => {
      if (!id) return;

      try {
        const { data } = await getInstrucotrsOnStudio(id);
        setInstructors(data.data.instructors);
      } catch {}
    })();
  }, [id]);

  return (
    <Layout appBar={{ title: "강사 선택" }}>
      <div className="max-sm:max-w-[436px] m-auto flex max-w-[370px] items-center gap-2 overflow-y-scroll">
        <div className="my-auto flex w-[390px] flex-col self-stretch">
          <div className="flex w-full items-center gap-2 border-b border-solid border-b-zinc-200 px-5 py-6">
            <div className="my-auto flex w-full min-w-[240px] flex-1 shrink basis-0 flex-col justify-center self-stretch">
              <h1 className="leading text-2xl font-bold tracking-tight text-black">
                수강중인 강사님을<br></br> 선택해주세요.
              </h1>
            </div>
          </div>
          <div className="flex h-[664px] w-full flex-col self-center overflow-y-scroll px-5 pt-4">
            <div className="flex w-full max-w-[350px] cursor-pointer flex-col">
              {instructors.map((instructor, index) => (
                <div key={index} onClick={() => handleSetSelected(index)}>
                  <InstructorListItem profileImage="" name={instructor.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <SelectInstructorModal
          handleSelectSubmit={handleSelectSubmit}
          selectedInstructor={selectedInstructor!}
        />
      )}
    </Layout>
  );
};

export default SelectInstructorActivity;

/** 강사 선택 모달 */
function SelectInstructorModal({
  handleSelectSubmit,
  selectedInstructor,
}: {
  handleSelectSubmit: (isOk: boolean) => void;
  selectedInstructor: Instructors;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-full bg-black bg-opacity-80">
      <div className="absolute bottom-0 left-1/2 m-auto w-full max-w-[436px] -translate-x-1/2 transform rounded-t-xl bg-white p-6 text-center">
        <h3 className="text-[18px] font-bold">해당 강사님을 선택할까요?</h3>
        <img
          src="/assets/instructor-test.png"
          alt="instructor"
          className="my-3 inline-block"
        />
        <p className="font-semibold">{selectedInstructor?.name} 강사님</p>
        {/* <p className="text-[14px] text-[#A1A1AA]">센터 이름</p> */}

        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={() => handleSelectSubmit(true)}
            className="cursor-pointer rounded-xl bg-black py-3 text-[white]"
          >
            선택할게요
          </button>
          <button
            onClick={() => handleSelectSubmit(false)}
            className="border-[#E4E4E7]-700 cursor-pointer rounded-xl border py-3 text-[#111111]"
          >
            취소할게요
          </button>
        </div>
      </div>
    </div>
  );
}
