import Footer from '../components/footer/Footer';
import MainContent from '../components/maincontent/MainContent';
import SideBar from '../components/sidebar/SideBar';
import './index.css'

export default function Home() {
  return (
    <div>
      <main>
          <SideBar />
          <MainContent/>
          <Footer/>
      </main>
    </div>
  );
}
