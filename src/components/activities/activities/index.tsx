import { ACTIVITIES } from "@/constants/activities/activities";
import Card from "./card";
import { Button } from "@/ui";

export default function ActivitiesList() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-[#131313] dark:text-white flex justify-between">
        Activities <Button variant="secondary">See All</Button>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ACTIVITIES.map((activity, index) => (
          <Card key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}
