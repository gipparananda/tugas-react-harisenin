import React from "react";
import Card from "../components/Card";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import Port1 from "../assets/port1.png";
import Port2 from "../assets/port3.png";
import Port3 from "../assets/port2.png";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-32 font-roboto items-center justify-center">
      <div className="py-20 gap-5 h-full">
        <h1 className="font-bold text-2xl mb-5">PORTFOLIO</h1>
        <Card
          content={{
            imageUrl: Port1,
            head: "Fabira Movie",
            title:
              "Trailer Film Dan Situs Web Streaming Serial TV. Tentang Sinopsis, Aktor, Rating, dan Sutradara, Trailer Streaming, Sinopsis Film. Situs web ini dibuat untuk memenuhi syarat bootcamp harisenin.com",
            link: "https://github.com/MasAnton/Final_project_kelompok-8",
            tech: (
              <>
                <FaReact />
                <SiTailwindcss />
                <FaNodeJs />
                <SiMysql />
              </>
            ),
          }}
        />
        <Card
          content={{
            imageUrl: Port2,
            head: "Page Transition",
            title:
              "Halaman transisi menggunakan React Router DOM dan teknologi GSAP. Halaman transisi ini memberikan pengalaman yang mulus dan menarik saat pengguna berpindah dari satu halaman ke halaman lainnya.",
            link: "https://github.com/gipparananda/Page-Transisition-Gsap",
            tech: (
              <>
                <FaReact />
                <SiTailwindcss />
              </>
            ),
          }}
        />
        <Card
          content={{
            imageUrl: Port3,
            head: "Personal Web 3.0",
            title:
              "Bangga memperkenalkan situs web pribadi ketiga, dibuat dengan React dan Tailwind CSS. membererikan interaksi yang lebih menarik di situs web, seperti efek animasi.",
            link: "https://github.com/gipparananda/PERSONAL-WEBSITE-3.0",
            tech: (
              <>
                <FaHtml5 />
                <SiTailwindcss />
                <FaReact />
              </>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
