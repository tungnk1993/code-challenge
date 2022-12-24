WITH total_balances AS (
    SELECT address, SUM(
      CASE 
        WHEN denom = 'usdc' then 0.000001*amount
        WHEN denom = 'swth' then 0.00000005*amount
        WHEN denom = 'tmz'  then 0.003*amount
      END
    ) as total
    FROM balances
    GROUP BY address
), last_trade AS (
    SELECT address, max(block_height) as last_trade_block
    FROM trades
    GROUP BY address
)
SELECT total_balances.address, total
FROM total_balances
INNER JOIN last_trade ON total_balances.address = last_trade.address
WHERE total >= 500 AND last_trade.last_trade_block > 730000