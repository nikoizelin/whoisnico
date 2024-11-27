'use client'

import Image from "next/image";
import "./globals.css";
import Header from "./header.js";
import Skills from "./skills";
import ProjectSwiper from "./project-swiper";
import Career from "./career.js";
import Stack from "./stack.js";
import Footer from "./footer.js";


const metadata = {
  title: "nico iselin",
  description: "this is a portfolio website for nico iselin.",
  favicon: "/icon.ico"
};

function RootLayout() {
  return (
    <html lang="de-CH">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
        <link rel="apple-touch-icon" href="/nico.png" />
      </head>
      <body>
            <div>
            <Header />

            {/* Sections */}
            <main className="">
              {/* Section 1: whoami */}
              <section className="bg-[url('/images/gradient_bg.webp')] bg-fixed bg-contain bg-center bg-no-repeat flex flex-wrap gap-20 items-center justify-center px-12 pt-12 md:px-24 md:pt-24">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-green-500 inline-block text-transparent bg-clip-text">
                    hey, i&apos;m <span className="">nico!</span>
                  </h1>
                  <p className="w-96 mt-4 text-lg"><span className="whoami">whoami? </span>
                  i&apos;m a software developer working mostly with frontend applications. <br></br>
                  i&apos;m passionate about creating beautiful and user-friendly interfaces. 
                  </p>
                </div>
                <div className="lg:block">
                <Image
                  src="/images/whoami_mee.png"
                  width={512}
                  height={144}
                  className="h-auto w-[512px] min-w-[144px]"
                  alt="bild mee nico"
                /> 
                </div>
              </section>

              {/* Section 2: Projects */}
              <section id="projects" className="bg-[url('/images/typography1_white_opacity.png')] bg-fixed bg-cover bg-center bg-no-repeat bg-black p-12 md:p-24">
                <div>
                  <h2 className="text-3xl text-white">projects</h2>
                  <ProjectSwiper />
                </div>
              </section>

              {/* Section 3: Skills */}
              <section id="skills" className="bg-black p-12 md:p-24">
                <div>
                  <h2 className="text-3xl">skills</h2>
                  <Skills />
                </div>
              </section>

              {/* Section 4: Career */}
              <section id="career" className= "bg-[url('/images/typography1_white_opacity.png')] bg-fixed bg-cover bg-center bg-no-repeat bg-black items-center flex p-24">
                <div>
                  <h2 className="text-3xl mb-6">career</h2>
                  <Career />
                </div>
              </section>

              {/* Section 4: my stack */}
              <section id="mystack" className= "bg-black p-12 md:p-24">
                <div>
                  <h2 className="text-3xl mb-6">my stack</h2>
                  <Stack />
                </div>
              </section>

            </main>

            {/* Footer */}
            <Footer />
          </div>
      </body>
    </html>
  );
}

export default RootLayout;
