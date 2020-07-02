const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req, res) => {
	res.send("Prasanna is here!!")
})

app.post('/findNoOfDays',(req, res) => {
	const oneDay = 24 * 60 * 60 * 1000;
	const firstDate = new Date(req.body.startDate);
	const secondDate = new Date(req.body.endDate);
	let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	//above
	if(req.body.includeEndDate){
		diffDays+=1;
	}

	let response = {
		numberofdays: diffDays, 
		numberofhours: diffDays*24, 
		numberofminutes: diffDays*24*60, 
		numberofseconds: diffDays*24*60*60, 
		numberofWeeks: Math.floor(diffDays/7), 
		numberofDaysleft: diffDays%7
	}
	res.status(200).json(response);
})

app.listen(3000);