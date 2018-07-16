import React, {Component} from "react";
class Banners extends Component {

    render ()
    {
        return (
            <div className="tp-banner-container">
            <div className="tp-banner">
                <ul>
                    <li data-masterspeed="500" data-saveperformance="on" data-slotamount="7" data-title="Intro Slide" data-transition="fade">

                        <img alt="" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat" src="images/slides/banner-img1.jpg"></img>

                        <div className="tp-caption title-bold tp-resizeme rs-parallaxlevel-0 fade start z-index5 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="500" data-x="50" data-y="200">Escuela de Suboficiales de la Policía</div>

                        <div className="tp-caption small-title tp-resizeme rs-parallaxlevel-0 fade start z-index5 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="800" data-x="50" data-y="255">GENERAL ÁNGEL VICENTE PEÑALOZA</div>

                        <div className="tp-caption paragraph tp-resizeme rs-parallaxlevel-0 fade start z-index9 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.05" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="1100" data-x="50" data-y="325">
                            <div className="text-left">
    En homenaje permanente a su ideología Federal</div>
                        </div>
                        <div className="tp-caption banner-button tp-resizeme rs-parallaxlevel-0 fade start z-index9 slider-titile" data-easing="Power3.easeInOut" data-elementdelay="0.05" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="1400" data-x="50" data-y="402"><a className="read-more" href="services2.html">Leer Más</a></div>
                    </li>

                    <li data-masterspeed="500" data-saveperformance="on" data-slotamount="7" data-title="Intro Slide" data-transition="fade">
                        <img alt="" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat" src="images/slides/banner-img2.jpg"></img>
                        <div className="tp-caption title-bold tp-resizeme rs-parallaxlevel-0 fade start z-index5 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="1700" data-x="30" data-y="200">FUNDAMENTACION DE LA CARRERA</div>

                        <div className="tp-caption small-title tp-resizeme rs-parallaxlevel-0 fade start z-index5 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="2000" data-x="30" data-y="255">Los modelos de seguridad deben ser dinámicos</div>

                        <div className="tp-caption paragraph tp-resizeme rs-parallaxlevel-0 fade start z-index9 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.05" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="2200" data-x="30" data-y="325">
                            <div className="text-left">Ya que es dinámico la configuración de las modalidades delictuales </div>
                        </div>

                        <div className="tp-caption banner-button tp-resizeme rs-parallaxlevel-0 fade start z-index9 slider-title" data-easing="Power3.easeInOut" data-elementdelay="0.05" data-endelementdelay="0.1" data-endspeed="300" data-speed="1000" data-splitin="none" data-splitout="none" data-start="2500" data-x="30" data-y="402"> <a className="read-more" href="patient-and-family.html"> Leer Más</a>
                        </div>
                    </li>

                    
                </ul>
                <div className="tp-bannertimer"></div>
            </div>
        </div>
        )
    }
}

export default Banners;