const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'auditTrail.json');
console.log("audit-trail working");


//instanciado en la linea 56 de authControoller.js como auditTrail.logIn(new Date(), email);
const logIn = async (date, email) => {
    const newReg = {
        date: date,
        email: email,
        type: 'login',
    };

    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(newReg);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
    console.log("Se agrego correctamente");
};

const logOut = async (email) => { //no encuentro donde meter esto, no hay cierre de sesion como tal
  const newReg = {
    email: email,
    type: 'logout',
    date: new Date().toISOString(),
  };
    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(newReg);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 2) + '\n');
    console.log("Se agrego correctamente");
};

const userCreated = async (date, userId, newUser, newEmail) => {
  
  const newReg = {
    date: date,
    email: userId,
    type: 'user Created',
    newUser: newUser,
    newEmail: newEmail,
  };

  console.log(userId);

  const data = await fs.promises.readFile(filePath, 'utf-8');
  const registros = data ? JSON.parse(data) : [];
  registros.push(newReg);

  await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
  console.log("Se agrego correctamente desde usuario creado!");

}

const uDelete = async (date, userId, userDelete) =>{
  const newReg = {
    date: date,
    email, userId,
    userDelete,
  };

  const data  = await fs.promises.readFile(filePath, 'utf-8');
  const registros = data ? JSON.parse(data):[];
  registros.push(newReg);

  await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 2) + '\n');
  console.log("Se agrego correctamente desde usuario eliminado!");

}

module.exports = {
  logIn,
  logOut,
  userCreated,
};
