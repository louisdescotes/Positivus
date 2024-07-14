import React from 'react'
import TitleSection from './TitleSection'

export default function ContactUs() {
  return (
    <section>
      <TitleSection 
      title= "Contact Us"
      p= "Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <aside>
        <div>
            <form action="">
                <div>
                    <input type="radio" name="" id="" />
                    <input type="radio" name="" id="" />
                </div>
                <div>
                    <label></label>
                    <input type="text" />
                </div>

                <div>
                    <label></label>
                    <input type="text" />
                </div>

                <div>
                    <label></label>
                    <input type="text" />
                </div>

                <input type="submit" value="Send message" />
            </form>
        </div>
        <div>
            <img src="/Illustration3.png" alt="" />
        </div>
      </aside>
    </section>
  )
}
