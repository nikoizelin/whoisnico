'use client'

import { AcademicCapIcon, BriefcaseIcon, CommandLineIcon, CodeBracketIcon} from '@heroicons/react/24/outline'


function Career() {
  return (
    <ol className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
      <li className="relative mb-6">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <AcademicCapIcon className="size-6 md:size-4  text-blue-300"/>
            </div>
            <div className="flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">software engineering school</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">june 2019 – juli 2023</time>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              during 4 years of software engineering school in <b>rapperswil </b> i got to learn multiple 
               programming languages and got to work on my <b>professional baccularate</b>* at the same time.
            </p>
        </div>
      </li>
      <li className="relative mb-6">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <CommandLineIcon className="size-6 md:size-4  text-blue-300"/>
            </div>
            <div className="flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">internship lzlabs</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">april 22 · 3 weeks</time>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              at lzlabs i was able to gain experience in <b>vue.js</b> and <b>tailwind css </b>
              as i worked on a new <b>prototype</b> for a for a UI to manage the organization of servers and environments 
            </p>
        </div>
      </li>
      <li className="relative mb-6">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <BriefcaseIcon className="size-6 md:size-4  text-blue-300"/>  
            </div>
            <div className="flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">strichpunkt</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">juli 23 – august 24</time>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              as part of my swiss federal certificate of proficiency* i was a part of the team at strichpunkt mainly working 
              with jquery, php, mysql css on website presences with a proprietary CMS.
            </p>
        </div>
      </li>
      <li className="relative mb-6">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <CodeBracketIcon className="size-6 md:size-4 text-blue-300"/> 
            </div>
            <div className="flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">freelancer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">september 24 – now</time>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              after <b>sucessfully</b> finishing the software engineering school earning my pb* and sfcp* i started working in freelance 
              executing web-projects for clients mostly working with <b>react.js</b>.
            </p>
        </div>
        
      </li>
    </ol>
  )
}

export default Career;