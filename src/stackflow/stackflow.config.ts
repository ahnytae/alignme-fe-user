import { defineConfig } from "@stackflow/config";

export const config = defineConfig({
  activities: [
    {
      name: "SigninActivity",
      route: "/signin",
    },
    {
      name: "AuthRedirectActivity",
      route: "/auth/kakao/success",
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
      name: "JoinWaitingActivity",
      route: "/waiting",
    },
    {
      name: "MainActivity",
      route: "/contents",
    },
    {
      name: "DetailContentActivity",
      route: {
        path: "/contents/:contentId",
      },
    },
    {
      name: "PoseEntryActivity",
      route: {
        path: "/content/:id/pose-entry",
      },
    },
    {
      name: "PlayContentActivity",
      route: {
        path: "/content/:id/pose-content",
      },
    },
  ],
  initialActivity: () => "SigninActivity",
  transitionDuration: 270,
});
