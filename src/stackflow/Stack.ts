import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react/future";
import MainActivities from "../activities/MainActivity";
import DetailContentActivities from "@/activities/DetailContentActivity";
import PoseEntryActivity from "@/activities/PoseEntryActivity";
import { config } from "./stackflow.config";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { PlayContentActivity } from "@/activities/PlayContentActivity";
import SigninActivity from "@/activities/SigninActivity";
import JoinPendingActivity from "@/activities/JoinPendingActivity";
import SelectCenterActivity from "@/activities/SelectCenterActivity";
import SelectInstructorActivity from "@/activities/SelectInstructorActivity";
import JoinWaiitingActivity from "@/activities/JoinWaiitingActivity";

export const { Stack } = stackflow({
  config,
  components: {
    SigninActivity,
    JoinPendingActivity,
    SelectCenterActivity,
    SelectInstructorActivity,
    JoinWaiitingActivity,
    MainActivities,
    DetailContentActivities,
    PoseEntryActivity,
    PlayContentActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      config,
      fallbackActivity: () => "SigninActivity",
    }),
  ],
});
