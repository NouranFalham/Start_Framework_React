import Navbar from "../../components/Navbar/Navbar";
import pic1 from "../../assets/poert1.png"
import pic2 from "../../assets/port2.png"
import pic3 from "../../assets/port3.png"
import FooterOne from "../../components/FooterOne/FooterOne";
import FooterTwo from "../../components/FooterTwo/FooterTwo";
import { useState } from "react";

export default function Portfolio() {
    const pics = [pic1, pic2, pic3, pic1, pic2, pic3];
    const [modalImg , setModalImg] = useState(null)
    const openModal = (src)=>{ setModalImg(src)}
    const closeModal = ()=>{setModalImg(null)}
    return (
        <>
            <Navbar/>
            <section>
                <div className="portfolio">
                    <div className="container mb-4">
                        <div className="contact-title text-center">
                            <h1 className="py-3">PORTFOLIO COMPONENT</h1>
                            <div className="starrr">
                                <div className="linee"></div>
                                <i className="fa-solid fa-star z-10 font-bold"></i>
                                <div className="linee"></div>
                            </div>
                        </div>
                        <div className="row g-5 pt-4">
                            { pics.map((img , i)=>{
                                return <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="port" onClick={()=>{openModal(img)}}>
                                        <img className="w-100" src={img} alt="" />
                                        <div className="port-layer">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne/>
            <FooterTwo/>
            {modalImg ? <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <img src={modalImg} alt="" className="modal-img" />
                            </div>
                        </div>
            :null}
        </>
    )
}
