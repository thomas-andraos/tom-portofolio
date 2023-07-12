import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Image from 'next/image';
import devtom from "../public/tom.jpg";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-medium'>Thomas Andraos</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Thomas Andraos</h2>
            <h3 className='text-2xl py-2'>Developer and engineer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Bachelor of Computer Science graduate with a major in Software Engineering.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
          </div>
          <div className=' relative w-80 h-80'>
            <Image src={devtom} alt='' className='relative rounded-full' layout='fill' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Learning and Experience</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Education section here: talk about learning
            </p>
            <ul className='text-gray-800 py-1'>
              <li>Java</li>
              <li>HTML</li>
              <li>jQuery</li>
              <li>JavaScript</li>
            </ul>
            <p className='text-md py-2 leading-8 text-gray-800'>
              training section here: talk abt training
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} alt='' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Innovative Designs</h3>
              <p></p>
              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <ul className='text-gray-800 py-1'>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
