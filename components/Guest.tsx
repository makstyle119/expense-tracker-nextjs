import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest">
      <h1>Welcome</h1>
      <p>Please sing in to manage your budget</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
