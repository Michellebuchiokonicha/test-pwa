import Image from "next/image";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Offerings from "./components/Offerings";
import Diamonds from "./components/Diamonds";
import Network from "./components/Network";
import About from "./components/About";
import Books from "./components/Books";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Resources />
      <Offerings />
      <Diamonds />
      <Network />
      <About />
      <Books />
      <Footer />
    </main>
  );
}
