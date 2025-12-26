import Image from "next/image";
import Link from "next/link";
import { Github, AppStore, PlayStore } from "@/components/icons";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  image: ImagePlaceholder;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export function ProjectCard({ title, image, githubUrl, appStoreUrl, playStoreUrl }: ProjectCardProps) {
  return (
    <Card className="group relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        data-ai-hint={image.imageHint}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-3 text-foreground transition-transform hover:scale-110">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        )}
        {appStoreUrl && (
          <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-3 text-foreground transition-transform hover:scale-110">
            <AppStore className="h-6 w-6" />
            <span className="sr-only">App Store</span>
          </Link>
        )}
        {playStoreUrl && (
          <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-3 text-foreground transition-transform hover:scale-110">
            <PlayStore className="h-6 w-6" />
            <span className="sr-only">Play Store</span>
          </Link>
        )}
      </div>
    </Card>
  );
}
