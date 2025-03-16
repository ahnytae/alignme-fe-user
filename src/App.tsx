import { StrictMode, Suspense } from "react";
import { Stack } from "./stackflow";

const App: React.FC = () => {
  return (
    <StrictMode>
      <Suspense>
        <Stack />
      </Suspense>
    </StrictMode>
  );
};

export default App;
