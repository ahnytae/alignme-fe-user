import { getUserInfo } from "@/api/auth";
import api from "@/api/common";
import { setCookie } from "@/common/cookie";
import { AuthModel } from "@/model/authModel";
import useAuthStore from "@/stores/useAuthStore";
import useUserStore from "@/stores/useUserStore";
import { useFlow } from "@stackflow/react/future";
import { useEffect } from "react";

export default function useAuthRedirect() {
  const { setKakaoMemberId, setEmail, setUserName, setIsMainInstructor } =
    useUserStore();
  // useCheckLoginRedirect();
  const { push, replace } = useFlow();

  const { setIsLogin } = useAuthStore((state) => ({
    setIsLogin: state.setIsLogin,
  }));

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
        // setCookie('refreshToken', refreshToken);
        setIsLogin(true);

        const {
          data: { id, kakaoMemberId, email, name },
        } = await getUserInfo();

        setEmail(email);
        setUserName(name);
        setKakaoMemberId(`${kakaoMemberId}`);

        if (isAlready) {
          setIsLogin(true);
          replace("MainActivities", {});
        } else {
          push("SelectCenterActivity", {});
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
  }, [setIsLogin]);
}
