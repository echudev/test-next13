import UsersList from '@/components/UsersList'
import { fetchUsers } from '@/utils/api'

async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
        <h1 className="text-5xl">Usuarios</h1>
        <UsersList users={users}/>
    </div>
  )
}

export default UsersPage