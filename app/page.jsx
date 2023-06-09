import Users from '@/components/Users'
import { fetchUsers } from '@/utils/api'

async function Home() {
  const users = await fetchUsers();

  return (
    <div>
      <h1 className="text-5xl text-red-700">Welcome to the gome page</h1>
      <Users users={users}/>
    </div>
  );
};

export default Home;
