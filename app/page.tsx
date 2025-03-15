import Navbar from "@/components/Navbar";
import Projects from "@/components/screens/Projects";
import Contact from "@/components/screens/Contact";
import Landing from "@/components/screens/Landing";
import Pong from "@/components/screens/Pong";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Contact />
      <Pong />
    </>
  );
}
