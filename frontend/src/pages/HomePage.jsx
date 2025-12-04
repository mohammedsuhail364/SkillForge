import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
function HomePage() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="model">Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default HomePage;
