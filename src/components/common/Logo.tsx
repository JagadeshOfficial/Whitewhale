import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Innovate Solutions">
      <Image src="/logo.png" alt="Innovate Solutions Logo" width={32} height={32} />
      <span className="font-headline text-xl font-bold text-foreground">
        Innovate
      </span>
    </div>
  );
}
