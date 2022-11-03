import Pix from './pix.js';
import PixNoValue from './pix2.js';

const chavePix = document.getElementById('chave-pix');
const description = document.getElementById('description');
const name = document.getElementById('name');
const city = document.getElementById('cidade');
const txtId = document.getElementById('text-id');
const amount = document.getElementById('amount');
const form = document.getElementById('form');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.querySelector('.payloadEl')){
        document.querySelector('.payloadEl').remove();
    }
    
    let payload, newPayload;
    if(+amount.value > 0) {
        console.log(123)
        payload = new Pix(chavePix.value, description.value, name.value, city.value, txtId.value, +amount.value);
        newPayload = payload.getPayload();
        const payloadEl = document.createElement('div');
        payloadEl.classList.add('payloadEl');
        payloadEl.innerHTML = `
            <p>${newPayload}</p>
        `;
        form.appendChild(payloadEl);
    } else if(!(+amount.value)) {
        console.log(345)
        payload = new PixNoValue(chavePix.value, description.value, name.value, city.value, txtId.value);
        newPayload = payload.getPayload2();
        const payloadEl = document.createElement('div');
        payloadEl.classList.add('payloadEl');
        payloadEl.innerHTML = `
            <p>${newPayload}</p>
        `;
        form.appendChild(payloadEl);
    }
    
    // const payload2 = new Pix('+5521972420018', 'testeD', 'Fabio de Pinho Aguiar', 'Rio de Janeiro', 'testeID', 5.5);
    // const newPayload2 = payload2.getPayload();
    // console.log(newPayload);
    // console.log(newPayload2);
    // console.log(+amount.value);
    
    // console.log(chavePix, description, name, city, txtId, amount);
})



// const KEY = 'YySqQQKTgC5N6ggwpB0pXA==gvgudMliFsJrc86j';
// const API_URL = 'https://api.api-ninjas.com/v1/qrcode?';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		"X-Api-Key":"YySqQQKTgC5N6ggwpB0pXA==gvgudMliFsJrc86j"
// 	}
// }
// let options = { 'X-Api-Key': 'YySqQQKTgC5N6ggwpB0pXA==gvgudMliFsJrc86j'};
// header.append('Accept', 'image/svg+xml');

// async function requestAPI() {
//     const res = await fetch(`${API_URL}format=svg&data=teste`, options);
//     const data = await res.json();
//     console.log(data);
// };
// // console.log(header);
// requestAPI();


// import requests
// data = 'https://api-ninjas.com'
// fmt = 'png'
// api_url = 'https://api.api-ninjas.com/v1/qrcode?data={}&format={}'.format(data, fmt)
// response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
// if response.status_code == requests.codes.ok:
//     print(response.text)
// else:
//     print("Error:", response.status_code, response.text)



// Preparação:

// receber todos esses campos JÁ como string:

// nomeRecebedor
// chavepix
// valor opcional (precisa estar no formato 13.13)
// cidade
// txtId opcional (mensagem)
// (a length dessas strings precisa ser calculada, para preencher o campo númeroDeCarecteres)

// formato de cada campo = idDoCampo + númeroDeCaracteres + CampoValue

// const payloadFormat = '000201';

// const merchantAccount = '26' + `${4+16+4+chavepix.length}` + '0014BR.GOV.CBC.PIX' + '01' + `${chavepix.length}` + `${chavepix}`;

// const merchantCategoryCode = '52040000'

// const transactionCurrency = '5303986'

// const transactionAmount = '54' + `${valor.length}` + `${valor.padStart(2,'0')}`;   
// (valor do pagamento)

// const countryCode = '5802BR'

// const merchantName = '59' + `${nomeRecebedor.length.padStart(2,'0')}` + `${nomeRecebedor.toUpperCase()}`;

// merchantCity = '60' + `${cidade.length.padStart(2,'0')}` + `${cidade}`; 

// addDataField = '62' + `${(4+mensagem.length).padStart(2,'0')}` + '05' + `${mensagem.length.padStart(2,'0')}` + `${mensagem}`;
// (dados adicionais)

// const crc16 = '6304'

// const payload = `${payloadFormat}${merchantAccount}${merchantCategoryCode}${transactionCurrency}${transactionAmount}${countryCode}${merchantName}${merchantCity}${addDataField}`



