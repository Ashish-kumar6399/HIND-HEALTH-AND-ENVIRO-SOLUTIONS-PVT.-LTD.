// import Footer from "@/components/Footer";
// import Upper from "@/components/Upper";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "./globals.css";
// import ScrollToTop from "@/components/ScrollToTop";
// import dynamic from "next/dynamic";

// const   Header = dynamic(()=>import('../components/Header'),{ssr:false})
// // export const metadata = {
// //   title: "MREnggWorks | Medical Gas Pipeline Specialists",
// //   description: "MREnggWorks - Medical Gas Pipeline Specialists",
// // };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//        <head>
//         {/* <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} /> */}
//         <link rel="icon" href="/logo.png" type="image/png" />
//       </head>
//       <body>
//         <ScrollToTop/>
//         <Upper/>
//        <Header/>
//         <main>{children}</main>
//         <Footer/>
//       </body>
//     </html>
//   )
// }


import Footer from "@/components/Footer";
import Upper from "@/components/Upper";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";
import Chat_Icons from "@/components/Chat_Icons";

const Header = dynamic(() => import('../components/Header'), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

                {/* Schema.org JSON-LD */}

                <link rel="shortcut icon" href="/favicon.ico" />


      </head>
      <body>
        

        <ScrollToTop />
        <Upper />
        <Header />
        <main>{children}
          <Chat_Icons/>
        </main>
        <Footer />

        
        
      </body>
    </html>
  );
}