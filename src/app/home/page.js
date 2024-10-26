
import Hero from "@/components/Hero";
import PlantRoom from "@/components/PlantRoom";
import Service from "@/components/Service";
import WhyMregg from "@/components/WhyMregg";
import Articles from "@/components/Articles";
import Carosuel from "@/components/Carosuel";



export default function Home() {
  return (
    <div>
      <Carosuel/>
       <Hero/>
      <PlantRoom />
      <Service />
      <WhyMregg />
    </div>
  );
}