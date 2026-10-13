const days = require("dayjs");

const now = days();

console.log(now.toISOString());

console.log(now.format("DD MM YYYY , hh:mm" ));

console.log(now.add(1,"day").format("YYYY-MM-DD"));

