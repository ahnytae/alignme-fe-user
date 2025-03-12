/** 레슨선택창 타입 */
export interface CenterProps {
  name: string;
  regoinName?: string;
  onSelect?: () => void;
}

export interface SearchBarProps {
  placeholder: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSearch: (value: string) => void;
}

/** 강사 선택창 타입 */
export interface InstructorProps {
  profileImage: string;
  name: string;
  onSelect?: () => void;
}
