import React from 'react'
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon"
import EyeIcon from "@heroicons/react/24/outline/EyeIcon"
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div 
        className="h-52 md:h-72 mr-5 rounded-t-xl relative bg-auto bg-no-repeat bg-center"
        style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className="overlay flex top-0 left-0 w-full h-full justify-center items-center bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 mr-2 flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7ABE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard