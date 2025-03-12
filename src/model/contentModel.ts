type PageMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

const ContentLevel = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD',
} as const;

type InstructorInfo = {
  instructorId: string;
  instructorName: string;
};

type Content = {
  id: string;
  imageUrl: string;
  title: string;
  level: keyof typeof ContentLevel;
  description: string;
  createdAt: Date;
  instructor: InstructorInfo;
};

interface ContentsResponse {
  data: Content[];
  meta: PageMeta;
}

export type { Content, InstructorInfo, ContentsResponse };
export { ContentLevel };
