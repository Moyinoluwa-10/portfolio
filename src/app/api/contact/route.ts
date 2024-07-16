export async function POST(req: Request) {
  try {
    console.log("POST");

    const data = await req.json();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v0/send-email`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const response = await res.json();
    return Response.json(response);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
