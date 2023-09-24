import React from "react";

function About() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2">
        <h1 className=" text-center text-3xl text-bgold-200 shimmer">
          About The Event
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      {/* <p>
        CBIT Open Source Community, an esteemed tech community based in
        Chaitanya Bharathi Institute of Technology - Hyderabad, is dedicated to
        promoting an open-source ethos. We organize a diverse range of events
        such as hackathons, bootcamps, and workshops, aimed at educating
        students about various technologies while actively fostering a culture
        of open source. In these dynamic gatherings, students immerse themselves
        in collaborative coding sessions, innovative problem-solving challenges,
        and hands-on experiences, all centered around open source principles. By
        embracing this approach, we empower students to not only learn about
        cutting-edge technologies but also actively contribute to their
        development and dissemination.
      </p>
      <h1>About the event</h1> */}
      <div className=" py-6 w-[85%] mx-auto text-center flex flex-col gap-8 ">
        About the Event Welcome to HacktoberFest - the annual extravaganza that
        fuels the spirit of open source collaboration! 🚀
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold ">
            What is HacktoberFest?
          </span>
          <p className=" mt-2">
            HacktoberFest, presented by DigitalOcean, Appwrite, and ILLA Cloud,
            is a month-long open source celebration. Its aim? To inspire
            students and enthusiasts while fostering community, collaboration,
            and skill-building.
          </p>
        </div>
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold">
            Why We're Thrilled
          </span>
          <p className=" mt-2">
            The "CBIT Hacktoberfest Hackathon" is an exciting 24-hour coding
            challenge within this event. It empowers individuals to make
            meaningful contributions, expand tech knowledge, and connect with
            open source enthusiasts.
          </p>
        </div>
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold">Who We Are</span>
          <p className=" mt-2">
            We are the Chaitanya Bharathi Institute of Technology Open Source
            Community (COSC) in Hyderabad. Our mission? Promote open source
            values, provide a platform for students to explore and contribute to
            tech, all while crafting experiences that nurture a lifelong love
            for open source.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
