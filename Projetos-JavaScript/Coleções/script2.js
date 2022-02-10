
function getAdmins(map){


let admin = [];

for([ key, value ] of map){ // acessar a chave e valor do MAP

    
    
    if(value === 'Admin'){

        admin.push(key);
    }

}

return admin;

}

const usuarios = new Map(); // usando a coleção Map para implementar dados

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');


console.log(getAdmins(usuarios));