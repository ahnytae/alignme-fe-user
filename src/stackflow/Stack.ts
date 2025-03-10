import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import MainActivities from "../activities/MainActivities";
import Article from "../activities/Article";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    MainActivities,
    Article,
  },
  initialActivity: () => "MainActivities",
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
});
