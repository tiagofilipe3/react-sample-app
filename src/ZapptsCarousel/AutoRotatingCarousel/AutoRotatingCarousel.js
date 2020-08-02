import React, { useState } from "react";
import { modulo } from "../utils/modulo";
import Carousel from "../SwipableCarouselView";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Dots from "../Dots";

const styles = {
  root: {
    "& > *:focus": {
      outline: "none",
    },
  },
  content: {
    width: "60%",
    maxWidth: 700,
    height: "calc(100% - 96px)",
    maxHeight: 600,
    margin: "-16px auto 0",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  contentMobile: {
    width: "100%",
    height: "100%",
    maxWidth: "initial",
    maxHeight: "initial",
    margin: 0,
    top: 0,
    transform: "none",

    "& > $carouselWrapper": {
      borderRadius: 0,
    },
  },
  arrow: {
    width: 48,
    height: 48,
    position: "absolute",
    top: "calc((100% - 96px) / 2 + 24px)",
  },
  arrowLeft: {
    left: -96,
  },
  arrowRight: {
    right: -96,
  },
  arrowIcon: {
    color: "grey[700]",
  },
  carouselWrapper: {
    overflow: "hidden",
    borderRadius: 14,
    transform: "scale(1.0)",
    background: "transparent",
    height: "100%",
  },
  dots: {
    paddingTop: 36,
    margin: "0 auto",
  },
  dotsMobile: {
    paddingTop: 0,
  },
  dotsMobileLandscape: {
    paddingTop: 20,
  },
  footer: {
    marginTop: -72,
    width: "100%",
    position: "relative",
    textAlign: "center",
  },
  footerMobile: {
    marginTop: -92,
  },
  footerMobileLandscape: {
    marginTop: -3,
    transform: "translateY(-50vh)",
    display: "inline-block",
    width: "auto",
  },
  slide: {
    width: "100%",
    height: "100%",
  },
  slideMobile: {
    width: "100%",
    height: "100%",
  },
  carousel: {
    height: "100%",
  },
  carouselContainer: {
    height: "100%",
  },
  closed: {},
};

const AutoRotatingCarousel = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const {
    onChange,
    autoplay,
    children,
    classes,
    containerStyle,
    interval,
  } = props;

  const hasMultipleChildren = children.length != null;

  const handleChange = (slideIndex) => {
    setSlideIndex(slideIndex);
    onChangeSlide(slideIndex);
  };

  const onChangeSlide = (slideIndex) => {
    if (onChange) {
      onChange(modulo(slideIndex, children.length));
    }
  };

  return (
    <>
      <Carousel
        autoplay={autoplay && hasMultipleChildren}
        className={classes.carousel}
        containerStyle={{ height: "100%", ...containerStyle }}
        index={slideIndex}
        interval={interval}
        onChangeIndex={handleChange}
        slideClassName={classes.slide}
      >
        {React.Children.map(children, (c) => c)}
      </Carousel>
      <Dots
        count={children.length}
        index={modulo(slideIndex, children.length)}
        style={{ padding: "0px 0 100px" }}
        onDotClick={handleChange}
      />
    </>
  );
};

AutoRotatingCarousel.defaultProps = {
  autoplay: false,
  classes: undefined,
  containerStyle: undefined,
  interval: undefined,
};

AutoRotatingCarousel.propTypes = {
  onChange: PropTypes.func,
  autoplay: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  containerStyle: PropTypes.object,
  interval: PropTypes.number,
};

export default withStyles(styles)(AutoRotatingCarousel);
