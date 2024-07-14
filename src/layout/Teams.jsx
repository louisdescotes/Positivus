import React from "react";
import TitleSection from "./TitleSection";
import TeamsCard from "../components/TeamsCard";
import CTA from "../components/CTA";

export default function Teams() {
  return (
    <section>
      <TitleSection
        title="Team"
        p="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <aside>
        <TeamsCard
          img="person1.png"
          nom="John Smith"
          role="CEO and Founder"
          linkedin="exemple.com"
          xp="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />

        <TeamsCard
          img="person2.png"
          nom="Jane Doe"
          role="Director of Operations"
          linkedin="exemple.com"
          xp="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />

        <TeamsCard
          img="person3.png"
          nom="Michael Brown"
          role="Senior SEO Specialist"
          linkedin="exemple.com"
          xp="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />

        <TeamsCard
          img="person4.png"
          nom="Emily Johnson"
          role="PPC Manager"
          linkedin="exemple.com"
          xp="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />

        <TeamsCard
          img="person5.png"
          nom="Brian Williams"
          role="Social Media Specialist"
          linkedin="exemple.com"
          xp="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />

        <TeamsCard
          img="person6.png"
          nom="Sarah Kim"
          role="Content Creator "
          linkedin="exemple.com"
          xp="2+ years of experience in writing and editing
          Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </aside>
      <div>
        <CTA 
        cta = "See all team"
        url = "exemple.com"
        />
      </div>
    </section>
  );
}
