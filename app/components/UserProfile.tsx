import { User } from "@/type/user";
import Card from "./ui/Card";

export default function UserProfile({ user }: { user: User }) {
  return (
    <div className="p-4 gap-8">
      <Card title={user.name} description={user.email} img={user.image} />

      <div className="mt-48">
        <span>Here we should have more stuff</span>
      </div>
    </div>
  );
}
