import Users from '@/components/Users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
}

async function Home() {
  const users = await fetchUsers();
  console.log(users)

  return (
    <div>
      <h1 className="text-5xl text-red-700">Welcome to the gome page</h1>
      <Users users={users}/>
    </div>
  );
};

export default Home;
