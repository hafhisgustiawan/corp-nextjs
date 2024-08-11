import Hero from "@/app/components/Hero";
import performanceImg from "public/performance.jpg";

const page = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="Welding"
      title="We Serve High Performance Applications"
    />
  );
};

export default page;
