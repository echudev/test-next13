'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Users({ users }) {

  const router = useRouter()

  return (
    <ul>
    {users.map((user) => (
      <li key={user.id}
      onClick={() => {
        router.push(`/users/${user.id}`)
      }}
      >
        <Image className="cursor-pointer" width={40} height={40} alt="avatar" src={user.avatar} />
        <p>{`${user.first_name}  ${user.last_name}`}</p>
        <p>{user.email}</p>
      </li>
    ))
   }
  </ul>
  )
}

export default Users
