CREATE TABLE Prices (
    currency VARCHAR(100) NOT NULL,
    bid_currency VARCHAR(100) NOT NULL,
    ask_currency VARCHAR(100) NOT NULL,
    purchase_price VARCHAR(100) NOT NULL,
    selling_price VARCHAR(100) NOT NULL,
    open_price VARCHAR(100) NULL,
    market_identifier VARCHAR(100) NOT NULL
);

CREATE TABLE Tickers (
  nick_name VARCHAR(100) NOT NULL,
  price VARCHAR(100) NOT NULL
);