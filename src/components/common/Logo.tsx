
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="WHITEWHALE SOFTWARE SOLUTIONS">
      <Image src="/logo.png" alt="WHITEWHALE SOFTWARE SOLUTIONS Logo" width={32} height={32} />
      <span className="font-headline text-xl font-bold text-current">
        WhiteWhale
      </span>
    </div>
  );
}
