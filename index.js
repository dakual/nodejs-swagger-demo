const express   = require('express');
const router1   = require('./routes/index.js');
const router2   = require('./routes/products.js')
const swaggerUi = require('swagger-ui-express');
const swaggerDc = require('./swagger.json');

const app  = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDc));
app.use('/api', router1)
app.use('/api/products', router2)

app.listen(process.env.PORT || port, () => {
  console.log("Server running...");
});























