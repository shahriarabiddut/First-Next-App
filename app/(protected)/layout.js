import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function PrivateLayout({children}) {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/api/auth/login")
  }
  return (
    <>
      {children}
    </>
  );
}
