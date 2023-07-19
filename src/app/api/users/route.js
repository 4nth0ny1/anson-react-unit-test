import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json([
    { id: 1, username: "anthony" },
    { id: 2, username: "anson" },
    { id: 3, username: "hello" },
  ]);
}

// export async function POST() {
//   return;
// }
