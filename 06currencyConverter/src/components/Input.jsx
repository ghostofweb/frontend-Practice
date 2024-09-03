import React,{useId} from "react";
function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisbale = false,
    className = "",}
) {
   const amountInputId = useId()

    return (
        // here we are writing css in the {} , so we can inject more css from the user
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                        {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange(Number(e.target.value) && onAmountChange)}
                    // using number because we mostly get that in string sometimes 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(Number(e.target.value) && onCurrencyChange)}
                    disabled = {currencyDisbale}
                >
                    {/* remember the keys in loops of rjx */}

                       {currencyOptions.map((currency) =>(
                            <option key={currency}
                            value={currency}>
                                {currency}
                            </option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default Input;
