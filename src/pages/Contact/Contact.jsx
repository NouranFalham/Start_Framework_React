import FooterOne from "../../components/FooterOne/FooterOne";
import FooterTwo from "../../components/FooterTwo/FooterTwo";
import Navbar from "../../components/Navbar/Navbar";

export default function Contact() {
    return (
        <>
        <Navbar/>
            <section>
                <div className="contact">
                    <div className="container">
                        <div className="contact-title text-center">
                            <h1 className="py-3">CONTACT SECTION</h1>
                            <div className="starrr">
                                <div className="linee"></div>
                                <i className="fa-solid fa-star z-10 font-bold"></i>
                                <div className="linee"></div>
                            </div>
                        </div>
                        <div className="form mt-5 ">
                            <div className="form-floating mb-3 w-75 m-auto">
                                <input
                                    type="text"
                                    className="form-control bg-transparent border-0"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">User Name</label>
                            </div>
                            <div className="form-floating mb-3 w-75 m-auto">
                                <input
                                    type="number"
                                    className="form-control bg-transparent border-0"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">User Age</label>
                            </div>
                            <div className="form-floating mb-3 w-75 m-auto">
                                <input
                                    type="email"
                                    className="form-control bg-transparent border-0"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">User Email</label>
                            </div>
                            <div className="form-floating mb-3 w-75 m-auto">
                                <input
                                    type="password"
                                    className="form-control bg-transparent border-0"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            <div className="butt text-center mb-5">
                                <button className="btn-danger">Send Message</button>
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
