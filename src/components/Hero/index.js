import React from 'react';
import { imgbackground } from '../../../public'; 


const Hero = () => {
  return (
    <div className="relative pt-10"> 
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imgbackground})`, backgroundSize: 'cover' }}> 
        <div className="flex h-full items-center justify-start"> 
          <div className="text-left p-10 animate-slide-in-left"> 
            <h1 className="text-7xl font-bold text-white">Blockchain</h1> 
            <p className="text-white mt-4 max-w-xl"> 
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