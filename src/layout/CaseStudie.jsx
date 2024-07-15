import React from "react";
import TitleSection from "./TitleSection";
import Case from "../components/Case";

export default function CaseStudie() {
  return (
    <section className="mb-140"> 
      <TitleSection
        title="Case Studies"
        p="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <aside className="bg-dark px-60 py-70 flex items-center rounded-45">
       <Case 
       message= "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
       />
       <div className="bg-white w-1 h-48 mx-16"></div>
        <Case 
       message= "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
       />
       <div className="bg-white w-1 h-48 mx-16"></div>
        <Case 
       message= "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
       />
      </aside>
    </section>
  );
}
