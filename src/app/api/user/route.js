import { validateSchema } from "@/lib/validateSchema";
import { UserValidationSchema } from "./user.validation";
import mongoose from "mongoose";

import { connectDatabase } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { User } from "./user.model";

export const GET = async () => {
  await connectDatabase();
  const result = await User.find();
  try {
    return NextResponse.json(
      {
        success: true,
        message: "all user retrieve successful ",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "all user retrieve successful ",
        error: error,
      },
      { status: 500 }
    );
  }
};
export const POST = async (request) => {
  await connectDatabase();
  const payload = await request.json();
  const parseResult = UserValidationSchema.safeParse(payload);
  if (!parseResult.success) {
    return NextResponse.json({
      success: false,
      message: "invalid input",
      error: parseResult.error,
    });
  }
  const result = await User.create(payload);
  try {
    return NextResponse.json(
      {
        success: true,
        message: "User crated successful ",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "failed to create user ",
        error: error,
      },
      { status: 500 }
    );
  }
};
