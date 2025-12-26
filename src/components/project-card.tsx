import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <CardTitle className="font-headline mb-2 text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center gap-4">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
            <span className="text-sm">Source</span>
          </Link>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">Live</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
