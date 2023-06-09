"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function UsersList({ users }) {
  const router = useRouter();

  return (
    <div className="flex justify-center flex-wrap gap-6 text-sm select-none text-violet-100">
      {users.map((user) => (
        <div
          className="flex justify-between items-center rounded-lg bg-opacity-10 bg-violet-400 min-w-[300px] min-h-[100px] p-4 hover:scale-105 transition"
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <Image
            className="rounded-full w-fit h-fit"
            width={40}
            height={40}
            alt="avatar"
            src={user.avatar}
          />
          <div>
            <p>Nombre: {user.first_name}</p>
            <p>Apellido: {user.last_name}</p>
          </div>
          <button className="bg-orange-500 text-orange-100 px-2 rounded-md m-3 h-7 w-12 hover:brightness-125 transition">
            VER
          </button>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
