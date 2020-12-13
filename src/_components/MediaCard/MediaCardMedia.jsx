import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import CardMedia from "@material-ui/core/CardMedia";
import mediaCardMediaStyle from "../../_assets/jss/material-dashboard-react/components/mediaCardMediaStyle.jsx";

function MediaCardMedia({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.media]: true,
    [className]: className !== undefined,
  });
  return (
    <CardMedia className={cardBodyClasses} {...rest}>
      {children}
    </CardMedia>
  );
}

MediaCardMedia.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(mediaCardMediaStyle)(MediaCardMedia);
