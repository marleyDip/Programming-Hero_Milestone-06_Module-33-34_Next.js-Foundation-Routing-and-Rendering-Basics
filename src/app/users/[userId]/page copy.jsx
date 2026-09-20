const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return <div>{user.name}</div>;
};

export default UserDetailPage;
