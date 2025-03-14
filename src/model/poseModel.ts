import { IPose } from "@ahnytae/alignme-core/dist";
import { ContentLevel } from "./contentModel";

export interface IPoseData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  level: typeof ContentLevel;
  createdAt: Date;
  pose: {
    id: number;
    poseData: IPose[];
  };
}
