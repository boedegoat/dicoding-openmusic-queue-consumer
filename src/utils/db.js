const pg = require("pg");

const db = new pg.Pool();

module.exports.queryManyRows = async ({ text, values }) => {
    return (await db.query({ text, values })).rows;
};

module.exports.querySingleRow = async ({ text, values }) => {
    return (await db.query({ text, values })).rows[0];
};
