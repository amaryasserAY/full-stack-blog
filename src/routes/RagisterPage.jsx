import { SignUp } from "@clerk/clerk-react";

const RagisterPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RagisterPage;
