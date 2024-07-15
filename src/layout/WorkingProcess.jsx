import Process from "../components/Process";
import TitleSection from "./TitleSection";

export default function WorkingProcess() {
  return (
    <section>
      <TitleSection
        title="Our Working Process"
        p="Step-Step Guide to Achieving Your Business Goals"
      />
      <aside className="flex flex-col gap-30">
        <Process
          number="01"
          title="Consultation"
          description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />

        <Process
          number="02"
          title="Research and Strategy Development"
          description="lorem ipsum"
        />

        <Process number="03" title="Implementation" description="lorem ipsum" />

        <Process
          number="04"
          title="Monitoring and Optimization"
          description="lorem ipsum"
        />

        <Process
          number="05"
          title="Reporting and Communication"
          description="lorem ipsum"
        />

        <Process
          number="06"
          title="Continual Improvement"
          description="lorem ipsum"
        />
      </aside>
    </section>
  );
}
