import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log("path", path);
  return NextResponse.json({
    message: `endpoint ${path} is not exist this endpoints`,
  });
}

export { handler as GET, handler as POST, handler as DELETE, handler as PUT };
