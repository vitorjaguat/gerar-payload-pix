import Pix from './pix.js';

const chavePix = document.getElementById('chave-pix');
const description = document.getElementById('description');
const name = document.getElementById('name');
const city = document.getElementById('cidade');
const txtId = document.getElementById('text-id');
const amount = document.getElementById('amount');
const form = document.getElementById('form');
const btn = document.querySelector('button');

//COPY BUTTON
function copy() {
  const textarea = document.createElement('textarea');
  if (!document.getElementById('newPayload')) return;
  const text = document.getElementById('newPayload').innerText;
  if (!text) return;
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  // alert('Password copied to clipboard!');
  // shakeResult()
}

//Gerar payload

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('.payloadEl')) {
    document.querySelector('.payloadEl').remove();
  }

  let payload, newPayload;
  //   if (+amount.value > 0) {
  console.log(123);
  // console.log(amount.value);
  payload = new Pix(
    chavePix.value,
    description.value,
    name.value.toUpperCase(),
    city.value,
    txtId.value,
    +amount.value
  );
  newPayload = payload.getPayload();
  const payloadEl = document.createElement('div');
  payloadEl.classList.add('payloadEl');
  payloadEl.innerHTML = `
            <p id="newPayload">${newPayload}</p>
            <p class="copy-btn" onclick="
                    const textarea = document.createElement('textarea');
                    console.log(12345)
                    const text = document.getElementById('newPayload').innerText;
                    
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    textarea.remove();
                    document.querySelector('.copy-btn').innerText = 'Copiado!';
                    document.querySelector('.copy-btn').style.color = 'red';
            ">Copiar</p>
        `;
  form.appendChild(payloadEl);
});

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
