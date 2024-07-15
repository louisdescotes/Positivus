import CaseStudie from "./layout/CaseStudie"
import CalltoContact from "./layout/CalltoContact"
import ContactUs from "./layout/ContactUs"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Landing from "./layout/Landing"
import Services from "./layout/Services"
import Sponsors from "./layout/Sponsors"
import Teams from "./layout/Teams"
import Testimonials from "./layout/Testimonials"
import WorkingProcess from "./layout/WorkingProcess"

function App() {
  return (
    <div className="space-grotesk">
    <Header />
    <Landing />
    <Sponsors />
    <Services />
    <CalltoContact />
    <CaseStudie />
    <WorkingProcess />
    <Teams />
    <Testimonials />
    <ContactUs />
    <Footer />
    </div>
  )
}

export default App
