import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="mb-14 border border-slate-300 flex py-5">
      <div className="w-1/2 flex items-center justify-center px-5">
        <img src={props.content.imageUrl} alt="port1" />
      </div>

      <div className="w-1/2 flex items-center justify-center px-5">
        <div className="h-full w-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl">{props.content.head}</h1>
            <Link to={props.content.link} target="_blank" className="text-[15px] hover:text-blue-700 hover:underline">
              Link Git
            </Link>
            </div>
            <p>
              {props.content.title}
            </p>
            <span className="-mb-5">Teknologi Yang Digunakan :</span>
            <div className="flex gap-5 text-[25px] font-bold">
              {props.content.tech}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
