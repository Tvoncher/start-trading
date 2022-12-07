import React, { useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import "./Embla.css"
import Autoplay from "embla-carousel-autoplay"
import { mediaByIndex, titleArray, marketsCaption } from "./carouselInfo"

const EmblaCarousel = ({ slides, options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 2000, stopOnInteraction: false },
      emblaRoot => emblaRoot.parentElement
    )
  )

  const [emblaRef] = useEmblaCarousel(options, [autoplay.current])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
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
                  <h3 className="embla__caption">{marketsCaption[index]}</h3>
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
