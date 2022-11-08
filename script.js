const button = document.getElementById('convert-button')
const valueDolar = 5.02
const selectCurent = document.getElementById('current-select')

const valueEuro = 5.17
const valueBitcoin = 0.00000949

const convertValue = () => {
   const inputReal = document.getElementById('input-reais').value
   const curentReal = document.getElementById('current-real')
   const curencyValue = document.getElementById('currencyValue')
   
   curentReal.innerHTML = new Intl.NumberFormat('pt-BR',
      {
         style: 'currency',
         currency: 'BRL'
      }).format(inputReal);

   if (selectCurent.value === 'US$ Dólar Americano') {
      curencyValue.innerHTML = new Intl.NumberFormat('en-US',
         {
            style: 'currency',
            currency: 'USD'
         }).format(inputReal / valueDolar);
   }
   if (selectCurent.value === '€ Euro') {
      curencyValue.innerHTML = new Intl.NumberFormat('de-DE',
         {
            style: 'currency',
            currency: 'EUR'
         }).format(inputReal / valueEuro);
   }
   if (selectCurent.value === 'Bitcoin') {
      curencyValue.innerHTML = inputReal * valueBitcoin;
   }
}
const changeSelect = () => {
   const currentname = document.getElementById('currentname')
   const currentimg = document.getElementById("currentimg")


   if (selectCurent.value === '€ Euro') {
      currentname.innerHTML = 'Euro'
      currentimg.src = './assets/euro.svg'
   }
   if (selectCurent.value === 'US$ Dólar Americano') {
      currentname.innerHTML = 'Dólar Americano'
      currentimg.src = './assets/estados-unidos (1) 1.svg'
   }
   if (selectCurent.value === 'Bitcoin') {
      currentname.innerHTML = 'Bitcoin'
      currentimg.src = './assets/bitcoin.png'
      convertValue()
}
}
  







button.addEventListener('click', convertValue)
selectCurent.addEventListener('change', changeSelect)
