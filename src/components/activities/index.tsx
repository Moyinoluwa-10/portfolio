import ActivitiesList from "./activities";
import Certificates from "./certificates";

const Activities = () => {
  return (
    <div className="px-5 pt-28 pb-16">
      <div className="container">
        <ActivitiesList />
        <Certificates />
      </div>
    </div>
  );
};

export default Activities;
