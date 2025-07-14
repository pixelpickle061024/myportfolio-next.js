import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

function ProjectCard({
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;

  return (
    <div
      className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"

    >
      <div className="relative w-full h-[230px]">
        <div className="w-full h-full object-cover rounded-2xl relative">
          <Image
            src={image}
            alt="project_image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(deployed_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <GithubLogo className="w-2/3 h-2/3 z-10" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
          {name}
        </h3>
        <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
          {truncateText(description, CHAR_LIMIT)}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}

function Works() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="xl:my-0 md:mx-36 p-20" id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="md:mx-36"
      >
        <p className={"sectionSubText"}>My work</p>
        <h2 className={"sectionHeadText"}>Projects.</h2>
      </motion.div>

      <div className="w-full flex md:mx-36">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, each with
          descriptions and links to code repositories and live demos. They
          demonstrate my ability to handle complex challenges, adapt to
          different technologies, and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>

      {!showAll && projects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}

export default Works;

