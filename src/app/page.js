import MainBody from "./components/main";
import Header from "./components/header";

export default function Home() {
  return (
    <div className=" min-h-screen w-full text-center">
      <Header />
      <main>
        <MainBody />
      </main>
    </div>
  );
}
