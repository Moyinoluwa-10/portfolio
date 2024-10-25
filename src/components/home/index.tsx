import About from "./about";
// import Hero from "./hero";
import Testimonials from "./testimonials";
import ScheduleACall from "./schedule-a-call";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      <Projects />
      <Testimonials />
      <ScheduleACall />
    </>
  );
}
