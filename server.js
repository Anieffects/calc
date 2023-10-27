const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const data = req.body;
    
    // выполните расчеты, используя data и информацию из Excel-файла
    
    res.json({ cost: 'расчетная стоимость' });  // отправка ответа
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
