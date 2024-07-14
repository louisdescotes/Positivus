import React from 'react'
import TitleSection from './TitleSection'
import Message from '../components/Message'

export default function Testimonials() {
  return (
    <section>
        <TitleSection 
        title= "Testimonials"
        p= "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <aside>
            <Message />
        </aside>
    </section>
  )
}
