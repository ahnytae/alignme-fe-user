import { ContentLevel, ContentsResponse } from '@/model/contentModel';
import api from '../common';

/** 콘텐츠 조회 api */
export const getContents = async () => {
  return await api.get<ContentsResponse>('/content/contents');
};

export interface PoseData {
  id: number,
  imageUrl: string,
  title: string,
  description: string
  level: typeof ContentLevel,
  createdAt: Date,
  pose: {
      id: number,
      poseData: string
  }
}
/** 특정 콘텐츠의 포즈데이터 조회 */
export const getContentById = async (id: string) => {
  return await api.get<PoseData>(`/content/${id}`);
};
