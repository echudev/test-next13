import { getUser } from '@/utils/api'
import Image from 'next/image'

async function Users({ params }) {
  const user = await getUser(params.id)
  console.log(user)

  return (
    <div>
      <Image width={100} height={100} alt="avatar" src={user.avatar} />
      <div>name: {`${user.first_name} ${user.last_name}`}</div>
      <div>contact: {user.email}</div>
    </div>
  )
}

export default Users