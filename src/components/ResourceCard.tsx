import { motion } from "framer-motion";
import { Phone, ExternalLink, MapPin, Sparkles } from "lucide-react";
import type { Resource, Category } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
  category: Category;
  index: number;
}

const ResourceCard = ({ resource, category, index }: ResourceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {resource.highlight && (
        <div className="absolute -top-2 -right-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </div>
      )}

      <div className="mb-3 flex items-start gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg ${category.bgClass}/15`}>
          {category.emoji}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-sm font-semibold leading-tight text-foreground">
            {resource.name}
          </h3>
          <span className={`mt-0.5 inline-block text-xs font-medium ${category.colorClass}`}>
            {category.label}
          </span>
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>

      <div className="flex flex-col gap-1.5 text-xs">
        {resource.phone && (
          <a
            href={`tel:${resource.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="h-3 w-3" />
            {resource.phone}
          </a>
        )}
        {resource.address && (
          <span className="inline-flex items-center gap-1.5 text-foreground/60">
            <MapPin className="h-3 w-3" />
            {resource.address}
          </span>
        )}
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80"
          >
            <ExternalLink className="h-3 w-3" />
            Visit Website
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ResourceCard;
