import "./App.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="model">
          Sign In
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      
    </>
  );
}

export default App;
