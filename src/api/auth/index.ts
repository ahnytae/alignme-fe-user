import api from '../common';
import { AuthModel, AutoLoginResponse, SignUpInstructorResponse, SignUpManagerResponse } from '@/model/authModel';
import { getCookie } from '@/common/cookie';

/** 로그인 API */
export const login = async (code: string) => {
  return await api.get<AuthModel>(`/auth/user/login?code=${code}`);
};

/** 유저 회원가입 */
export const signupMember = async (studioId: string, instructorId: string) => {
  return await api.post(`/users/signup-member`, {
    studioId,
    instructorId,
  });
};

/** 로그인 시 토큰 유효검증 + 자동로그인 처리 */
export const autoLogin = async () => {
  return await api.post<AutoLoginResponse>('/auth/auto-login', {
    refreshToken: getCookie('refreshToken'),
  });
};

export type JoinStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export enum UserRole {
  MEMBER = 'MEMBER',
  INSTRUCTOR = 'INSTRUCTOR',
}

// 유저 정보 조회
interface UserInfoResponse {
  id: string;
  kakaoMemberId: number;
  email: string;
  name: string;
  role: UserRole;
  isMainInstructor: boolean;
}

/** 유저 정보 조회 */
export const getUserInfo = async () => {
  return await api.get<UserInfoResponse>(`/users/user-info`);
};
