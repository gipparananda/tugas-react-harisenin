import React from "react";
import logo from "../assets/img1.webp"

const Home = () => {
    return(
        <div className="container mx-auto px-20 font-roboto items-center justify-center h-screen">
            <div className="flex items-center justify-center py-20 gap-5 pb-10 h-full">
                <div className="w-1/2 flex items-center justify-center">
                    <img src={logo} alt="logo" className="w-[350px] h-auto"/>
                </div>
                
                <div className="w-1/2 text-center">
                    <h1 className="text-4xl font-bold text-left">Selamat Datang <br/><span> Di Personal Website Saya</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Home