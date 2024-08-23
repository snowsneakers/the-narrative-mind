"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/blog" })}
      className="bg-red-50 p-5 rounded-md text-2xl font-medium text-left flex flex-col justify-between items-start gap-5"
    >
      <div>
        <p className="text-2xl font-medium">Log Out</p>
        <p className="text-sm">Click here to log out.</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-medium">✌️</p>
      </div>
    </button>
  );
};

export default SignOutButton;
