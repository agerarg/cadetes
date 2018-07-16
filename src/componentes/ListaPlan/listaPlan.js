import React from "react";

const listaPlan = (props)=>{
    return (
        <tr key={props.nro}>
        <th scope="row">{props.nro}</th>
        <td>{props.nombre}</td>
        <td>{props.regimen}</td>
        <td>{props.semana}</td>
         <td>{props.total}</td>
          <td>{props.docente}</td>
      </tr>
    )
};

export default listaPlan;