import { NextResponse } from "next/server";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  const data = await getSiteData(domain);
  return NextResponse.json({ message: "endpoint not found" });
}
