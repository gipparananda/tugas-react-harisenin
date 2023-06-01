import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-slate-200 w-full p-4 fixed font-roboto">
        <div className="flex items-center justify-center gap-10">
            <Link className="font-semibold hover:text-slate-500" to="/">
                Home
            </Link>
            <Link className="font-semibold hover:text-slate-500" to="/portfolio">
                Portfolio
            </Link>
            <Link className="font-semibold hover:text-slate-500" to="/kontak">
                Kontak
            </Link>
        </div>
    </div>
  )
}

export default Navbar