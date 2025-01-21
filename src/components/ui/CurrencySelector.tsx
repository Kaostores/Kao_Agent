import { useState, useEffect } from "react";

const CurrencySelector = ({setSelectedCurrency,selectedCurrency,setSelectedCountry,}: any) => {
	const [currencies, setCurrencies] = useState<any>([]);

	useEffect(() => {
		const fetchCurrencies = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all");
				const data = await response.json();
				const currencyMap: any = {};

				// Create a map of currency to country
				data.forEach((country: any) => {
					if (country.currencies) {
						for (let currencyCode in country.currencies) {
							if (!currencyMap[currencyCode]) {
								currencyMap[currencyCode] = country.name.common; // Map currency code to country name
							}
						}
					}
				});

				setCurrencies(Object.keys(currencyMap).sort());
				setCurrencyToCountryMap(currencyMap);
			} catch (error) {
				console.error("Error fetching countries:", error);
			}
		};

		fetchCurrencies();
	}, []);

	const [currencyToCountryMap, setCurrencyToCountryMap] = useState<any>({});

	const handleCurrencyChange = (event: any) => {
		const currencyCode = event.target.value;
		setSelectedCurrency(currencyCode);
		setSelectedCountry(currencyToCountryMap[currencyCode]); // Automatically get the country from the map
	};

	return (
		<div>
			{/* <h2>Select Your Currency</h2> */}
			{/* <form> */}

			<select
				className='flex h-10  w-full rounded-md border outline-none 
border-input bg-background px-3 py-2 text-sm 
ring-offset-background file:border-0 file:bg-transparent 
file:text-sm file:font-medium 
placeholder:text-muted-foreground 
focus-visible:outline-none mt-2 disabled:cursor-not-allowed 
disabled:opacity-50'
				id='currency'
				value={selectedCurrency}
				onChange={handleCurrencyChange}>
				<option value='' disabled>
					Select a currency
				</option>
				{currencies.map((currency: any) => (
					<option key={currency} value={currency}>
						{currency}
					</option>
				))}
			</select>
			{/* </form> */}
		</div>
	);
};

export default CurrencySelector;