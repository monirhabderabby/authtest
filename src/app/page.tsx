import { auth } from "@/auth";

async function getData() {
  try {
    const res = await fetch(`http://localhost:5000/testing`).then((res) =>
      res.json()
    );

    console.log("SUCCESS FROM GET API CALL: path:/", res);

    return res;
  } catch (error: any) {
    console.log("GET ERROR FAILED:", error.message);
  }
}

const page = async () => {
  const currentUser = await auth();
  const a = await getData();
  return (
    <div>
      {JSON.stringify(currentUser)} <p>{JSON.stringify(a)}</p>
    </div>
  );
};

export default page;
