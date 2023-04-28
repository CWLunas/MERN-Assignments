const express = require('express');
const faker = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use( express.json() );

const createUserObject = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});


const createCompanyObject = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
});


app.get('/api/users/new', (req, res) => {
const user = createUserObject();
res.json(user);
});

app.get('/api/companies/new', (req, res) => {
const company = createCompanyObject();
res.json(company);
});

app.get('/api/user/company', (req, res) => {
const user = createUserObject();
const company = createCompanyObject();
const data = { user, company };
res.json(data);
});

app.listen(port, () => console.log(`Express server running on port ${port}`));

