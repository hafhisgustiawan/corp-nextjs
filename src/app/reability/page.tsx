import Hero from "@/app/components/Hero";
import reabilityImg from "public/reliability.jpg";

const page = () => {
  return (
    <Hero
      imgData={reabilityImg}
      imgAlt="welding"
      title="Super High Reability Hosting"
    />
  );
};

export default page;
