import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function ProjectSwiper() { 

    return(
        <div>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
                768: {
                slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 4,
                },
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-auto mt-6"
            >
            {/* Bernhard Westphal */}
            <SwiperSlide>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/bernhardwestphal_website.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="bernhard westphal"
                />
                <div className="px-6 py-4 swiper-no-swiping">
                <div className="font-bold text-xl text-black mb-2">bernhard westphal</div>
                <p className="text-gray-800 text-base">
                    in this project my client of bernhard westphal consulting wanted a website to present his services and work.
                    working with the wordpress-cms i created a custom theme with html, 
                    jquery and implemented the design with css. which <b>marc iselin</b> created on figma.
                </p>
                </div>
                <div className="px-6 pt-6 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#jquery</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#consulting</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#wp-cms</span>
                </div>
            </div>
            </SwiperSlide>
            {/* BioOrangen */}
            <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/bioorangen_website.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="bioorangen"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">bioorangen</div>
                <p className="text-gray-800 text-base">
                    for many years my mom has been selling bio-oranges from sicily. 
                    she managed the orders manually via whatsapp and it took a long time to
                    process them. so i created a tool for her to manage the orders and the customers could place the orders 
                    directly on the website.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#orangen</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#react</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#firebase</span>
                </div>
            </div>
            </SwiperSlide>
            {/* TTCE */}
            <SwiperSlide>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/ttce_website.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="ttceschenbach"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">ttceschenbach</div>
                <p className="text-gray-800 text-base">
                    as a part of the board of the ttceschenbach i created a new website for the club, which i directly
                    built on the club management software <b>clubdesk</b>. working with multiple versions of the design 
                    i implemented the website directly on the software.  
                    
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#tischtennis</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#clubdesk</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#aos</span>
                </div>
            </div>
            </SwiperSlide>
            {/* devtoolzquiz */}
            <SwiperSlide>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/thedevtoolzquiz_logo.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="thedevtoolzquiz"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">coming soon: thedevtoolzquiz</div>
                <p className="text-gray-800 text-base">
                    because of my passion for trivia and creating quizzes for family and friends i will launch my own quiz game.
                    the game will be about web development and some questions can only be solved by using the devtools. 
                    also i&apos;m planning to use as many api&apos;s as possible to make the game more interactive.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#react</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#next.js</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#game</span>
                </div>
            </div>
            </SwiperSlide>
            {/* dragonstreak */}
            <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/dragon_streaks.jpg"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="bioorangen"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">in development: dragonstreak</div>
                <p className="text-gray-800 text-base">
                    dragonstreak is an ios application that helps you get rid of bad habits by collecting streaks.
                    the fun part is, that you can grow your very own dragon along your journey by feeding it 
                    with these streaks. so the better you get at not doing any bad habits the stronger your dragon gets.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#ios</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#xcode</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#swift</span>
                </div>
            </div>
            </SwiperSlide>
            {/* alexa skill */}
            <SwiperSlide>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/alexa_skill_todo.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="todo-alexa"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">to-do-list: alexa skill</div>
                <p className="text-gray-800 text-base">
                    as captain of a team of four colleagues we had to develop a new amazon alexa skill in 3 weeks 
                    at the <b>ims rapperswil</b>. introduced to the amazon apl and the alexa sdk 
                    we created a to-do-list skill for alexa using multiple api&apos;s, which we were awarded by the ims. 

                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#mapboxapi</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#openweather</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#js</span>
                </div>
            </div>
            </SwiperSlide>
            {/* bootsverwaltung */}
            <SwiperSlide>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                    src="/images/bootsverwaltung_app.png"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    alt="bootsverwaltung"
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">bootsverwaltung</div>
                <p className="text-gray-800 text-base">
                    for the further education in java i developed a boat management app. 
                    i had to firstly design all the scenes and then implement those in the javafx project.
                    no database is used so all the data is stored and retrieved in json and xml files.  
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#javafx</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#json/xml</span>
                <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#scenebuilder</span>
                </div>
            </div>
            </SwiperSlide>                    
        </Swiper>
    </div>
)
}

export default ProjectSwiper;