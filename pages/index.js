import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa";
import Image from "next/image";
import profile from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web5 from "../public/web5.png";
import { useState} from "react";

function Home() {
  const [mode, setMode] = useState(false)

  return (
    <div className={mode ? 'dark' : ''}>
      <Head>
        <title>Chernyshev Artem</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/211930_star_icon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b from-gray-900 to-gray-800'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-3xl font-luckiestguy  dark:text-white'>ARTEMIY</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setMode(!mode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8' href='https://t.me/artechee' target='blank'>Type me</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl font-luckiestguy dark:text-teal-400'>Chernyshev Artem</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300 font-bold'>Front-end developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300 '>I help people and brands reach their goals by turning their ideas into sites & apps by building user-centric digital products and interactive experiences.</p>
            <p className='dark:text-gray-300 font-dmsans font-medium'>In a Professional and Cost-Effective Way. Always.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://t.me/artechee"><FaTelegramPlane className='cursor-pointer dark:text-white'/></a>
            <a href="https://bit.ly/3E7uhan"><BsWhatsapp className='cursor-pointer dark:text-white'/></a>
          </div>
          <div className='relative overflow-hidden mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:w-96 md:h-96'>
            <Image src={profile} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div className=''>
            <h3 className="text-3xl py-1 dark:text-white font-luckiestguy">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance
              developer, I`&apos`ve done remote work for
              <span className="text-teal-600 dark:text-teal-400"> agencies </span>
              and <span className="text-teal-600 dark:text-teal-400">startups </span>
              collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including
              <span className='text-teal-600 dark:text-teal-400'> freelance development</span>
              <span> & working on your company as a full-time developer</span>
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-2xl my-10 flex-1 dark:bg-gray-300'>
              <Image className='mx-auto' src={design} width={100} height={100}/>
              <h3 className='text-xl font-luckiestguy text-gray-700 pt-8 pb-2'>Beautiful and responsive sites</h3>
              <p className='py-2'>
                Creating elegant website suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-500'>Design tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 flex-1">
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className="text-xl font-luckiestguy text-gray-700 pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let'
                `&apos`s make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-500">Technologies</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Redux Toolkit</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">GitHub</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 flex-1">
              <Image className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className="text-xl pt-8 pb-2 font-luckiestguy text-gray-700">Working on your company</h3>
              <p className="py-2">
                Are you interested in me as a employee for your current projects? You can hire me.
              </p>
              <h4 className="py-4 text-teal-500">Skills</h4>
              <p className="text-gray-800 py-1">Results-oriented</p>
              <p className="text-gray-800 py-1">Full-time basis</p>
              <p className="text-gray-800 py-1">Great English</p>
              <p className="text-gray-800 py-1">Self-learning</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Home