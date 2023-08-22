import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
            <Promo></Promo>
            <main>
                <AboutProject></AboutProject>
                <Techs></Techs>
                <Portfolio></Portfolio>
                <Footer></Footer>
            </main>
        </>
        
    )
}

export default Main;