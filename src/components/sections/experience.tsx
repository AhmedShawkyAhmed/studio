import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { title, description, experiences } = EXPERIENCE_DATA;

  return (
    <section id="experience" className="bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 -ml-px mt-4 h-full w-0.5 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground z-10 ring-8 ring-background">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className={`mt-4 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-primary/10 hover:shadow-lg transition-shadow">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="font-headline text-xl font-semibold mt-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
