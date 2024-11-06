
import Hero from "@/components/Hero";
import Mobiletrolley from "@/components/Mobiletrolley";
import Service from "@/components/Service";
import WhyMregg from "@/components/WhyMregg";
import Carosuel from "@/components/Carosuel";
import Testimonial from "@/components/Testimonial";



// export default function Home() {
//   return (
//     <div>
     
//     </div>
//   );
// }


function page() {
  return (
    <div>
       <Carosuel/>
       <Hero/>
       <Mobiletrolley/>
      <Service />
      <WhyMregg />
      <Testimonial/>
      
    </div>
  )
}

export default page
