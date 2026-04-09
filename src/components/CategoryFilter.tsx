import { motion } from "framer-motion";
import type { Category, CategoryId } from "@/data/resources";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: CategoryId | "all";
  onSelect: (id: CategoryId | "all") => void;
  counts: Record<string, number>;
}

const CategoryFilter = ({ categories, activeCategory, onSelect, counts }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onSelect("all")}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          activeCategory === "all"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        {activeCategory === "all" && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 rounded-full gradient-hero"
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">All ({Object.values(counts).reduce((a, b) => a + b, 0)})</span>
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeCategory === cat.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {activeCategory === cat.id && (
            <motion.div
              layoutId="activeCategory"
              className={`absolute inset-0 rounded-full ${cat.bgClass}`}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">
            {cat.emoji} {cat.label} ({counts[cat.id] || 0})
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
