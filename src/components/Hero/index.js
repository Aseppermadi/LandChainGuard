import React from 'react';
import { imgbackground } from '../../../public'; // Path relatif dari src/components/BlockchainBanner/ ke public/index.js

const Hero = () => {
  return (
    <div className="relative pt-16"> {/* Menambahkan padding-top sesuai dengan tinggi navbar */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imgbackground})`, backgroundSize: 'cover' }}> {/* Mengubah tinggi dan backgroundSize */}
        <div className="flex h-full items-center justify-start"> {/* Mengubah justify-end menjadi justify-start */}
          <div className="text-left p-10">
            <h1 className="text-7xl font-bold text-white">Blockchain</h1> {/* Mengubah warna teks menjadi putih untuk kontras dengan background */}
            <p className="text-white mt-4 max-w-xl"> {/* Mengubah lebar maksimum dan warna teks */}
              Solusi inovasi kami menghadirkan platform Blockchain terintegrasi dengan smart generated contract berbasis AI, menawarkan keamanan smart 
              contract yang disempurnakan untuk integrasi yang lebih efisien, mudah, dan aman. Platform ini dibangun di atas 10 distributed server dengan 
              arsitektur API berbasis gRPC yang menggunakan protocol HTTP/2, memastikan performa tinggi dan kompatibilitas dengan teknologi WEB 3.0. Dengan fitur-fitur unggulan ini, solusi kami memberikan keamanan, reliabilitas, akuntabilitas, dan kemudahan integrasi yang future-proof. Implementasinya dalam aplikasi pertanahan diharapkan dapat meningkatkan transparansi dan akuntabilitas data, serta mengurangi peluang operasi mafia tanah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
