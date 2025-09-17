import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TransitMap from "@/components/TransitMap";
import LiveSchedule from "@/components/LiveSchedule";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TransitMap />
        <LiveSchedule />
      </main>
      <Footer />
    </div>
  );
};

export default Index;