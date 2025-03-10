import { ActivityComponentType, useActivity, useStack } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { useEffect } from "react";

const MainActivities: React.FC = () => {
  const stack = useStack();
  const activity = useActivity();

  const { push, replace } = useFlow();

  const arr = [1, 2, 3, 4, 5];

  const onClick = () => {
    push("Article", {
      title: arr,
    });
  };

  useEffect(() => {
    console.log("현재 쌓여진 액티비티들:", stack.activities);
    console.log("전체 전환 상태:", stack.globalTransitionState);
    console.log(
      "초기에 설정된 Transition Duration 옵션",
      stack.transitionDuration
    );
  }, [stack]);

  useEffect(() => {
    console.log("현재 액티비티의 전환 상태:", activity.transitionState);
  }, [activity]);

  return (
    <AppScreen appBar={{ title: "Main Activity" }}>
      <div>Main Activity</div>
      <button onClick={onClick}>Go</button>
    </AppScreen>
  );
};

export default MainActivities;
