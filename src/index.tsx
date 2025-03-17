import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@stackflow/plugin-basic-ui/index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router";
import AuthRedirectActivity from "./components/AuthRedirectActivity";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(<App />);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/auth/kakao/success" element={<AuthRedirectActivity />} />
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
