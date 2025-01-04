// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// // import cerOne from "../assets/img/1.png";
import cerOne from "../assets/img/One.webp";
import cerTwo from "../assets/img/two.webp";
// import cerThree from "../assets/img/three.webp";
// // import cerFour from "../assets/img/four.webp";
// import cerFive from "../assets/img/five.webp";
// import cerSix from "../assets/img/six.webp";
// import cerSeven from "../assets/img/seven.webp";
// import cerEight from "../assets/img/eight.webp";
// import cerNine from "../assets/img/nine.webp";

// import { EffectCoverflow } from 'swiper/modules';


// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// export const Achievements = () => {

//   return (
//     <section className='achievements' id='achievements'>

// <div className="swiper-container">
//       <h2>Achievements</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, A11y]}
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         effect="coverflow"
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }} className="mySwiper"
//       >

//         <SwiperSlide >
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             {/* <div className="card bg-dark text-white" style={{ width: '35rem' }}> */}
//             <img src={cerOne} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Cisco Certified Network Associate <br /> Certification</h3>
//             </div>
//           </div>

//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerTwo} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco Certified Network Associate <br /> Certification</h5>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerThree} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco : Programming Essentials in <br />Python Certification</h5>


//             </div>
//           </div>
//         </SwiperSlide>

//         {/* <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerFour} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

//             </div>
//           </div>
//         </SwiperSlide> */}

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerFive} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco : Introduction to Networks <br />Certification.</h5>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerSix} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco : Programming Essentials in <br /> C Certification</h5>


//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerSeven} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco : Advanced Programming in <br />C Certification</h5>


//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerEight} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Cisco : Introduction to Cybersecurity <br />Certification</h5>
//             </div>
//           </div>
//         </SwiperSlide>


//         <SwiperSlide>
//           <div className="card bg-dark text-white" style={{ width: '28rem' }}>
//             <img src={cerNine} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">TCS : Young Professionals Certification</h5>
//               <p className="card-text"></p>

//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       </div>

//     </section>
//   );
// };

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Achievements = () => {
  return (
    <section className="achievements min-h-screen flex flex-col items-center justify-center px-4 py-12" id="achievements">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-12">Achievements</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, A11y]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <div className="card bg-dark text-white max-w-[28rem] w-full">
              <img src={cerOne} className="card-img-top w-full h-auto" alt="CCNA Certification" />
              <div className="card-body p-4">
                <h3 className="card-title text-xl text-center">
                  Cisco Certified Network Associate Certification
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat the same structure for other slides */}
          <SwiperSlide className="flex justify-center items-center">
            <div className="card bg-dark text-white max-w-[28rem] w-full">
              <img src={cerTwo} className="card-img-top w-full h-auto" alt="CCNA Certification" />
              <div className="card-body p-4">
                <h5 className="card-title text-xl text-center">
                  Cisco Certified Network Associate Certification
                </h5>
              </div>
            </div>
          </SwiperSlide>

          {/* Add remaining slides with the same structure */}
        </Swiper>
      </div>
    </section>
  );
};