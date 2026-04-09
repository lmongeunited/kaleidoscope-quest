import { useState, useMemo } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceCard from "@/components/ResourceCard";
import { resources, categories, type CategoryId } from "@/data/resources";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    categories.forEach((cat) => {
      c[cat.id] = resources.filter((r) => r.category === cat.id).length;
    });
    return c;
  }, []);

  const categoryMap = useMemo(() => {
    const m: Record<string, typeof categories[0]> = {};
    categories.forEach((cat) => (m[cat.id] = cat));
    return m;
  }, []);

  const filtered = useMemo(() => {
    let result = resources;
    if (activeCategory !== "all") {
      result = result.filter((r) => r.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.phone?.includes(q) ||
          categoryMap[r.category]?.label.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery, categoryMap]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <LayoutGroup>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
            counts={counts}
          />
        </LayoutGroup>

        <div className="mt-8 sm:mt-10">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No resources found. Try a different search or category.</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <div
                key={activeCategory + searchQuery}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((resource, i) => (
                  <ResourceCard
                    key={resource.name}
                    resource={resource}
                    category={categoryMap[resource.category]}
                    index={i}
                  />
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>

        {/* Crisis banner */}
        <div className="mt-12 rounded-lg border border-destructive/20 bg-destructive/5 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            In crisis? Call or text <span className="text-destructive">988</span> (Suicide & Crisis Lifeline)
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Free, 24/7 support. You are not alone.
          </p>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="inline h-3.5 w-3.5 text-primary" /> by UNITE-LA · Questions?{" "}
            <a href="mailto:programs@unitela.com" className="text-primary hover:underline">
              programs@unitela.com
            </a>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Last updated January 2026. Always verify details with organizations directly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
