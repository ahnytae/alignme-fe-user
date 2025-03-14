import { useEffect, useState } from "react";
import { getSignupMemberInfo, GetSignupMemberInfo } from "@/api/user";
import { useFlow } from "@stackflow/react/future";

export default function JoinWaiitingActivity() {
  const [getInfo, setGetInfo] = useState<GetSignupMemberInfo>();

  const { replace } = useFlow();

  useEffect(() => {
    (async () => {
      const info = await getSignupMemberInfo();
      setGetInfo(info.data);
    })();
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
      <h2 className="mb-2 pt-5 text-[24px] font-bold text-[#DBBD1F]">
        가입 승인 대기중
      </h2>
      <p className="whitespace-pre-line font-semibold text-[#62626A]">
        강사님의 가입 승인을 기다리고있어요.
        <br />
        승인 후 강사님의 모든 운동을 복습할 수 있어요.
      </p>
      <div className="mt-6  rounded-xl  pb-5 shadow-xl">
        <img
          src="/assets/instructor-test.png"
          alt="instructor"
          className="my-3 inline-block"
        />
        <p className="font-semibold">[{getInfo?.instructor}] 강사님</p>
        <p className="text-[14px] text-[#A1A1AA]">
          {getInfo?.studioName} {getInfo?.studioRegion || ""}
        </p>
      </div>
      <button onClick={() => replace("SigninActivity", {})}>홈으로</button>
    </div>
  );
}
