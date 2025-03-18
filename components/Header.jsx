import Link from 'next/link';
import { Button } from './ui/button';

//Components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary  py-1 xl:py-2 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        
        {/*logo */}
        <Link href="/">
         <h1 className='text-4xl font-semibold'>
           Samar<span className="text-accent">.</span>
         </h1>
        </Link>

        {/*desktop nav & hire me button */}
        
            <div className = "hidden xl:flex items-center gap-8">
              <Nav/>
                 <Link href ="/contact">
                <Button>Hire me</Button>
                 </Link>
            </div>

        {/*mobile nav*/}
           <div className="xl:hidden">
            <MobileNav/>
          </div>

     </div>
    </header> 
  )
}

export default Header

