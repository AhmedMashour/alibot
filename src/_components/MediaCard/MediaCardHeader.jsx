import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import CardHeader from "@material-ui/core/CardHeader";
import mediaCardHeaderStyle from "../../_assets/jss/material-dashboard-react/components/mediaCardHeaderStyle.jsx";

function MediaCardHeader({ ...props }) {
  const { classes, className, children, icon, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.avatar]: true,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined,
  });
  return (
    <CardHeader className={cardHeaderClasses} {...rest}>
      {children}
    </CardHeader>
  );
}

MediaCardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
};

export default withStyles(mediaCardHeaderStyle)(MediaCardHeader);
