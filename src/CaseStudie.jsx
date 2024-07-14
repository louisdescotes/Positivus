import React from "react";
import TitleSection from "./layout/TitleSection";
import LearnMore from "./components/LearnMore";

export default function CaseStudie() {
  return (
    <section>
      <TitleSection
        title="Case Studies"
        p="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <aside>
        <div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <LearnMore />
        </div>
        <hr />
        <div>
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <LearnMore />
        </div>
        <hr />
        <div>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <LearnMore />
        </div>
      </aside>
    </section>
  );
}
