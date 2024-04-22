import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className='text-5xl'>Demo</h1>
      
      {/* ↓ Optimisation d'image par NextJS */}
      <Image
        src="/digitalcity.png"
        alt="Digital City"
        width={758}
        height={649}
      />
    </>
  );
}
