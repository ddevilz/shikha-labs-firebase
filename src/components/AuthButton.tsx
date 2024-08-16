import React from "react";
import { auth, provider } from "@/firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";

const AuthButton: React.FC = () => {
  const [user] = useAuthState(auth);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex gap-3 items-center">
          <p>Welcome, {user.displayName}</p>
          <Button onClick={signOutUser} className="btn">
            Sign Out
          </Button>
        </div>
      ) : (
        <Button onClick={signIn} className="btn">
          Sign In with Google
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
