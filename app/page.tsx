
import Navbar from "@/Components/Navbar";
import Video from "@/Components/Video";
import Scroller from "@/Components/Scroller";
import Banner from "@/Components/Banner";
import YtLink from "@/Components/YtLink";
import Banner2 from "@/Components/Banner2";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import YtLinkPhone from "@/Components/YtLinkPhone";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Video/>
    <Scroller/>
    <Banner/>
    <div className=" lg:block hidden">
    <YtLink/>
    </div>
    <div className=" lg:hidden block">
    <YtLinkPhone/>
    </div>
    <Banner2/>
    <Faq/>
    <Footer/>
    </>
  );
}
