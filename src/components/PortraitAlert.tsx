import { RotateCw } from "lucide-react";
import { Alert } from "./Alert";

export default function PortraitAlert() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <Alert className="max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <RotateCw className="h-16 w-16 animate-[spin_4s_linear_infinite] text-blue-500" />
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              화면을 가로모드로 변경 해주세요
            </h2>
            <p className="text-gray-600">
              더 나은 사용자 경험을 위해 기기를 가로로 돌려주세요.
            </p>
          </div>
        </div>
      </Alert>
    </div>
  );
}
