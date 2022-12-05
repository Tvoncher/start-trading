import React, { useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { mediaByIndex } from "../utils/media/index"
import "../utils/Embla.css"

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  })
  const rafId = useRef(0)

  const animate = useCallback(() => {
    if (!embla || !rafId.current) return

    const engine = embla.internalEngine()
    engine.location.add(-1)
    engine.target.set(engine.location)
    engine.scrollLooper.loop(-1)
    engine.slideLooper.loop()
    engine.translate.to(engine.location)
    rafId.current = requestAnimationFrame(animate)
  }, [embla])

  const startAutoScroll = useCallback(() => {
    rafId.current = requestAnimationFrame(animate)
  }, [animate])

  const stopAutoScroll = useCallback(() => {
    rafId.current = cancelAnimationFrame(rafId.current) || 0
  }, [])

  useEffect(() => {
    if (!embla) return

    embla.on("pointerDown", stopAutoScroll)
    embla.on("settle", startAutoScroll)

    startAutoScroll()
    return () => stopAutoScroll()
  }, [embla, startAutoScroll, stopAutoScroll])

  const titleArray = [
    "Binary options",
    "Crypto",
    "Forex",
    "Stocks",
    "Commodities",
  ]

  const marketsCaption = [
    "Try to predict direction of the price movement in next hours",
    "Buy and sell cryptocurrencies whenever you want",
    "Try yourself in the world's largest forex market",
    "Great place to start investing your money, especially for beginners",
    "Invest in physical substances like oil, gold, or agricultural products",
  ]

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map(index => (
            <div className="embla__slide" key={index}>
              <center>
                <h2>{titleArray[index]}</h2>
              </center>

              <div
                className="embla__slide__inner"
                style={{
                  background: `linear-gradient(${
                    2 * index * 10
                  }deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 64%)`,
                }}
              >
                <center>
                  <h3>{marketsCaption[index]}</h3>
                </center>
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="markets"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
