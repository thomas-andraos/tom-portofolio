'use client'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Image from "next/legacy/image";
import MapChart from "../lib/mapChart.jsx";

import React from "react";
import ReactDOM from "react-dom";

import devtom from "../public/tom.jpg";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';

import java from '../public/java.png';
import spring from '../public/spring.png';
import jquery from '../public/jquery.png';

import html from '../public/html.png';
import css from '../public/css.png';
import js from '../public/js.png';

import react from '../public/react.png';
import python from '../public/python.png';
import sql from '../public/sql.png';

import { useState } from "react";
import { Container } from 'postcss';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-medium dark:text-slate-300'>Thomas Andraos</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Thomas Andraos</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-500'>Developer and engineer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-300'>
              Bachelor of Computer Science graduate with a major in Software Engineering.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://au.linkedin.com/in/thomas-andraos-504061244' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/thomas-andraos' target="_blank"><AiFillGithub /></a>
            <a href='mailto:tomm.andraos@gmail.com' target="_blank"><AiFillMail /></a>
          </div>
          <div className='text-center mx-auto w-80 h-80 mt-20 md:h-96 md:w-96'>
            <Image src={devtom} alt='' className='rounded-full' />
          </div>
        </section>

        <section>
          <div className='pt-10'>
            <h3 className='text-3xl dark:text-slate-300'>Learning and Experience</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>
              Throughout my previous studies, including a Certificate IV in Programming, Diploma in Information Technology, and a Bachelor of Computer Science with a major in Software Engineering, I have acquired comprehensive knowledge of the end-to-end software development process. This encompasses processes such as planning, conceptualizing, documenting software requirements (SRS), designing, prototyping, developing, and testing. Additionally, my studies have equipped me with experience in a wide range of programming languages and technologies, including <span className='text-teal-500'>Java</span>,<span className='text-teal-500'> JavaScript</span>, <span className='text-teal-500'>HTML</span>, <span className='text-teal-500'>CSS</span>, <span className='text-teal-500'>JSON</span>, <span className='text-teal-500'>XML</span>, <span className='text-teal-500'>C++</span>, <span className='text-teal-500'>Python</span>, <span className='text-teal-500'>C#</span>, <span className='text-teal-500'>Blazor</span>, <span className='text-teal-500'>the Spring Framework</span>, <span className='text-teal-500'>jQuery</span>, <span className='text-teal-500'>AJAX</span>, <span className='text-teal-500'>RESTful Web Services</span>, <span className='text-teal-500'>SQL</span>, and <span className='text-teal-500'>MongoDB</span>.
            </p>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={java} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={spring} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={jquery} alt='' width={100} height={100} /> </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={html} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={css} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={js} alt='' width={100} height={100} /> </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={python} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={react} alt='' width={100} height={100} /> </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'> <Image src={sql} alt='' width={100} height={100} /> </div>
            </div>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>
              In my recent role as a Full Stack Graduate Software Engineer trainee, I underwent a comprehensive 7-week training program focusing on end-to-end development. This program encompassed <span className='text-teal-500'>Java</span>, <span className='text-teal-500'>The Spring Framework</span>, <span className='text-teal-500'>RESTful Web
                Services</span>,<span className='text-teal-500'> MySQL</span>,<span className='text-teal-500'> Hibernate</span>, <span className='text-teal-500'>HTML</span>, <span className='text-teal-500'>CSS</span>, <span className='text-teal-500'>JQuery</span>, <span className='text-teal-500'>BootStrap</span>, <span className='text-teal-500'>JavaScript</span> and <span className='text-teal-500'>AJAX</span>.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'>
              <Image src={design} alt='' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-slate-300'>Innovative Designs</h3>
              <p className='py-2 dark:text-slate-400'>Designs which blend contemporary aesthetics with core design principles and human-centered interaction theories, delivering intuitive user experiences.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <ul className='text-gray-800 py-1 dark:text-slate-400'>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'>
              <Image src={code} alt='' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-slate-300'>High-quality Code</h3>
              <p className='py-2 dark:text-slate-400'>Developing meticulously written code, bringing elegance and efficiency to software development that meets industry standards and exceeds expectations.</p>
              <h4 className='py-4 text-teal-600'>Development Tools I Use</h4>
              <ul className='text-gray-800 dark:text-slate-400 py-1'>
                <li>IntelliJ</li>
                <li>Eclipse</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'>
              <Image src={consulting} alt='' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-slate-300'>Collaborative Mindset</h3>
              <p className='py-2 dark:text-slate-400'>I excel in team environments, effectively collaborating with others and demonstrating outstanding leadership qualities to achieve remarkable results.</p>
              <h4 className='py-4 text-teal-600'>Collaboration Tools I Use</h4>
              <ul className='text-gray-800 py-1 dark:text-slate-400'>
                <li>Jira</li>
                <li>Github</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-slate-300'>Portofolio</h3>
            <p className='py-2 dark:text-slate-400'>Short para about consulting or something here</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'> <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' alt='' /></div>
            <div className='basis-1/3 flex-1'> <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' alt='' /></div>
          </div>
        </section>

        <section>
          <div className=''>
            <div className='absolute'>
              <h3>HELLOOOO</h3>
            </div>
            <div className=''>
              <div><MapChart /></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
