import React,{ Component } from 'react';
import planes1 from '../data/plan';
import planes2 from '../data/plan2';
import ListaContent from './ListaPlan/listaContent';

class PlanEstudio extends Component{



    render(){
        return (
            <div>
                 <ListaContent plan={planes1} titulo="Plan de estudio: 1º Año" />
                 <ListaContent plan={planes2} titulo="Plan de estudio: 2º Año" />
            </div>
        )
    }
}

export default PlanEstudio;