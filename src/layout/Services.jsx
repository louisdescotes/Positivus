import React from "react";
import ServicesCard from "../components/ServicesCard";
import TitleSection from "./TitleSection";

export default function Services() {
  return (
    <section>
      <div>
        <TitleSection 
        title="Services"
        p="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        
        />
      </div>
      <aside>
        <ServicesCard
          bg="white"
          img="card1.png"
          title="Search engine"
          title2="optimization"
        />

        <ServicesCard
          bg="lime"
          img="card2.png"
          title="Pay-per-click"
          title2="advertising"
        />

        <ServicesCard
          bg="black"
          img="card3.png"
          title="Social Media"
          title2="Marketing"
        />

        <ServicesCard
          bg="white"
          img="card4.png"
          title="Email"
          title2="Marketing"
        />

        <ServicesCard
          bg="lime"
          img="card5.png"
          title="Content"
          title2="Creation"
        />

        <ServicesCard
          bg="white"
          img="card6.png"
          title="Analytics and "
          title2="Tracking"
        />
      </aside>
    </section>
  );
}
