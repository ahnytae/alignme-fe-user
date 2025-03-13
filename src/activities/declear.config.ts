declare module "@stackflow/config" {
  interface Register {
    SigninActivity: {};
    JoinPendingActivity: {};
    SelectCenterActivity: {};
    SelectInstructorActivity: {
      studioId: string;
    };
    MainActivity: {};
    DeatilActivity: {};
    PoseEntryActivity: {
      contentId: string;
    };
    PlayContentActivity: {
      contentId: string;
    };
  }
}
