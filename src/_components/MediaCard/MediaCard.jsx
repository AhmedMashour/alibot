import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Card from "@material-ui/core/Card";
import mediaCardStyle from "../../_assets/jss/material-dashboard-react/components/mediaCardStyle.jsx";

function MediaCard({ ...props }) {
  const { classes, className, children, ...rest } = props;
  const cardClasses = classNames({
    [classes.root]: true,
    [className]: className !== undefined,
  });
  return (
    <Card className={cardClasses} {...rest}>
      {children}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(mediaCardStyle)(MediaCard);
