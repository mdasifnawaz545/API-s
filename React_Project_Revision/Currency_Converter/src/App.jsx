import { useState } from 'react'
import Card from './components/Card';
import Button from './components/Button';
import useCurrency from './hooks/useCurrency';

function App() {

  const [amount, setAmount] = useState();
  const [convertedAmount, setconvertedAmount] = useState();
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromCurrency, setFromCurrency] = useState("inr");
  const onAmountChange = (value) => {
    setAmount((prev) => (prev = value))
  }
  const onCurrencyChange = (value) => {
    setToCurrency((prev) => (prev = value))
  }
  const onCurrencyChangeFrom = (value) => {
    setFromCurrency((prev) => (prev = value))
  }

  const data = useCurrency(toCurrency);
  let list = Object.keys(data);

  const swap = () => {
    setconvertedAmount(amount)
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
    setAmount(convertedAmount)

  }

  const converter = () => {
    setconvertedAmount((prev) => (prev = amount * data[fromCurrency])
    )
  }


  return (
    <div className='w-full h-screen flex justify-center items-center' style={{ backgroundImage: `url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>

      <div className='rounded-md flex flex-col justify-center items-center backdrop-blur-xl p-4 '>

        <Card cardType="From" currencyList={list}
          onAmountChange={onAmountChange}
          amount={amount}
          onCurrencyChange={onCurrencyChange}
          selectedCurrency={toCurrency} ></Card>
        <Button func={swap} buttonName={"Swap"}></Button>
        <Card cardType="To" currencyList={list}
          amountDisable={true} amount={convertedAmount}
          onCurrencyChange={onCurrencyChangeFrom}
          selectedCurrency={fromCurrency}
        ></Card>
        <br />
        <Button func={converter} buttonName={`Convert ${toCurrency.toUpperCase()} to ${fromCurrency.toUpperCase()}`} stylesheet={"w-full mb-0.5 p-2"} />



      </div>
    </div>
  )
}

export default App
