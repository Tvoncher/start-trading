export const media = [
  "/markets/binary.png",
  "/markets/crypto.png",
  "/markets/forex.png",
  "/markets/stocks.png",
  "/markets/commodities.png",
]
export const mediaByIndex = index => media[index % media.length]
