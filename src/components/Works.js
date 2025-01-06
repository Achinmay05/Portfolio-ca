import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import React from 'react';

const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => {
  // Check if we're in the browser environment before accessing window
  // const isBrowser = typeof window !== 'undefined';
  // const isMobile = isBrowser ? window.innerWidth <= 768 : false;

  return (
    <div className='bg-black p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_Link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt="github"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-purple-500 font-bold text-[24px]">{name}</h3>
        <p className='mt-2 text-white text-[14px]'>{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={tag.name} className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>

  );
};

const Works = () => {
  return (

    <div className="w-full min-h-screen" id='works' >
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'>
          These are some of the projects built by me.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>

    </div>

  );
};

export default SectionWrapper(Works, "");

