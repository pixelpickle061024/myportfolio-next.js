import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Dynamic and highly skilled Senior Software Engineer with over 10 years of
          experience in designing, developing, and maintaining scalable software.
          Expertise in both frontend and backend technologies including
          Blockchain, C#, C++, Reactnative, React, Node.js, Unity, Python, Angular,
          Laravel, Next.js, and PostgreSQL etc. Proven track record of
          delivering high-quality software solutions that meet business requirements
          and enhance user experience. Adept at working in agile environments,
          leading teams, and collaborating cross-functionally to deliver complex
          projects on time and within budget. Passionate about coding, clean
          architecture, and continuously learning new technologies.

        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:fucabruon118@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            pixelpickle061024@gmail.com
          </Link>
        </div>
        {/* <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
}

export default About;
