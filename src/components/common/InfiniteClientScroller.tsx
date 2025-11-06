
import Image from 'next/image';

export interface ScrollerItem {
  name: string;
  logo: string;
}

interface InfiniteClientScrollerProps {
  items: ScrollerItem[];
}

export function InfiniteClientScroller({ items }: InfiniteClientScrollerProps) {
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div className="flex w-max animate-scroll-left">
        {[...items, ...items].map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0 w-64 flex justify-center items-center p-4">
            <Image
              src={item.logo}
              alt={`${item.name} Logo`}
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
