import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  console.log("API CALLED");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  console.log("RESPONSE PARSED");
  return response.json();
};

const App = () => {
  const { data, isLoading, isError, error, isFetching, status } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000,
  });
  console.log({
    isLoading,
    isFetching,
    status,
    hasData: !!data,
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      {/* <ComponentA />
      <ComponentB /> */}
      <div>
        <h1>Users List</h1>
        {isFetching && <h1>Background Fetching...</h1>}
        {data.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid gray",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

/* const ComponentA = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000,
  });

  return <div>Component A</div>;
};
const ComponentB = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000,
  });

  return <div>Component B</div>;
};
 */
