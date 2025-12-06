import React from "react";

type AuthCardProps = {
  title: string;
  children: React.ReactNode;
};

const AuthCard = ({ title, children }: AuthCardProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default AuthCard;
