import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import Avatar from "../components/Avatar"

import headerlogo from '../img/header-logo.png';

function StandardNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300  text-white relative z-50">
      <div className="h-8">
        <img
          src={headerlogo}
          className="h-full"
          alt="logo"
        />
      </div>
      <div className="flex-1 ml-10 items-center hidden lg:flex">
        <a
          href="/"
          className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
        >
          Home
        </a>
      </div>
      <div className="items-center hidden lg:flex">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="ml-6 text-2xl cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer"
        />
        <Avatar
          image="https://picsum.photos/id/237/200/200.jpg"
          status="online"
          className="ml-6 cursor-pointer" alt="avatar"
        />
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-white text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className=" absolute top-full left-0 flex flex-col w-full lg:hidden px-6">
          <div className="flex-1 flex flex-col items-center text-xl bg-emerald-800">
            <a
              href="/"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Home
            </a>
            <div className="my-2 flex justify-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-2xl mx-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl mx-2 cursor-pointer"
              />
            </div>
            <Avatar
              image="https://picsum.photos/id/237/200/200.jpg"
              status="online"
              className="cursor-pointer my-2" img="status"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default StandardNavMenu