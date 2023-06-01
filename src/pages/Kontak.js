import React from 'react'
import img from "../assets/GIFAR.jpg"
import Education from '../components/Education'

const Kontak = () => {
  return (
    <div className="container mx-auto px-32 font-roboto items-center justify-center">
      <div className="py-20 h-full">
      <h1 className="font-bold text-2xl mb-5">KONTAK SAYA</h1>
      <div className="flex gap-10 mt-10">
          <div className="">
            <img src={img} alt="logo" className="w-[250px] h-[250px] bg-red-500 bg-cover rounded-full"/>
          </div>
        <div className="w-2/3 p-5">
          <h1 className="text-3xl font-semibold mb-5">Hallo, Saya Giffar Ananda</h1>
          <p className="mb-4">Junior Front-End developer dan lulusan D1 Teknik Komputer Dan Jaringan.</p>
          <p className="mb-4">Memiliki pengalaman di bidang pengembangan jaringan dan Website, Saat ini 
          menghadiri program bootcamp Full-Stack Web Developer untuk memperdalam keterampilan pengembangan. Penuh 
          semangat mengembangkan pengetahuan dan keterampilan baru terutama dalam pengembangan Web.</p>
        <Education/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Kontak