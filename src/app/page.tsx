import Image from "next/image";

export default function Home() {
  return (
    
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
  );
}
