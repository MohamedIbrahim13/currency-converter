import React from 'react';



const CurrencyRow = ({currencyOptions,selectedCurrency,onChangeCurrency,onChangeAmount,amount}) => {
  
    return (
        <div>
          <input type="number" className="input" value={amount} onChange={onChangeAmount} />
          <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map(curr=>(
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>
    )
}

export default CurrencyRow
