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
    //     console.log("Tabla creada");


    // let sql = "INSERT INTO alumnos (idalumno, apellido1, apellido2, id_cursoalum)"+
    //           "VALUES (6,\"Mendez\", \"Galvan\", 1)";
    // let sql = "INSERT INTO alumnos (idalumno, apellido1, apellido2, id_cursoalum)"+
    //            "VALUES (7,\"Repiso\", \"Ortega\", 2)";
    // let sql = "INSERT INTO alumnos (idalumno, apellido1, apellido2, id_cursoalum)"+
    //            "VALUES (8,\"Borja\", \"Ferrari\", 1)";
        //console.log("Alumno creado");


    // let sql = "INSERT INTO notas (idnotas, id_estudiante, id_asignatura, fecha, Nota)"+
    //            "VALUES (3, 3, 1, \"2003-03-03\", 3)";
    // let sql = "INSERT INTO notas (idnotas, id_estudiante, id_asignatura, fecha, Nota)"+
    //            "VALUES (5, 6, 1, \"2009-11-02\", 6)";
    // let sql = "INSERT INTO notas (idnotas, id_estudiante, id_asignatura, fecha, Nota)"+
    //            "VALUES (6, 2, 1, \"2019-12-02\", 10)";
        // console.log("Nota creada");


    // let sql = "INSERT INTO profesores (idprofe, nombre, apellido1)"+
    //           "VALUES (6, \"Antonio\", \"Flores\")";
    // let sql = "INSERT INTO profesores (idprofe, nombre, apellido1)"+
    //           "VALUES (7, \"Tamara\", \"Lago\")";
    // let sql = "INSERT INTO profesores (idprofe, nombre, apellido1)"+
    //           "VALUES (8, \"Pedro\", \"Feijo\")";
        // console.log("Profe creado");

    // let sql = "DROP TABLE direccion"
    //     console.log("tabla borrada");

    // let sql = "UPDATE notas set Nota = 0"
        // console.log("nota actualizada")

    // let sql = "SELECT apellido1, apellido2 FROM alumnos";
    // let sql = "SELECT * FROM profesores";
    // let sql = "DELETE FROM notas WHERE fecha < DATE_SUB(NOW(), INTERVAL 10 YEAR)"
    // let sql = "UPDATE notas SET Nota = 5 WHERE Nota < 5"
        console.log("Datos obtenidos")
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