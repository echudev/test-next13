"use client";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { getUser } from "@/utils/api";

async function User() {
  const router = useRouter();
  const params = useParams();
  const user = await getUser(params.id);

  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-auto rounded-full bg-violet-300 bg-opacity-5 max-h-[400px] aspect-square">
      <Image
        className="rounded-full"
        width={200}
        height={200}
        alt="avatar"
        src={user.avatar}
      />
      <div className="mt-10 text-2xl">{`${user.first_name} ${user.last_name}`}</div>
      <div>{user.email}</div>
      <button
        className="mt-10 bg-orange-500 text-orange-100 px-2 rounded-md m-3 h-10 w-24 hover:brightness-125 transition"
        onClick={() => {
          router.push(`/users/`);
        }}
      >
        Atrás
      </button>
    </div>
  );
}

export default User;
