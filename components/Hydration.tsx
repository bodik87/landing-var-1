"use client";
import { ReactNode, useEffect, useState } from "react";

export default function Hydration({ children }: { children: ReactNode }) {
  const [isHydrdated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrdated ? (
        <>
          {children}
        </>
      ) : (
        <>
          <div className="fixed inset-0 bg-white backdrop-blur-xl z-50 flex items-center justify-center" >
            <Spinner />
          </div>
          {children}
        </>
      )}
    </>
  );
}

export function Spinner() {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      </span>
    </div>
  );
}