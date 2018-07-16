
import React,{Component} from 'react';

import ListaPlan from './listaPlan';
class ListaContent extends Component{

    

    render()
    {
        let nro=0;
        const planlist = this.props.plan.plan1.map(plan=>{
            nro++;
            return <ListaPlan 
            key={nro}
            nro={nro} 
            nombre={plan.espacio} 
            regimen={plan.regimen} 
            semana={plan.cargasemanal} 
            total={plan.cargatotal} 
            docente={plan.docente} />
        });

        return(
            <div className="container">
		<div className="row">
			<div className="col-md-12">
				<h1>{this.props.titulo}</h1>
				<table className="table">
				  <thead >
				    <tr>
				    <th scope="col">Ord</th>
				      <th scope="col">Espacio curricular</th>
				      <th scope="col">Régimen</th>
				      <th scope="col">Carga horaria semanal</th>
				      <th scope="col">Carga horaria total por comisión</th>
				      <th scope="col">Docente a cargo</th>
				    </tr>
				  </thead>
				  <tbody>
            {planlist}
            </tbody>
			</table>


			</div>
		</div>
		</div>
        );
    }



}




export default ListaContent;