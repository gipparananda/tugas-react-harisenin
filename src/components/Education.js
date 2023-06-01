import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Education = () => {
  const [ShowList, setShowList] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const toogleList = () => {
    setShowList(!ShowList);
    setButtonVisible(!buttonVisible);
  };

  return (
    <div>
      {buttonVisible && (
        <button onClick={toogleList} className="hover:text-blue-700">
          Lihat Lebih Lanjut...
        </button>
      )}
      {ShowList && (
        <div className="">
          <h1 className="font-semibold text-xl mb-3">Pendidikan Dan Kursus</h1>
          <div className="mb-3">
            <li>Politeknik Negeri Jakarta</li>
            <li>Junior Web Developer(VSGA)</li>
            <li>Bootcamp Harisenin.com(Fullstack Developer)</li>
          </div>
          <h1 className="font-semibold text-xl mb-3">Sosial Media</h1>
          <div className="flex gap-3 text-[24px]">
            <Link to="">
              <SiGmail />
            </Link>
            <Link to="">
              <FaGithub />
            </Link>
            <Link to="">
              <FaLinkedinIn />
            </Link>
            <Link to="">
              <FaInstagram />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
