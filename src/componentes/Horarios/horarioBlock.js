import React from 'react';


const block = (props)=>{
    console.log(props);

    let materia = props.mdata;

    return (<td>
        <div className="btn btn-default">{materia.horario}</div>
        <div><h4><strong>{materia.materia}</strong></h4></div>
        <div>{materia.profesores.map((val)=>{
            return <div key={val}>{val} <br/></div> 
        })}</div>
    </td>);
}

export default block;