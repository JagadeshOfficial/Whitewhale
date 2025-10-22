import { Briefcase } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Investor Insights Hub">
      <Briefcase className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        Investor Insights Hub
      </span>
    </div>
  );
}
