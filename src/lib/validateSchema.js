import { NextResponse } from "next/server";

export const validateSchema = async (schema, payload) => {
  try {
    const result = schema.parse(payload);
    return result;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
