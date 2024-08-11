import Hero from "@/app/components/Hero";
import scaleImg from "public/scale.jpg";

const page = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale Your App to Infinity"
    />
  );
};

export default page;
