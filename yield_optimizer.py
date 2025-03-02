import requests

# Fetch yield rates from different platforms
def get_yield_rates():
    platforms = [
        "https://api.frax.finance/yield",
        "https://api.aave.com/yield",
        "https://api.curve.fi/yield"
    ]
    rates = {}
    for url in platforms:
        response = requests.get(url).json()
        rates[url] = response["yield_rate"]
    return rates

# Selects the best yield farm
def best_farm():
    rates = get_yield_rates()
    return max(rates, key=rates.get)

print(f"Best farm for FRAX: {best_farm()}")
