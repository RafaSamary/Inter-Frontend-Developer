function validaString(Usuario){
   
try{

    if(!Usuario || typeof Usuario !== "string")
    throw new TypeError("Digite um Usuario Valido:");

          
    return Usuario;

 }catch(e){

     if(e instanceof TypeError){
         console.log("Esse Erro é de TypeError");
         console.log(e.message)

      }
     }
 }

console.log(validaString());