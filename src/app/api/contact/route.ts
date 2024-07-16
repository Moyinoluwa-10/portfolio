import { ContactEmail } from "@/templates/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const value = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Moyinoluwa Adelowo <moyinadelowo@gmail.com>",
      to: [value.email],
      subject: "Thank You for Reaching Out!",
      react: ContactEmail({ firstName: value.firstName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
