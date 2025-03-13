import React from 'react';

export default function LandscapeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-full h-[100vw] w-[100vh] origin-top-left rotate-[-90deg] transform  landscape:absolute landscape:left-0 landscape:top-0 landscape:h-full landscape:w-full landscape:rotate-0 landscape:transform">
      {children}
    </div>
  );
}
