import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rms-primary-500"></div>
    </div>
  );
}
