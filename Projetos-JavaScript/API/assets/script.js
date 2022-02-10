
// ENDEREÇO DA API
const BASE_URL = `https://thatcopy.pw/catapi/rest/`;  

const catBtn = document.getElementById(`change-cat`);
const catImg = document.getElementById(`cat`);

// função assincrona com uso do metodo FECCH para API´s
const getCats = async () => {  

// palavras chaves para as promises , AWAIT(retornar)  e  ASYNC( função assincrona)
    try {
        
    const data = await fetch(BASE_URL); 
    const json = await data.json();
// imagens compactadas do endereço API
    return json.webpurl;  

 }catch (e){

    console.log(e.message);
}
};

const loadImg = async() => {

   catImg.src  = await getCats();
}

catBtn.addEventListener(`click`, loadImg);

loadImg();
 
