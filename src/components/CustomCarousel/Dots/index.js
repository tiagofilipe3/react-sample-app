import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  dots: {
    position: "relative",
    padding: "20px 0 28px",
  },
  dotOuter: {
    width: 12,
    height: 12,
    padding: 4,
    float: "left",
    position: "absolute",
  },
  dot: {
    width: 12,
    height: 12,
    background: "#fff",
    transition: "opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    borderRadius: 10,
  },
  whiteDot: {
    width: 12,
    height: 12,
    background: "#fff",
    transition: "all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    borderRadius: 10,
  },
}

const Dots = (props) => {
  const [previousIndex, setPreviousIndex] = useState(props.index || 0)
  const { classes, count, index, style = {}, onDotClick, ...other } = props

  useEffect(() => {
    if (previousIndex !== index) {
      setTimeout(() => {
        setPreviousIndex(index)
      }, 400)
    }
  }, [index])

  const handleDotClick = (index, event) => {
    if (onDotClick) {
      onDotClick(index, event)
    }
  }

  return (
    <div style={{ ...style, width: count * 24 }} {...other}>
      <div className={classes.dots}>
        {[...Array(count).keys()].map((i) => (
          <div
            key={i}
            className={classes.dotOuter}
            style={{
              left: i * 24,
              cursor: onDotClick != null ? "pointer" : "inherit",
            }}
            onClick={(event) => handleDotClick(i, event)}
          >
            <Paper
              elevation={0}
              className={classes.dot}
              style={{
                opacity:
                  i >= Math.min(previousIndex, index) &&
                  i <= Math.max(previousIndex, index)
                    ? 0
                    : 0.5,
              }}
            />
          </div>
        ))}
        <Paper
          elevation={0}
          className={classes.whiteDot}
          style={{
            position: "absolute",
            marginTop: 4,
            left: Math.min(previousIndex, index) * 24 + 4,
            width: Math.abs(previousIndex - index) * 24 + 12,
          }}
        />
      </div>
    </div>
  )
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
  onDotClick: PropTypes.func,
  classes: PropTypes.object,
}

export default withStyles(styles)(Dots)
