export default function SuccessIndicator() {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-green-500 shadow-lg">
          {/* Glowing Effect */}
          <div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-400 opacity-50"></div>

          {/* Check Icon and Text */}
          <div className="z-10 flex flex-col items-center">
            {/* Check Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="h-24 w-24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {/* Message */}
            <p className="mt-4 text-xl font-semibold text-white">정확한 동작입니다!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
