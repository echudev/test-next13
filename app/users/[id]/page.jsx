"use client";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useGetUser } from "@/hooks/useGetUser";

function User() {
  const router = useRouter();
  const params = useParams();
  const [loading, user] = useGetUser(params.id);

  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center mt-10 mx-auto rounded-full bg-violet-300 bg-opacity-5 max-h-[400px] aspect-square"></div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10 mx-auto rounded-full bg-violet-300 bg-opacity-5 max-h-[400px] aspect-square">
          <Image
            className="rounded-full"
            width={200}
            height={200}
            alt="avatar"
            src={user.avatar}
          />
          <div className="mt-10 text-2xl text-slate-300">{`${user.first_name} ${user.last_name}`}</div>
          <div className="text-slate-300">{user.email}</div>
          <button
            className="mt-10 bg-orange-500 text-orange-100 font-bold px-2 rounded-md m-3 h-10 w-24 hover:brightness-125 transition"
            onClick={() => {
              router.push(`/users/`); // vuelve a la página anterior
            }}
          >
            Volver
          </button>
        </div>
      )}
    </>
  );
}

export default User;
