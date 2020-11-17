import React from "react"
import autoPlay from "react-swipeable-views-utils/lib/autoPlay"
import virtualize from "react-swipeable-views-utils/lib/virtualize"
import bindKeyboard from "react-swipeable-views-utils/lib/bindKeyboard"
import SwipeableViews from "react-swipeable-views"
import PropTypes from "prop-types"
import { modulo } from "../../../utils/modulo"

const VirtualizeSwipeViews = bindKeyboard(virtualize(SwipeableViews))
const VirtualizeAutoPlaySwipeViews = autoPlay(VirtualizeSwipeViews)

const carouselSlideRenderer = (children) => ({ index, key }) =>
  React.cloneElement(children[modulo(index, children.length)], { key })

export default function Carousel({ children, autoplay, ...other }) {
  const slideRenderer = carouselSlideRenderer(children)
  return autoplay ? (
    <VirtualizeAutoPlaySwipeViews {...other} slideRenderer={slideRenderer} />
  ) : (
    <VirtualizeSwipeViews {...other} slideRenderer={slideRenderer} />
  )
}

Carousel.defaultProps = {
  autoPlay: false,
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoplay: PropTypes.bool,
}
