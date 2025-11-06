import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="WHITEWHALE SOFTWARE SOLUTIONS">
      <Image
        src="/Logo.png"
        alt="WHITEWHALE SOFTWARE SOLUTIONS Logo"
        width={64}
        height={64}
        className="h-14 w-auto"
        priority
      />
      <span className="font-headline text-2xl font-bold">
        WhiteWhale Software Solutions
      </span>
    </div>
  );
}
