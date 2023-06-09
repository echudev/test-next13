import UsersList from "@/components/UsersList";
import { fetchUsers } from "@/utils/api";

async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h3 className="text-lg text-center m-3 text-orange-300">
        Data collected from{" "}
        <a className="underline" href="https://reqres.in/" target="_blank">
          ReqRes API
        </a>
      </h3>
      <UsersList users={users} />
    </div>
  );
}

export default UsersPage;
