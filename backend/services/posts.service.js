import { connection as sql } from '../db.connection.js';

export const PostService = {
    create: async(newPlant, result) => {
        sql.query("INSERT INTO pflanzen SET ?", newPlant, (err, res) => {
            if (err) result(err, null);
            else result(null, { id: res.id, ...newPlant });
        });
    },
    findById: async(postId, result) => {
        sql.query(
            `SELECT * FROM pflanzen WHERE id = ?`, [postId],
            (err, res) => {
                if (err) result(err, null);
                else if (res.length) result(null, res[0]);
                else result({ message: "not found" }, null);
            }
        );
    },
    getAll: async(result) => {
        sql.query("SELECT * FROM pflanzen", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
    updateById: async(id, plant, result) => {
        sql.query(
            "UPDATE pflanzen SET ? where id= ?", [plant, id],
            (err, res) => {
                if (err) result(null, err);
                else if (res.affectedRows == 0) result({ message: "not found" }, null);
                else result(null, { id: id, ...plant });
            }
        );
    },
    remove: async(id, result) => {
        sql.query("DELETE FROM pflanzen WHERE id = ?", id, (err, res) => {
            if (err) result(null, err);
            else if (res.affectedRows == 0) result({ message: "not found" }, null);
            else result(null, res);
        });
    },
    removeAll: async(result) => {
        sql.query("DELETE FROM pflanzen", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
};  
