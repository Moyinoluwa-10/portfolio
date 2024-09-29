import { Button } from "@/ui";
import Link from "next/link";

export default function ScheduleACall() {
  return (
    <div className="px-5 py-16">
      <div className="container">
        <p className="text xl md:text-2xl font-semibold text-center max-w-3xl mx-auto mb-10 text-[#131313] dark:text-white">
          I am the perfect blend of a team member and a team leader, capable of
          building innovative projects and products along and for you, Want to
          know more?
        </p>
        <div className="flex items-center justify-center gap-x-16 gap-y-8 flex-wrap">
          <Link href={"/contact"}>
            <Button>Contact Me</Button>
          </Link>
          <Link href="/activities">
            <Button variant="secondary">View Activities</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
