import MainBody from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" min-h-screen w-full text-center">
      <Header />
      <main>
        <MainBody />
      </main>
      <Footer />
    </div>
  );
}
