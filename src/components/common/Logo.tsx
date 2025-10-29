import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <div className="flex items-center gap-2" aria-label="WHITEWHALE SOFTWARE SOLUTIONS">
      <Image src="/logo.png" alt="WHITEWHALE SOFTWARE SOLUTIONS Logo" width={32} height={32} />
      <span className={cn(
        "font-headline text-xl font-bold",
        isScrolled ? "text-foreground" : "text-primary-foreground"
      )}>
        WhiteWhale
      </span>
    </div>
  );
}
