import Navbar from "../../components/Navbar/Navbar"
import logo from "../../assets/person.svg"
import FooterOne from "../../components/FooterOne/FooterOne"
import FooterTwo from "../../components/FooterTwo/FooterTwo"
export default function Home() {
    return (
        <>
            <Navbar/>
            <section>
                <div className="home d-flex justify-content-center align-items-center flex-column mt-5">
                    <div className="home-img">
                        <img src={logo} alt="person" />
                    </div>
                    <div className="home-content pb-4 ">
                        <h1 className="py-4">START FRAMEWORK</h1>
                        <div className="starr">
                            <div className="line"></div>
                            <i className="fa-solid fa-star z-10 font-bold"></i>
                            <div className="line"></div>
                        </div>
                        <h6 className="py-3 text-center">Graphic Artist - Web Designer - Illustrator</h6>
                    </div>
                </div>
            </section>
            <FooterOne/>
            <FooterTwo/>
        </>
    )
}
