import api from '../common';

export const joinMember = async (studioId: string, instructorId: string) => {
  return await api.post(`/users/signup-member`, {
    studioId,
    instructorId,
  });
};

export interface GetMemberOfStudioInfo {
  id: string;
  name: string;
  studioName: string;
}
export const getMemberOfStudioInfo = async () => {
  return await api.get<GetMemberOfStudioInfo>('/users/memberOfStudioInfo');
};

export interface GetSignupMemberInfo {
  instructor: string;
  studioName: string;
  studioRegion: string;
}
export const getSignupMemberInfo = async () => {
  return await api.get<GetSignupMemberInfo>('users/signup-pending-info');
};
