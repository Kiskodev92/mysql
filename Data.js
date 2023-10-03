const mysql = require("mysql2/promise");


async function main()
{
  try
  {
    let connection = await mysql.createConnection(
    {
          host         : "localhost",
          user         : "root",
          password     : "mysql",
          database     : "reto1"
    });
    console.log('conexion correcta');
    //RETOS DIA 1
    // let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, " + 
    //                                    "calle VARCHAR(200), "+
    //                                    "numero INT, " +
    //                                    "ciudad VARCHAR(60))";
    //let [result] = await connection.query(sql);
    //     console.log("Tabla creada");


    // let sql = "INSERT INTO alumnos (idalumno, apellido1, apellido2, id_cursoalum)"+
    //           "VALUES (6,\"Mendez\", \"Galvan\", 1),"+
    //            "VALUES (7,\"Repiso\", \"Ortega\", 2),"+
    //            "VALUES (8,\"Borja\", \"Ferrari\", 1)";
    //let [result] = await connection.query(sql);
        //console.log("Alumno creado");


    // let sql = "INSERT INTO notas (idnotas, id_estudiante, id_asignatura, fecha, Nota)"+
    //            "VALUES (3, 3, 1, \"2003-03-03\", 3),"+
    //            "VALUES (5, 6, 1, \"2009-11-02\", 6),"+
    //            "VALUES (6, 2, 1, \"2019-12-02\", 10)";
    //let [result] = await connection.query(sql);
        // console.log("Nota creada");


    // let sql = "INSERT INTO profesores (idprofe, nombre, apellido1)"+
    //           "VALUES (6, \"Antonio\", \"Flores\"),"+
    //           "VALUES (7, \"Tamara\", \"Lago\"),"+
    //           "VALUES (8, \"Pedro\", \"Feijo\")";
    //let [result] = await connection.query(sql);
        // console.log("Profe creado");

    // let sql = "DROP TABLE direccion"
    //let [result] = await connection.query(sql);
    //     console.log("tabla borrada");

    // let sql = "UPDATE notas set Nota = 0"
    //let [result] = await connection.query(sql);
        // console.log("nota actualizada")

    // let sql = "SELECT apellido1, apellido2 FROM alumnos";
    // let sql = "SELECT * FROM profesores";
    // let sql = "DELETE FROM notas WHERE fecha < DATE_SUB(NOW(), INTERVAL 10 YEAR)"
    // let sql = "UPDATE notas SET Nota = 5 WHERE Nota < 5"
    //let [result] = await connection.query(sql);
        // console.log("Datos obtenidos")

    //RETOS DIA 2
    // let sql = "SELECT AVG(Nota) FROM notas"
    // console.log("media actualizada")
    // let sql = "SELECT COUNT (*) alumnos"
    // console.log("conteo total");
    // let sql = "SELECT Nota FROM notas WHERE Nota > 5 AND fecha >= 2019-01-01"
    // console.log("Dato actualizado")
    // let sql = "SELECT * FROM alumnos WHERE Start_Bootcamp = 2023"
    // console.log("Dato actualizado")
    // let sql = "SELECT idsubjets, COUNT (*) AS numteacher FROM subprof GROUP BY idsubjets"
    // console.log("profes por asignatura");
    // let sql = "SELECT id_estudiante, Nota FROM notas WHERE (id_estudiante BETWEEN 1 AND 20) OR (Nota > 8 AND YEAR(fecha) = YEAR(CURDATE())-1);"
    // console.log("Id y nota");
    // let sql = "SELECT id_estudiante, AVG(nota) AS media_arit FROM notas WHERE YEAR(fecha) = YEAR(CURDATE()) - 1 GROUP BY id_estudiante;"
    // console.log("Media aritmetica");
    let [result] = await connection.query(sql);

    // console.log(result);
    await connection.end()
}
catch(err)
{
    console.log(err)
    connection.end()
}
}
main()