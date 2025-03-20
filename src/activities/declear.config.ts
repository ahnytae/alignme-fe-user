declare module "@stackflow/config" {
  interface Register {
    SigninActivity: {};
    JoinPendingActivity: {};
    SelectCenterActivity: {};
    SelectInstructorActivity: {
      studioId: string;
    };
    MainActivity: {};
    DetailContentActivity: {
      contentId: string;
    };
    PoseEntryActivity: {
      contentId: string;
    };
    PlayContentActivity: {
      contentId: string;
    };
  }
}
