import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import LoginForm from "./Form";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/blog");
  }

  return (
    <section className="container flex items-center justify-center max-w-[1130px] mx-auto my-10 px-5 font-josefin">
      <div className="max-w-[425px] w-full">
        <LoginForm />
      </div>
    </section>
  );
};

export default Register;
