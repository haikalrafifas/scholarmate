require('dotenv').config();
const axios = require('axios');
const cron = require('node-cron');
const express = require('express');
const { format } = require('mysql2');
const mysql = require('mysql2/promise');

const { PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME, API_SCHOLARSHIP } = process.env
const app = express();
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

const NOW = () => {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

let apiRequestCount = 0;

const fetchDataToMySQL = async () => {
  try {
    const { data } = await axios.get(API_SCHOLARSHIP);
    const formattedData = convertJsonToMySQL(data);

    const columns = Object.keys(formattedData[0]).join(', ');
    const values = formattedData.map((row) => Object.values(row));

    const query = `INSERT INTO scholarships (${columns}) VALUES ? ON DUPLICATE KEY UPDATE ${getUpdateColumns(columns)}`;

    await pool.query(query, [values]);

    console.log(`[${NOW()}] Scholarship API request count: ${++apiRequestCount}`);
  } catch (error) {
    console.error('Error while fetching data into database:', error);
  }
};

const convertJsonToMySQL = (data) => {
  return data.scholarships.map(({
    id, created_at, updated_at, name, funding_type,
    degrees, registration_date, deadline_date, links,
    documents, countries, majors, disciplines
  }) => {
    return {
      id,
      created_at,
      updated_at,
      name,
      funding_type: funding_type.join(','),
      degrees: degrees.join(','),
      registration_date,
      deadline_date,
      links: links.map(({ link }) => link).join(','),
      documents: documents.map(({ name }) => name).join(','),
      countries: countries.map(({ name }) => name).join(','),
      majors: majors.map(({ name }) => name).join(','),
      disciplines: disciplines.map(({ name }) => name).join(',')
    };
  });
};

const getUpdateColumns = (columnNames) => {
  const columns = columnNames.split(', ');
  return columns.map((column) => `${column}=VALUES(${column})`).join(', ');
};

cron.schedule(`0 */1 * * * *`, fetchDataToMySQL); // fetches every 1 minute

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('scholarship.html', { root: 'public' });
});

app.get('/api/scholarship/:id/:column?', async (req, res) => {
  try {
    const columns = req.params.column ? req.params.column.split('-').map(column => mysql.escapeId(column)).join(', ') : '*';
    const whereClause = req.params.id !== 'all' ? 'WHERE id = ?' : '';
    const queryParams = req.params.id !== 'all' ? [req.params.id] : [];
    const query = `SELECT ${columns} FROM scholarships ${whereClause}`;
    const [results] = await pool.query(query, queryParams);

    results.length === 0 ? res.status(404).json({ error: 'Scholarship not found' })
                         : res.json(results);
  } catch (error) {
    console.error('Error fetching scholarship data:', error);
    res.status(500).json({ error: 'Error while fetching scholarship data' });
  }
});

app.listen(PORT, () => {
  console.log(`[${NOW()}] Server running on port ${PORT}\nFetching scholarship data once every minute, please wait. . .`);
});
