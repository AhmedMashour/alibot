import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components.

import CardActions from "@material-ui/core/CardActions";
import mediaCardActionsStyle from "../../_assets/jss/material-dashboard-react/components/mediaCardActionsStyle.jsx";

function MediaCardActions({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [className]: className !== undefined,
  });
  return (
    <CardActions className={cardBodyClasses} {...rest}>
      {children}
    </CardActions>
  );
}

MediaCardActions.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(mediaCardActionsStyle)(MediaCardActions);
