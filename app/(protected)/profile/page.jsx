import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export const metadata = {
  title: "Profile | First Next App",
  description: "Learn about Next.js features",
};

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/api/auth/login");
  }

  const user = await getUser();

  return (
    <section
      id="profile"
      className="py-16 bg-[#F2EFE7] text-indigo-500 flex justify-center items-center min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center font-bold my-2">
          Welcome to your profile!
        </h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            {user?.picture && (
              <Image
                src={user?.picture}
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
            )}
            <h2 className="text-2xl font-bold mb-2">
              {user?.given_name} {user?.family_name}
            </h2>
            <p className="text-gray-600 mb-4">{user?.email}</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">User Details</h3>
              <ul className="text-left space-y-2">
                <li>
                  <strong>First Name:</strong> {user?.given_name}
                </li>
                <li>
                  <strong>Last Name:</strong> {user?.family_name}
                </li>
                <li>
                  <strong>Email:</strong> {user?.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
