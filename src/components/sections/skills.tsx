"use client";

import { SKILLS_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IconProps } from "@/lib/data";

const SkillIcon = ({ icon: Icon }: { icon?: React.FC<IconProps> }) => {
  if (!Icon) return null;
  return <Icon className="mr-2 h-4 w-4" />;
};

export function Skills() {
  const { title, description, skillCategories } = SKILLS_DATA;

  return (
    <section id="skills" className="bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="flex items-center px-3 py-1 text-sm font-normal"
                  >
                    <SkillIcon icon={skill.icon} />
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
