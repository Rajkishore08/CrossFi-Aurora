import ccxt
import numpy as np

exchange = ccxt.binance()
symbol = 'FRAX/USDT'

# Get price trend
def get_price_trend():
    ohlcv = exchange.fetch_ohlcv(symbol, timeframe='1h', limit=100)
    prices = [x[4] for x in ohlcv]
    return np.mean(prices[-5:]) > np.mean(prices[-20:])

# Execute trade
def execute_trade():
    if get_price_trend():
        print("Buying FRAX...")
        exchange.create_market_buy_order(symbol, 10)
    else:
        print("Holding...")

execute_trade()
