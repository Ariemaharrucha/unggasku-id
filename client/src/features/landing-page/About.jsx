import logo from '../../assets/logo.png';
import ttg1 from '../../assets/tentangkami-1.jpg';
import kelvinImage from '../../assets/card profil-tentang-kami1.jpg';
import hasanImage from '../../assets/card profil-tentang-kami2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Slider from 'react-slick';
import { Layout } from '../../layouts/Layout.jsx';
import AB from '../../assets/Images/about/AB.png';
import AM from '../../assets/Images/about/AM.png';
import DV from '../../assets/Images/about/DV.png';
import IK from '../../assets/Images/about/IK.png';
import RA from '../../assets/Images/about/RA.png';
import SD from '../../assets/Images/about/SD.png';
import SF from '../../assets/Images/about/SF.png';

const testimonials = [
    { text: "Unggasku.id memberi solusi tepat untuk kesehatan ayam saya...", author: "Kelvin", role: "Peternak", image: kelvinImage },
    { text: "Unggasku.id membantu saya mencegah wabah penyakit...", author: "Hasan", role: "Peternak", image: hasanImage },
    { text: "Platform ini sangat membantu saya mengelola peternakan dengan lebih efisien.", author: "Kelvin", role: "Peternak", image: kelvinImage },
    { text: "Dengan Unggasku.id, hasil produksi telur saya meningkat drastis!", author: "Hasan", role: "Peternak", image: hasanImage },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <section className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Apa kata mereka tentang Unggasku.id</h2>
            <Slider {...{...settings, dots: false}}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-yellow-300 p-4 rounded-lg shadow-md max-w-sm mx-auto mb-6">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-40 object-cover rounded-t-lg" />
                        <p className="mt-4 italic">&quot;{testimonial.text}&quot;</p>
                        <div className="mt-4 text-right font-bold">{testimonial.author}</div>
                        <div className="text-right text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                ))}
            </Slider>
        </section>

    );
};

const team = [
  { name: "Stefanus Fandi", role: "Project Manager", description: "STUPEN BATCH 7", social: "#", image: SF },
  { name: "Amallia", role: "Hipster", description: "STUPEN BATCH 7", social: "#", image: AB },
  { name: "Rizkia", role: "Hipster", description: "STUPEN BATCH 7", social: "#", image: RA },
  { name: "Didik", role: "Hipster", description: "STUPEN BATCH 7", social: "#", image: DV },
  { name: "Radita", role: "Hacker", description: "STUPEN BATCH 7", social: "#", image: IK },
  { name: "Stefanus Dwi", role: "Hacker", description: "STUPEN BATCH 7", social: "#", image: SD },
  { name: "Arie", role: "Hacker", description: "STUPEN BATCH 7", social: "#", image: AM },
];

export const About = () => {
    return (
        <Layout>
        <div className="font-poppins">
            <section className="text-black md:py-20 py-8 px-5 md:px-20 flex flex-col md:flex-row items-center min-h-96">
                <div className="flex-1 flex flex-col justify-center order-2 md:order-1 px-6 md:px-0 mt-8 md:mt-0">
                    <h2 className="text-4xl md:text-5xl font-bold">Visi & Misi</h2>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed">Menjadi platform terpercaya yang mendukung kesehatan unggas dan kesejahteraan peternak melalui solusi digital yang inovatif dan berkelanjutan.</p>
                    <ul className="mt-6 space-y-4 text-lg md:text-xl leading-relaxed">
                        <li>🌐 Menyediakan akses mudah ke panduan kesehatan unggas yang komprehensif dan akurat.</li>
                        <li>🤝 Memberikan dukungan kepada peternak melalui fitur konsultasi ahli dan komunitas interaktif.</li>
                        <li>⚙️ Mengembangkan teknologi praktis untuk meningkatkan pengelolaan peternakan unggas secara efektif.</li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-center  mt-5 md:mt-0 order-1 md:order-2">
                    <img src={logo} alt="Unggasku Logo" className="bg-primary-900 rounded-lg max-w-md h-80 md:max-w-md md:h-80 md:ml-36 ml-0" />
                </div>
            </section>

            <section className="bg-secondary-300 text-black md:my-20 my-0 md:py-20 py-8 px-5 md:px-20 flex flex-col md:flex-row items-center min-h-96">
                <div className="flex-1 flex justify-center mb-10 md:mb-0">
                    <img src={ttg1} alt="Tentang Unggasku" className="bg-primary-900 rounded-full max-w-md h-80 md:max-w-md md:h-80" />
                </div>
                <div className="flex-1 flex flex-col justify-center text-left md:max-w-md md:mx-40 mx-6">
                    <h2 className="text-4xl md:text-5xl font-bold">Tentang Unggasku.id</h2>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed">
                        Unggasku.id didirikan sejak 2024 sebagai platform digital untuk mendukung kesehatan unggas. Kami menyediakan layanan konsultasi ahli dan panduan lengkap agar peternak dapat menjaga kesehatan ternaknya dengan lebih mudah. Dengan Unggasku.id, kami berkomitmen membantu mewujudkan peternakan unggas yang sehat dan berkelanjutan.
                    </p>
                </div>
            </section>

            <Testimonials />

            <section className="bg-gray-900 text-white md:p-8 p-0 px-4  py-3  text-center rounded-full md:m-8 m-4">
                <div className="flex justify-around">
                    <div className="md:mx-4">
                        <p className="md:text-lg text-base font-semibold">200+</p>
                        <p className='text-sm md:text-base'>Kepuasan Pengguna</p>
                    </div>
                    <div className="md:mx-4">
                        <p className="md:text-lg font-semibold">2500+</p>
                        <p className='text-sm md:text-base'>Pengalaman Konsultasi</p>
                    </div>
                    <div className="md:mx-4">  
                        <p className="md:text-lg font-semibold">250+</p>
                        <p className='text-sm md:text-base'>Peternak Aktif</p>
                    </div>
                </div>
            </section>

            <section className="p-8 text-center">
                <h2 className='text-2xl font-semibold text-gray-400'>Nusantara Growth</h2>
                <h2 className="text-2xl font-bold mb-8">Kenalan dengan Tim Kami</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={false}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="w-full flex justify-center"
                >
                    {team.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-4 rounded-lg text-center w-64 mx-auto">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="rounded-full w-24 h-24 mx-auto mb-4" 
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="text-gray-500 mb-6">{member.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
        </Layout>
    );
};

