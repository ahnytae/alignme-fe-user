import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react/future";
import MainActivity from "../activities/MainActivity";
import PoseEntryActivity from "@/activities/PoseEntryActivity";
import { config } from "./stackflow.config";
import { PlayContentActivity } from "@/activities/PlayContentActivity";
import SigninActivity from "@/activities/SigninActivity";
import JoinPendingActivity from "@/activities/JoinPendingActivity";
import SelectCenterActivity from "@/activities/SelectCenterActivity";
import SelectInstructorActivity from "@/activities/SelectInstructorActivity";
import JoinWaitingActivity from "@/activities/JoinWaitingActivity";
import DetailContentActivity from "@/activities/DetailContentActivity";
import AuthRedirectActivity from "@/activities/AuthRedirectActivity";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";

export const { Stack } = stackflow({
  config,
  components: {
    SigninActivity,
    AuthRedirectActivity,
    SelectCenterActivity,
    SelectInstructorActivity,
    JoinWaitingActivity,
    JoinPendingActivity,
    MainActivity,
    DetailContentActivity,
    PoseEntryActivity,
    PlayContentActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    //Todo: / 붙으므로 추후 개선 필요
    historySyncPlugin({
      config,
      fallbackActivity: () => "SigninActivity",
    }),
  ],
});
