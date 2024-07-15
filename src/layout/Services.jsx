import React from "react";
import ServicesCard from "../components/ServicesCard";
import TitleSection from "./TitleSection";

export default function Services() {
  return (
    <section className="mt-140">
      <div>
        <TitleSection 
        title="Services"
        p="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        
        />
      </div>
      <aside className="grid grid-cols-12 grid-rows-1 gap-10 mb-10">
        <ServicesCard
          bg="grey"
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
          bg="dark"
          img="card3.png"
          title="Social Media"
          title2="Marketing"
        />

        <ServicesCard
          bg="grey"
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
          bg="dark"
          compo="true"
          img="card6.png"
          title="Analytics and "
          title2="Tracking"
        />
      </aside>
    </section>
  );
}
