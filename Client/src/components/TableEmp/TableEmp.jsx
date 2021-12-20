import React from "react";
import Styles from './TableEmp.module.css'
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

function TableEmp({ rows }) {
  console.log("HOLAAAA");
  console.log("Datos del Comp Tabla: ", rows);
  const columns = ["Nombre del Emplado", "Sector", "Edad", "Email"];

  return (
    <div className={Styles.container}>
      <TableContainer >
        <TableHead >
          <TableRow className={Styles.head}>
            {columns.map((c) => (
              <TableCell style={{width: "400px", color: "white", fontSize: 25}} align="center">
                {c}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow >
              <TableCell  style={{fontSize: 17, color: "darkblue"}} align="center">
                {r.name}
              </TableCell>
              <TableCell style={{fontSize: 17}} align="center">
                {r.sector}
              </TableCell>
              <TableCell style={{fontSize: 17}} align="center">
                {r.age}
              </TableCell>
              <TableCell style={{fontSize: 17}} align="center">
                {r.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
}

export default TableEmp;
