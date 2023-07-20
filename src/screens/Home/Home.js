import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";
import Intro from "../../components/Intro/Intro";
import MisionVision from "../../components/MisionVision/MisionVision";
import Benefits from "../../components/Benefits/Benefits";
import NextMessage from "../../components/NextMessage/NextMessage";
import Missions from "../../components/Missions/Missions";
import BlogSection from "../../components/BlogSection/BlogSection";

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <NavBar title="Contactenos" />
      </header>
      <main className={styles.main}>
        <Hero />
        <Intro />
        <MisionVision />
        <Benefits />
        <NextMessage />
        <Missions />
        <BlogSection />
      </main>
      <footer className={styles.footer}>
        <Footer title="Suscribirse" />
      </footer>
    </div>
  );
}

export default Home;
