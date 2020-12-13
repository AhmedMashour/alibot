import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import CardContent from "@material-ui/core/CardContent";
import mediaCardContentStyle from "../../_assets/jss/material-dashboard-react/components/mediaCardContentStyle.jsx";

function MediaCardContent({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.root]: true,
    [className]: className !== undefined,
  });
  return (
    <CardContent className={cardBodyClasses} {...rest}>
      {children}
    </CardContent>
  );
}

MediaCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(mediaCardContentStyle)(MediaCardContent);
