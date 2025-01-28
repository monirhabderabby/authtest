"use client";

import { loginWithEmail } from "@/actions/login";
import { useState } from "react";

export interface LoginType {
  email: string;
  password: string;
}

export default function Home() {
  const [formData, setFormData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    const res = await loginWithEmail(formData);

    console.log(res);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <input
        type="text"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}
