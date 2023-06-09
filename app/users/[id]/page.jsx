'use client'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { getUser } from '@/utils/api'

async function User() {
  const router = useRouter()
  const params = useParams()
  const user = await getUser(params.id)
 

  return (
    <div>
      <Image width={100} height={100} alt="avatar" src={user.avatar} />
      <div>name: {`${user.first_name} ${user.last_name}`}</div>
      <div>contact: {user.email}</div>
      <button
      onClick={()=>{
        router.push(`/users/`)
      }}
      >Volver</button>
    </div>
  )
}

export default User