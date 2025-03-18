"use client";

import { Lock } from "lucide-react";

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1c1c22]">
      <div className="bg-white p-6 rounded-lg shadow-lg border  border-[#00E187] max-w-lg text-center">
        <div className="flex items-center justify-center space-x-2">
          <Lock className="h-6 w-6 text-[#00E187]" /> 
          <h1 className="text-2xl font-semibold text-[#00E187]">Confidential Information</h1> 
        </div>
        <p className="mt-3 text-gray-900"> 
          This page contains confidential information. Access is restricted to authorized personnel only.
        </p>
      </div>
    </div>
  );
}

export default Page;
