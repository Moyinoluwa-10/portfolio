import ActivitiesList from "./activities";
import Certificates from "./certificates";

export default function Activities() {
  return (
    <div className="px-5 pt-28 pb-16">
      <div className="container">
        <ActivitiesList />
        <Certificates />
      </div>
    </div>
  );
}
