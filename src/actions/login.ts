"use server";

import { LoginType } from "@/app/login/page";
import { signIn } from "@/auth";

export const loginWithEmail = async (data: LoginType) => {
  try {
    const res = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const resData = await res.json();

    if (!res.ok || !resData) {
      return {
        success: false,
        message: "password wrong",
      };
    }

    await signIn("credentials", {
      resData,
      Name: "Monir",
    });

    return {
      success: true,
      message: "Logged in success",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
