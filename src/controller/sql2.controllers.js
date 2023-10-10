const { query } = require("express");
const { pool } = require("../database")


const getmedia = async (req, res) =>
{
    try{
        let sql;
        if(req.query.id == null)
            sql = "SELECT * FROM alumnos"
        else
            sql = "SELECT AVG(Nota) FROM notas WHERE id_estudiante =" +req.query.id;
        
            let [result] = await pool.query(sql);
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getmedia};