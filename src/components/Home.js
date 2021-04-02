import React from "react"
// import image from "../sky-background.jpg"
import image from "../computer-coding.jpeg"

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Sky Background" 
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        {/* dark:text isn't working */}
        <h1 className="text-6xl text-white dark:text-white font-bold leading-none lg:leading-snug home-name">
          Hi, I'm Matthew McFadden!
        </h1>
      </section>
    </main>
  )
}