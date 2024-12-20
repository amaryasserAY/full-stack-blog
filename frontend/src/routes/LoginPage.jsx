import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
