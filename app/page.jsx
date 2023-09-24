'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section id="home" className=" spacer layer1 section">
        <Hero />
      </section>
      <section id="about" className=" section spacer layerDeez md:pt-0 pt-10">
        <About />
      </section>
      {/* <div className="spacer layer2"></div> */}
      <section id="schedule" className=" spacer layer2 w-full section relative">
        <Timeline />
      </section>

      <div className=" spacer1 layer5 flex flex-col justify-center  mb-12">
        <section id="mentors" className=" section pt-16">
          <Mentors />
        </section>
        {/* <Sponsors /> */}
        <section id="contact" className=" section pt-28">
          <Contact />
        </section>
      </div>
    </main>
  );
}
