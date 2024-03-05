"use client"

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import githubicon from "../../../public/github.png"
import linkedinicon from "../../../public/linkedin.png"
import { useState } from 'react'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = "/api/send"

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true)
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(var(--tw-gradient-stops))] from-primary-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-y-3/4 -translate-x-1/2"></div>
      <div className="z-5">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] text-base mb-6 max-w-md font-semibold">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-5">
          <Link href="github.com" >
            <Image src={githubicon} alt="github icon" width={50} height={50} />
          </Link>
          <Link href="linkedin.com">
            <Image src={linkedinicon} alt="linkedin icon" width={50} height={50} />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" type="email" className="text-white block text-sm font-medium">
            Your email
          </label>
          <input 
            name="name"
            type="email" 
            id="email" 
            required 
            placeholder="jacob@google.com" 
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          
          <label htmlFor="subject" className="text-white block text-sm font-medium">
            Subject
          </label>
          <input 
            name="subject"
            type="text" 
            id="subject" 
            required 
            placeholder="Just say hi!" 
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />

          <label htmlFor="message" className="text-white block text-sm font-medium ">
            Message
          </label>
          <textarea 
            name="message" 
            id="message" 
            placeholder="Let's talk about..."
            className="bg-[#18191E] w-full border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5" 
          />

          <button 
            type="submit"
            className="bg-primary-500 hover:text-primary-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {
            //emial提交成功，显示成功提示
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>

  )
}

export default EmailSection