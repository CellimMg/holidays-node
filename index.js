import express from "express";


const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get("/holidays", (_, response) => {
    response.send(holidays);
});

app.get('/holidays/:mes', (req, res) => {
    const holidaysMonth = holidays.filter( holiday => holiday.date.split("/")[0] == req.params.mes);

    res.send(holidaysMonth);
});

app.get("/is-today-holiday", (_, response) => {
    const hoje = new Date();
    const indexFind = holidays.findIndex((holiday) => {
        holiday.date == hoje.toLocaleDateString();
    });
    response.send(indexFind == -1 ? "Não, hoje não é feriado" : "Sim, hoje é nome-do-feriado");
});






app.listen(3000);