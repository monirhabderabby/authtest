"use server";

import { LoginType } from "@/app/login/page";
import { signIn } from "@/auth";

export const loginWithEmail = async (data: LoginType) => {
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
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
