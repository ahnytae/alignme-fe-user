import { StrictMode, Suspense } from "react";
import { Stack } from "./stackflow";

const App: React.FC = () => {
  return (
    <Suspense>
      <Stack />
    </Suspense>
  );
};

export default App;
