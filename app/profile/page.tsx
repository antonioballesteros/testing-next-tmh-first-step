import { getUser } from "@/actions/get-user";
import UserProfile from "@/app/components/UserProfile";
import Header from "@/app/components/ui/Header";

export default async function Profile() {
  const user = await getUser();

  return (
    <main className="p-4 rounded-lg">
      <Header text="Profile" />
      <UserProfile user={user} />
    </main>
  );
}
