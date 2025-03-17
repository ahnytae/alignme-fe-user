import axios from "axios";

export interface ServerErrorCode {
  errorCode: ErrorCode;
}

type ErrorCode = "EXPIRED_TOKEN" | "...";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default api;
