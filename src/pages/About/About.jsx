import FooterOne from "../../components/FooterOne/FooterOne";
import FooterTwo from "../../components/FooterTwo/FooterTwo";
import Navbar from "../../components/Navbar/Navbar";

export default function About() {
    return (
        <>
            <Navbar/>
            <section >
                <div className="about d-flex justify-content-center align-items-center flex-column text-center">
                    <div className="container">
                        <h1 className="pb-3 mb-0">ABOUT COMPONENT</h1>
                        <div className="starr">
                            <div className="line"></div>
                            <i className="fa-solid fa-star z-10 font-bold"></i>
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 ">
                                <div className="par">
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="par">
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne/>
            <FooterTwo/>
        </>
    )
}
