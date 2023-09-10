import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { urlForImage } from "../../sanity/lib/image";
import type { SanityDocument } from "@sanity/client";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slideshow = ({ images }: { images: SanityDocument[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="w-full h-full rounded-xl md:rounded-2xl border-b-gray-200"
          key={page}
          src={urlForImage(images[imageIndex]).url().toString()}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="absolute top-[50%] right-5 bg-black/20 rounded-[30px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center
        select-none cursor-pointer font-bold text-[24px] z-[1] text-green-500"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute top-[50%] left-5 bg-black/20 rounded-[30px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center
      select-none cursor-pointer font-bold text-[24px] z-[1] scale-[-1] text-green-500"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
    </>
  );
};
