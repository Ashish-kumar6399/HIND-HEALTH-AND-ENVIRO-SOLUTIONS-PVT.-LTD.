
import Hero from "@/components/Hero";
import Mobiletrolley from "@/components/Mobiletrolley";
import Service from "@/components/Service";
import WhyMregg from "@/components/WhyMregg";
import Articles from "@/components/Articles";
import Carosuel from "@/components/Carosuel";



export default function Home() {
  return (
    <div>
      <Carosuel/>
       <Hero/>
       <Mobiletrolley/>
      <Service />
      <WhyMregg />
    </div>
  );
}