"use client"

import AnimatedNumbers from "react-animated-numbers"
import React from 'react'

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+"
  },
  {
    metric: "Users",
    value: "10000",
    postfix: "~"
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "4"
  }
]

const Achievement = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 ">
      <div className="border-[#33353F] border rounded-md py-8 px-12 flex flex-row items-center justify-between">
        {
          achievementsList.map((achievement, index) => {
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center mx-4"
              >
                <h2 className="text-white lg:text-4xl font-bold flex flex-row">
                  {achievement.postfix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                  />
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Achievement