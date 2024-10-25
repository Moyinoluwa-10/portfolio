import { Button } from "@/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-10 px-5 flex-grow flex flex-col">
      <div className="container flex-grow grid place-items-center">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-2xl mb-5">Page Not Found</h2>
          <p className="mb-10">
            We can't seem to find the page you're looking for.
          </p>
          <Link href={"/"}>
            <Button variant="secondary">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
