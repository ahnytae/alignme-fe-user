import api from '../common';

export interface Studio {
  id: string;
  studioName: string;
  studioRegionName?: string;
}

/** 콘텐츠 조회 api */
export const getStudio = async (studioName: string) => {
  return await api.get<Studio[]>(`/studio?query=${encodeURIComponent(studioName)}`);
};

export interface Instructors {
  id: string;
  name: string;
  profileImage: string | null;
}

export interface getInstructorsOnStuido {
  data: {
    instructors: Instructors[];
  };
}

/** 스튜디오 소속 강사 찾기 */
export const getInstrucotrsOnStudio = async (studioId?: string) => {
  const parameter = studioId ? `?studioId=${studioId}` : '';
  return await api.get<getInstructorsOnStuido>(`/users/instructors${parameter}`);
};
