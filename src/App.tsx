import { StrictMode, Suspense } from "react";
import { Stack } from "./stackflow";
import { useAxiosInterceptor } from "./hooks/useAxiosInterceptor";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  useAxiosInterceptor();

  return (
    <Suspense>
      <Stack />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </Suspense>
  );
};

export default App;
