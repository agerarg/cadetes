import React, {Component} from 'react';
import Materia from './Horarios/horarioBlock';
import MatData from '../data/horarios';
class Horarios extends Component {



    render(){



        return (

            <div className="container">
		<div className="row">
			<div className="col-md-12">
				<h1>Horario Semana A</h1>
				<table className="table">
				  <thead >
				    <tr>
				    <th scope="col">Ord</th>
				      <th scope="col">LUNES</th>
				      <th scope="col">MARTES</th>
				      <th scope="col">MÍERCOLES</th>
				      <th scope="col">JUEVES</th>
				      <th scope="col">VIERNES</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
                      <Materia mdata={MatData.TM[0]} />
				      <td>
				      	<div className="btn btn-default">08:00 a 09:00</div>
				      	<div><h4><strong>Educación física</strong></h4></div>
				      	<div>Alanís Marcelo<br/>Quinteros Ariel</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">08:00 a 10:00</div>
				      	<div><h4><strong>Manejo de armas de fuego y equipamiento</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">08:00 a 10:00</div>
				      	<div><h4><strong>Abordaje y resulucíon de alternativas de conflicto</strong></h4></div>
				      	<div></div>
				       </td>
				        <td>
				        	<div className="btn btn-default">08:00 a 09:00</div>
					      	<div><h4><strong>Educación física</strong></h4></div>
					      	<div>Alanís Marcelo</div>
				        </td>
				    </tr>

				     <tr>
				      <th scope="row">2</th>
				      <td>
				      	<div className="btn btn-default">09:10 a 11:10</div>
				      	<div><h4><strong>Defensa personal</strong></h4></div>
				      	<div>Ceballos Alejandro<br />Gibaut Karina Lucia</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">09:10 a 11:10</div>
				      	<div><h4><strong>Educación física</strong></h4></div>
				      	<div>Alanís Marcelo<br />Quinteros Ariel</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">10:10 a 11:10</div>
				      	<div><h4><strong>Conducción vehicular</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">10:10 a 11:10</div>
				      	<div><h4><strong>Educación Fisica</strong></h4></div>
				      	<div>Alanís Marcelo</div>
				       </td>
				        <td>
				        	<div className="btn btn-default">09:10 a 10:10</div>
					      	<div><h4><strong>Instrucción policial</strong></h4></div>
					      	<div>Luna Iván</div>
				        </td>
				    </tr>
				   
				      <tr>
				      <th scope="row">3</th>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Intrucción policial</strong></h4></div>
				      	<div>Luna Iván</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Natación</strong></h4></div>
				      	<div>Arriba Verónica</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Patrimonio cultural y cultura general</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Patrimonio cultural y cultura general</strong></h4></div>
				      	<div>Pereyra Rodolfo Guillermo</div>
				       </td>
				        <td>
				        	<div className="btn btn-default">11:20 a 12:20</div>
					      	<div><h4><strong>Intrucción policial</strong></h4></div>
					      	<div>Luna Iván</div>
				        </td>
				    </tr>

				  </tbody>
				</table>

				<h1>Horario Semana B</h1>
				<table className="table">
				  <thead >
				    <tr>
				    <th scope="col">Ord</th>
				      <th scope="col">LUNES</th>
				      <th scope="col">MARTES</th>
				      <th scope="col">MÍERCOLES</th>
				      <th scope="col">JUEVES</th>
				      <th scope="col">VIERNES</th>
				    </tr>
				  </thead>
				  <tbody>


				    <tr>
				      <th scope="row">1</th>
				      <td>
				      	<div className="btn btn-default">08:00 a 09:00</div>
				      	<div><h4><strong>Defensa personal</strong></h4></div>
				      	<div>Ceballos Alejandro<br />Gibaut Karina Lucia</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">08:00 a 09:00</div>
				      	<div><h4><strong>Educación física</strong></h4></div>
				      	<div>Alanís Marcelo<br />Quinteros Ariel</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">08:00 a 10:00</div>
				      	<div><h4><strong>Manejo de armas de fuego y equipamiento</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">08:00 a 10:00</div>
				      	<div><h4><strong>Abordaje y resulucíon de alternativas de conflicto</strong></h4></div>
				      	<div></div>
				       </td>
				        <td>
				        	<div className="btn btn-default">08:00 a 09:00</div>
					      	<div><h4><strong>Educación física</strong></h4></div>
					      	<div>Alanís Marcelo</div>
				        </td>
				    </tr>

				     <tr>
				      <th scope="row">2</th>
				      <td>
				      	<div className="btn btn-default">09:10 a 11:10</div>
				      	<div><h4><strong>Defensa personal</strong></h4></div>
				      	<div>Ceballos Alejandro<br />Gibaut Karina Lucia</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">09:10 a 11:10</div>
				      	<div><h4><strong>Educación física</strong></h4></div>
				      	<div>Alanís Marcelo<br />Quinteros Ariel</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">10:10 a 11:10</div>
				      	<div><h4><strong>Conducción vehicular</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">10:10 a 11:10</div>
				      	<div><h4><strong>Ingles</strong></h4></div>
				      	<div>Vera Elizabeth</div>
				       </td>
				        <td>
				        	<div className="btn btn-default">09:10 a 10:10</div>
					      	<div><h4><strong>Instrucción policial</strong></h4></div>
					      	<div>Luna Iván</div>
				        </td>
				    </tr>
				   
				      <tr>
				      <th scope="row">3</th>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Intrucción policial</strong></h4></div>
				      	<div>Luna Iván</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Educación física</strong></h4></div>
				      	<div>Alanís Marcelo<br />Quinteros Ariel</div>
				      </td>
				      <td>
				      	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Patrimonio cultural y cultura general</strong></h4></div>
				      	<div></div>
				      </td>
				       <td>
				       	<div className="btn btn-default">11:20 a 12:20</div>
				      	<div><h4><strong>Intrucción policial</strong></h4></div>
				      	<div>Luna Iván</div>
				       </td>
				        <td>
				        	<div className="btn btn-default">11:20 a 12:20</div>
					      	<div><h4><strong>Intrucción policial</strong></h4></div>
					      	<div>Luna Iván</div>
				        </td>
				    </tr>

				  </tbody>
				</table>
            </div>
        </div>
    </div>
        )


    }



}

export default Horarios;