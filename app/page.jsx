import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// components
import Social from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import Services from './services/page'
import Resume from './resume/page'
import Contact from './contact/page'

const Home = () => {
  return (
    <section className="h-full mt-[70px] ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl '>Full-Stack Developer</span>
            <h1 className='h1 mb-6'>Hello I&apos;m <br /> <span className='text-accent'>Samar BelHadj Amor</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I am a passionate full-stack developer with expertise in Laravel and React, focused on building user-centered, innovative digital solutions. Driven by a love for technology and continuous learning, I quickly adapt to new challenges and deliver high-performance, scalable applications.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 py-3 px-6">
                <a href="/assets/work/Developeuse_Samarbelhajjamor_resume.pdf" download className="flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </a>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}
export default Home
