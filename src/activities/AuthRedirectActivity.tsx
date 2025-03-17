import { getUserInfo } from "@/api/auth";
import api from "@/api/common";
import { setCookie } from "@/common/cookie";
import { AuthModel } from "@/model/authModel";
import useUserStore from "@/stores/useUserStore";
import { useFlow } from "@stackflow/react/future";
import { useEffect } from "react";

export default function AuthRedirectActivity() {
  const { setKakaoMemberId, setEmail, setUserName, setIsMainInstructor } =
    useUserStore();
  const { replace } = useFlow();

  useEffect(() => {
    (async () => {
      try {
        const code = new URL(window.location.href).searchParams.get("code");

        const {
          data: {
            data: { accessToken, refreshToken, isAlready },
          },
        } = await api.get<AuthModel>(`/auth/user/login?type=user&code=${code}`);

        setCookie("accessToken", accessToken);

        const {
          data: { id, kakaoMemberId, email, name },
        } = await getUserInfo();

        setEmail(email);
        setUserName(name);
        setKakaoMemberId(`${kakaoMemberId}`);

        window.history.replaceState({}, "", "/");

        if (isAlready) {
          replace("MainActivity", {});
        } else {
          replace("SelectCenterActivity", {});
        }
      } catch (error) {
        alert(error);
        // if (error instanceof AxiosError) {
        //   if (error.response?.status === 403) {
        //     console.log('e', error);
        //     // 권한 에러 처리
        //     navigate('/test');
        //   }
        // }
      }
    })();
  }, []);

  return <div />;
}
