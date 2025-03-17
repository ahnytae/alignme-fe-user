import { kakaoRedirectUrl } from "@/common/urls";
import { useFlow } from "@stackflow/react/future";

export default function SigninActivity() {
  const { push, replace } = useFlow();

  async function handleSignin() {
    window.location.href = kakaoRedirectUrl;
    replace("AuthRedirectActivity", {});
  }

  return (
    <div className="max-sm:max-w-[436px] m-auto flex max-w-[370px] flex-col items-start overflow-hidden px-5 py-3">
      <div className="gap-6 self-stretch whitespace-nowrap text-center text-5xl text-zinc-900">
        ALIGN
      </div>
      <div className="flex w-full max-w-[298px] flex-col">
        <div className="leading-14 my-4 self-center text-center text-3xl font-bold tracking-tighter text-black">
          나만의 운동을
          <br />
          시작하세요.
        </div>
        <div className="mt-2 text-sm font-semibold leading-5 text-neutral-500">
          전문강사의 맞춤형 자세와 개인화된 <br />
          AI 피드백으로 최고의 운동 경험을 누리세요!
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de958d82401b36d9a5a478b8fe4fb7a37c96023bdd0a540e65cbd82a6c226499?placeholderIfAbsent=true&apiKey=b7bc2be265414248853b38f2c04a5078"
        alt="Exercise demonstration"
        className="mt-6 aspect-[1.07] w-full self-stretch rounded-xl object-contain"
      />
      <div className="mt-10 flex w-full flex-col">
        <button
          onClick={handleSignin}
          className="flex min-h-[48px] w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-4 py-3 text-base font-semibold text-black"
        >
          <img
            loading="lazy"
            src="/assets/kakaobtn.svg"
            alt="Kakao icon"
            className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
          />
          카카오톡으로 시작하기
        </button>
        <div className="mt-6 text-center text-sm font-medium leading-5">
          {/* <LinkText text="로그인은 " />
          <LinkText text="개인 정보 보호 정책" isUnderlined />
          <LinkText text=" 및 " />
          <LinkText text="서비스 약관" isUnderlined />
          <LinkText text="에  동의하는 것을 의미" />
          <LinkText text="합니다." /> */}
        </div>
      </div>
    </div>
  );
}
