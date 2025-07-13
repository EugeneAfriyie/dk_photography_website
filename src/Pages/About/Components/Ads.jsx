import React from 'react'

const Ads = () => {
  return (
    <section className="bg-black text-white py-24 text-center">
  <div className="max-w-4xl mx-auto px-4">
    <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
      CAPTURE YOUR MOMENTS WITH STYLE & SOUL
    </h1>
    <p className="text-gray-400 text-base sm:text-lg mb-8">
      Welcome to DKSHOTIT STUDIO & PHOTOGRAPHY — Where every shot tells your story.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition duration-300">
        Book a Session
      </button>
      <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full transition duration-300">
        View Portfolio
      </button>
    </div>
  </div>
</section>

  )
}

export default Ads