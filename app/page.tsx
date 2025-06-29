import Hero from '@/components/Hero';
import Navbar from '../components/Navbar'
import Carousel from '@/components/Carousel';
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen  bg-neutral-900 font-inter ">
      <Navbar/>
      <Hero/>
      <Carousel/>
    </div>
  );
}
