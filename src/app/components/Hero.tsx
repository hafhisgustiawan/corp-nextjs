import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex items-center justify-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
