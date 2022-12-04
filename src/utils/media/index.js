export const media = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
  "https://svgsilh.com/svg/2546741.svg",
  "https://svgsilh.com/svg/2136339.svg",
  "https://cryptologos.cc/logos/bitcoin-gold-btg-logo.png?v=023",
  "https://www.pngitem.com/pimgs/m/378-3781685_premium-bitcoins-logo-vector-transparent-bitcoin-hd-png.png",
]
export const mediaByIndex = index => media[index % media.length]
