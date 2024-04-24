import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import Scroller from "@/components/Scroller";
import Banner from "@/components/Banner";
import YtLink from "@/components/YtLink";
import Banner2 from "@/components/Banner2";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import YtLinkPhone from "@/components/YtLinkPhone";
export default function Home() {
  return (
    <>
      <Navbar />
      <Video />
      <Scroller />
      <Banner />
      <div className=" lg:block hidden">
        <YtLink />
      </div>
      <div className=" lg:hidden block">
        <YtLinkPhone />
      </div>
      <Banner2 />
      <Faq />
      <Footer />
    </>
  );
}
