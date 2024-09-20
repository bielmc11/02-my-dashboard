"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center">
        <h4 className="text-4xl font-bold">Error</h4>
        <p className="text-2xl text-gray-600">Something went wrong</p>
        <p>{error.message}</p>
        <button 
            onClick={() => reset()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Try again</button>
    </div>
  )}