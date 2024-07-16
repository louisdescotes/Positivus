import React from 'react'
import TitleSection from './TitleSection'

export default function ContactUs() {
  return (
    <section className="mb-140">
      <TitleSection 
      title= "Contact Us"
      p= "Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <aside className="relative flex bg-[#F3F3F3] rounded-45 px-30 py-10 lg:py-60 lg:px-100 w-full h-full">
        <div className="lg:flex-1 lg:mr-48 w-full">
            <form action="" id="form" className="flex flex-col gap-10">
                <div className="flex text-pmob lg:text-p gap-9">
                    <div className="flex items-center gap-3">
                      <input className="appearance-none " type="radio" name="form" id="hi" checked/>
                      <label htmlFor="hi">Say Hi</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input className="appearance-none" type="radio" name="form" id="quote" />
                      <label htmlFor="quote">Get a Quote</label>
                    </div>
                </div>
                <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-[5px]">
                    <label>Name</label>
                    <input className="px-30 py-18 border border-black rounded-14" type="text" placeholder="Name"/>
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label>Email*</label>
                    <input className="px-30 py-18 border border-black rounded-14" type="text" placeholder="Email"/>
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label>Message*</label>
                    <textarea className=" px-30 py-18 border border-black rounded-14 h-48" type="text" placeholder="Message"/>
                </div>
                </div>
                

              <button className="hidden lg:flex bg-dark rounded-14 justify-center items-center px-5 py-35 text-white w-full" type="submit">Send Message</button>
            </form>
        </div>
        
        <div className="hidden lg:block relative w-1/3 h-full">
            <img className=" absolute -right-24" src="/Illustration3.png" alt="" />
        </div>
      </aside>
      <button className="flex mt-30 lg:hidden bg-dark rounded-14 justify-center items-center py-5 px-35 lg:px-5 lg:py-35 text-white w-full" type="submit">Send Message</button>

    </section>
  )
}
