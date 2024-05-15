const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const data = [
    {
        name: 'Feb 26 2024',
        forecast: 0,
        'Actual Demand': 0,
    },
    {
        name: 'Mar 04 2024',
        forecast: 12,
        'Actual Demand': 10,
    },
    {
        name: 'Mar 11 2024',
        forecast: 18,
        'Actual Demand': 14,
    },
    {
        name: 'Mar 18 2024',
        forecast: 6,
        'Actual Demand': 18,
    },
    {
        name: 'Mar 25 2024',
        forecast: 18,
        'Actual Demand': 12,
    },
    {
        name: 'Apr 01 2024',
        forecast: 12,
        'Actual Demand': 0,
    },
    {
        name: 'Apr 08 2024',
        forecast: 18,
        'Actual Demand': 6,
    },
    {
        name: 'Apr 15 2024',
        forecast: 6,
        'Actual Demand': 12,
    },
    {
        name: 'Apr 22 2024',
        forecast: 6,
        'Actual Demand': 12,
    },
    {
        name: 'Apr 29 2024',
        forecast: 0,
        'Actual Demand': 0,
    },
    {
        name: 'May 06 2024',
        forecast: 0,
        'Actual Demand': 0,
    },
    {
        name: 'May 13 2024',
        forecast: 0,
        'Actual Demand': 0,
    },
];


app.get('/api/chart', (req, res) => {
    res.send(data);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
