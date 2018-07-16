import React, {Component} from "react";
import mainImg from '../images/uno.jpg';
import otraImg from '../images/dos.jpeg';
import radio from '../images/radio.png';
class Main extends Component {

    render ()
    {
        return (
            <div className="content">
		<div className="news-posts">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="news-sec margin_bottom90">
							<img alt="" src={mainImg} className="img-responsive radius shadow"></img>
							<div className="detail">
								<span>Junio 26, 2018 / Por Rockal</span>
								<h3>Titulo de noticia</h3>
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,
								making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.</p>
                                <a className="read-more" href="right-sidebar.html">Leer más</a>
							</div>
						</div>
						
							
						<div className="news-sec margin_bottom90">
							<img alt="" src={otraImg} className="img-responsive radius shadow"></img>
							<div className="detail">
								<span> Marzo 10, 2018 / By Rockal</span>
								<h3>Otro titulo de noticia</h3>
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
								making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.</p>
                                <a className="read-more" href="right-sidebar.html">Leer Más</a>
							</div>
						</div>
						
					</div>

					<div className="col-md-4">
						<h6 className="bar-title">Actividades Recientes</h6>
						<div className="blog-wiget recent-posts">
							<div className="post-sec clearfix">
								<a href="blog-detail.html"><img alt="" src="images/blog/side-bar/recent-post1.jpg"></img></a>
                                <a className="title" href="blog-detail.html">Informacion sobre LGBT</a>
                                <span className="date">11 Minutes ago</span>
							</div>
							<div className="post-sec clearfix">
								<a href="blog-detail.html"><img alt="" src="images/blog/side-bar/recent-post2.jpg"></img></a>
                                <a className="title" href="blog-detail.html">Mejores alumnos</a>
                                <span className="date">2 Days ago</span>
							</div>
							<div className="post-sec clearfix">
								<a href="blog-detail.html"><img alt="" src="images/blog/side-bar/recent-post3.jpg"></img></a>
                                <a className="title" href="blog-detail.html">Precios del quiosco</a>
                                <span className="date">3 months ago</span>
							</div>
						</div>
						<div className="clear"></div>
						<div className="categories">
							<h6 className="bar-title">Radio</h6>
							<div className="blog-wiget clearfix">
								<img alt="radio" src={radio} className="img-responsive radius shadow" />
							</div>
						</div>
						<div className="clear"></div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
        )
    }
}

export default Main;