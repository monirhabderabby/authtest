import { auth } from "@/auth";

const page = async () => {
  const currentUser = await auth();
  return <div>{JSON.stringify(currentUser)}</div>;
};

export default page;
