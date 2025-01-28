import { auth } from "@/auth";
import Testing from "./_components/test";

async function getPl() {
  try {
    const resData = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((res) => res.json());

    console.log("SUCCESS JSON PLACEHOLDER. THE RESULT IS", resData);

    return resData;
  } catch (error: any) {
    console.log("ERROR FROM JSON PLACEHOLDER", error.message);
  }
}

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
  const jsonplaceholder = await getPl();
  return (
    <div>
      {JSON.stringify(currentUser)} <p>{JSON.stringify(a)}</p>
      <Testing jsonplaceholderData={jsonplaceholder} localData={a} />
    </div>
  );
};

export default page;
