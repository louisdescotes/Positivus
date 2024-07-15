import React from "react";
import TitleSection from "./layout/TitleSection";
import LearnMore from "./components/LearnMore";
import Case from "./components/Case";

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
        <hr className="bg-white rotate-90 h-min w-2/6 my-4" />
        <Case 
       message= "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
       />
        <hr className="bg-white rotate-90 h-min w-2/6 my-4" />
        <Case 
       message= "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
       />
      </aside>
    </section>
  );
}
