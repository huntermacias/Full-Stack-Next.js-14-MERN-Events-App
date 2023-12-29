import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {


  return (
    <>
      <section className="bg-black text-white relative py-10 overflow-hidden">
        <div className="wrapper grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-4xl md:text-5xl leading-tight">
              Discover. Engage. Celebrate. <br/> Your Ultimate Event Experience Awaits!
            </h1>
            <p className="p-regular-20 md:p-regular-24 leading-relaxed">
              Join a vibrant community of event enthusiasts. Uncover unique experiences, connect with like-minded people, and create unforgettable memories.
            </p>
            <div>
              <Button size="lg" asChild className="button w-full sm:w-fit bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                <Link href="#events" className="text-lg">
                  Start Your Adventure
                </Link>
              </Button>
            </div>
          </div>

          <Image 
            src="/assets/images/hero.png" // Consider using an image that fits the dark theme
            alt="Event exploration"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div> */}
      </section>

      <section id="events" className="wrapper my-10 flex flex-col gap-10 md:gap-12">
        <h2 className="h2-bold text-3xl md:text-4xl">Trusted by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row text-gray-300">
          {/* Components like Search and CategoryFilter should also have dark theme styles */}
        </div>

        {/* The Collection component should be styled with dark theme colors and fonts */}
      </section>
    </>
  );
}
