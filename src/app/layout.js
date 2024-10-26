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

const Header = dynamic(() => import('../components/Header'), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PQCBLTFK');
            `
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Mr Engg Works Homepage",
              "description": "At M.R. Engg. Works Pvt. Ltd., we pride ourselves on delivering expert healthcare engineering solutions in Delhi.",
              "publisher": {
                "@type": "Organization",
                "name": "Mr Engg Works"
              },
              "image": "https://www.mrenggworks.com/image/Logo.webp",
              "url": "https://www.mrenggworks.com/"
            })
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Mr Engg Works",
              "url": "https://www.mrenggworks.com/",
              "logo": "https://www.mrenggworks.com/image/Logo.webp",
              "sameAs": [
                "https://www.facebook.com/people/MR-ENGG-Works-Pvt-Ltd/61564068751410/?mibextid=LQQJ4d",
                "https://www.instagram.com/mr_engg_works_pvt_ltd/"
              ]
            })
          }}
        ></script>
        {/* Meta Title */}
        <title>Expert Installation of Medical Gas Pipelines in Delhi | M.R. Engg. Works</title>

        {/* Meta Description */}
        <meta name="description" content="M.R Engg. Works Pvt. Ltd, your partner for expert healthcare engineering in Delhi. We provide tailored installation and thorough maintenance services." />

        {/* Meta Keywords */}
        <meta name="keywords" content="Medical Gas Pipeline, Fully automatic control Panel, Manifold, Medical Gas Alarm, Valve Box, Medical gas outlet, Ward vacuum unit, Bpc flowmeters, medical pendant, 0.T. Control Panel" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Schema.org JSON-LD */}



      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQCBLTFK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ScrollToTop />
        <Upper />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}