import {
  SignInButton,
  SignOutButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";

export const AuthButton = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {user?.imageUrl && (
            <img
              src={user.imageUrl}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="text-sm font-medium">
            {user?.firstName || user?.username || "User"}
          </span>
        </div>
        <SignOutButton>
          <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    );
  }

  return (
    <SignInButton>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Sign In
      </button>
    </SignInButton>
  );
};
