import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="White Whale Software Solutions">
      <Image src="/logo.png" alt="White Whale Software Solutions Logo" width={40} height={40} />
      <span className="font-headline text-xl font-bold text-foreground">
        White Whale Software Solutions
      </span>
    </div>
  );
}
