import Header from "../components/Header";
import PartnerShowcase from "../components/PartnerShowcase";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <div className="min-h-screen w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start box-border leading-normal tracking-normal">
      <Header />
      <section className="flex-grow self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-0 shrink-0 max-w-full">
        <PartnerShowcase />
        <Footer />
      </section>
    </div>
  );
};

export default IndexPage;
