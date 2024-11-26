'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Projects() {
  return (
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
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-auto mt-6"
        >
        {/* Bernhard Westphal */}
        <SwiperSlide>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img className="w-full" src="/images/bernhardwestphal_website.png" alt="bernhard westphal" />
            <div className="px-6 py-4 swiper-no-swiping">
            <div className="font-bold text-xl text-black mb-2">bernhard westphal</div>
            <p className="text-gray-800 text-base">
                the quick brown fox jumps over the lazy dog.
                the quick brown fox jumps over the lazy dog.
                the quick brown fox jumps over the lazy dog.
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
            <img className="w-full" src="/images/bioorangen_website.png" alt="bioorangen" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">bioorangen</div>
            <p className="text-gray-800 text-base">
                The quick brown fox jumps over the lazy dog.
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
            <img className="w-full h-auto" src="/images/ttce_website.png" alt="ttceschenbach" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">ttceschenbach</div>
            <p className="text-gray-800 text-base">
                The quick brown fox jumps over the lazy dog.
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
            <img className="w-full" src="/images/thedevtoolzquiz_logo.png" alt="thedevtoolzquiz" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">coming soon: thedevtoolzquiz</div>
            <p className="text-gray-800 text-base">
                The quick brown fox jumps over the lazy dog.
            </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#react</span>
            <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#next.js</span>
            <span className="inline-block bg-black rounded-full px-2 py-1 text-sm text-white mr-2 mb-2">#game</span>
            </div>
        </div>
        </SwiperSlide>
        {/* alexa skill */}
        <SwiperSlide>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img className="w-full" src="/images/alexa_skill_todo.png" alt="todo-alexa" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">to-do-list: alexa skill</div>
            <p className="text-gray-800 text-base">
                The quick brown fox jumps over the lazy dog.
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
            <img className="w-full" src="/images/bootsverwaltung_app.png" alt="bootsverwaltung" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">bootsverwaltung</div>
            <p className="text-gray-800 text-base">
                The quick brown fox jumps over the lazy dog.
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

export default Projects;