import { defineConfig } from "@stackflow/config";
import { ActivityDefinition, Config } from "@stackflow/config";

export const config = defineConfig({
  activities: [
    {
      name: "SigninActivity",
      route: "/signin",
    },
    {
      name: "JoinPendingActivity",
      route: "/signup/pending",
    },
    {
      name: "SelectCenterActivity",
      route: "/lesson-center",
    },
    {
      name: "SelectInstructorActivity",
      route: "/select-instructor",
    },
    {
      name: "JoinWaiitingActivity",
      route: "/waiting",
    },
    {
      name: "MainActivity",
      route: "/contents",
    },
    {
      name: "DetailContentActivity",
      route: "/content/:id",
    },
    {
      name: "PoseEntryActivity",
      route: {
        path: "/content/:id/pose-entry",
        // decode(params) {
        //   return {
        //     contentId: Number(params["id"]),
        //   };
        // },
      },
    },
    {
      name: "PlayContentActivity",
      route: {
        path: "/content/:id/pose-content",
      },
    },
  ],
  initialActivity: () => "MainActivity",
  transitionDuration: 270,
});
