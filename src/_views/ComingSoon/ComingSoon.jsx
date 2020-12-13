import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
// import moment from 'moment/min/moment-with-locales';
import moment from "moment";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import "react-under-construction/build/css/index.css";

// core components
import GridItem from "../../_components/Grid/GridItem.jsx";
import GridContainer from "../../_components/Grid/GridContainer.jsx";
import Table from "../../_components/Table/Table.jsx";
import Card from "../../_components/Card/Card.jsx";
import CardHeader from "../../_components/Card/CardHeader.jsx";
import CardBody from "../../_components/Card/CardBody.jsx";

// Media Card Components
import MediaCard from "../../_components/MediaCard/MediaCard.jsx";
import MediaCardHeader from "../../_components/MediaCard/MediaCardHeader.jsx";
import MediaCardMedia from "../../_components/MediaCard/MediaCardMedia.jsx";
import MediaCardContent from "../../_components/MediaCard/MediaCardContent.jsx";
import MediaCardActions from "../../_components/MediaCard/MediaCardActions.jsx";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import CircularIndeterminate from "../../_components/CircularIndeterminate/Loading.jsx";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";

import statics from "../../_assets/statics/tables.json";

import { dealsActions } from "../../_actions/deals.actions";

// Dialog Core Components
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const styles = {
  noDeals: {
    marginTop: "13%",
    marginLeft: "38%",
    fontSize: "50px",
  },
  createDeal: {
    backgroundColor: "#1875f0",
    width: "138px",
    height: "47px",
    borderRadius: "25px",
    color: "white",
    border: "none",
    "&:hover,&:focus": {
      backgroundColor: "#0b438e",
    },
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "25px",
  },

  td: {
    textAlign: "center",
    padding: "8px",
    fontSize: "16px",
    backgroundColor: "white",
  },
  th: {
    textAlign: "center",
    padding: "8px",
    fontSize: "16px",
    backgroundColor: "#1875f0",
    color: "white",
  },
  noData: {
    width: "100%",
    display: "flex",
    marginLeft: "28%",
    marginTop: "75px",
    color: "#81818181",
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ComingSoon extends Component {
  componentDidMount() {
    this.getDeals();
    this.getDealBookings();
  }

  state = {
    allDeals: [
      {
        name: "first deal",
        type: "inBot",
        duration: "20",
        daysOfWeek: "sunday",
        status: "active",
      },
    ],
    expanded: false,
    dialogOpen: false,
  };

  actions = [
    {
      value: "delete",
      label: "Delete Table",
      callback: (row) => {
        this.dialogRow = row;
        this.setState({ dialogOpen: true });
      },
    },
  ];

  handleDialogClose = (e, row) => {
    console.log("event", e.target.innerText);
    const value = e.target.innerText;
    if (value === "YES" && this.dialogRow) {
      this.props.dispatch(dealsActions.deleteDealBooking({ row: this.dialogRow }));
      this.props.dispatch(dealsActions.getDeals({ skip: 0, limit: 200 }));
    }
    this.setState({ dialogOpen: false });
  };

  getDeals = () => {
    this.props.dispatch(dealsActions.getDeals({ skip: 0, limit: 20 }));
  };

  getDealBookings = () => {
    this.props.dispatch(dealsActions.getDealBookings({ skip: 0, limit: 20 }));
  };

  createDeal = (event) => {
    const { name, value } = event.target;
    console.log("value given", value);
  };
  render() {
    const { classes, deals } = this.props;
    // let data =
    //   !deals.loading && deals.allDeals
    //     ? deals.allDeals.map((deal) => {
    //         const daysOfWeek = [];
    //         if (deal.availability.type == "anytime") {
    //           deal.duration = "-";
    //           deal.status = "active";
    //         } else {
    //           const from = new Date(deal.availability.period.from);
    //           const to = new Date(deal.availability.period.to);
    //           const diffTime = Math.abs(to - from);
    //           const duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //           deal.duration = duration + " day(s)";
    //           if (to.getTime() >= new Date().getTime()) deal.status = "active";
    //           else deal.status = "stopped";
    //         }
    //         deal.availability.daysOfWeek.map((day, key) => {
    //           daysOfWeek.push(statics.daysOfTheWeek[day].label);
    //         });
    //         return {
    //           _id: deal._id,
    //           name: deal.name === "" ? "-" : deal.name,
    //           type: deal.type,
    //           duration: deal.duration,
    //           daysOfWeek,
    //           status: deal.status,
    //           payload: { source: "deals", _id: deal._id },
    //         };
    //       })
    //     : [];
    let bookings =
      !deals.bookingDealsLoading && deals.bookingDeals
        ? deals.bookingDeals.map((booking, index) => {
            const deal = booking.dealId;
            const user = booking.userId;
            const daysOfWeek = [];
            if (deal.availability.type == "anytime") {
              deal.duration = "-";
              deal.status = "active";
            } else {
              const from = new Date(deal.availability.period.from);
              const to = new Date(deal.availability.period.to);
              const diffTime = Math.abs(to - from);
              const duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              deal.duration = duration + " day(s)";
              if (to.getTime() >= new Date().getTime()) deal.status = "active";
              else deal.status = "stopped";
            }
            deal.availability.daysOfWeek.map((day, key) => {
              daysOfWeek.push(statics.daysOfTheWeek[day].label);
            });
            return {
              _id: booking._id,
              id: index + 1,
              username: `${user.firstName} ${user.lastName}`,
              phone: user.phone,
              email: user.email,
              date: moment(booking.createdAt).format("dddd, MMM D HH:mm"),
              name: deal.name === "" ? "-" : deal.name,
              duration: deal.duration,
              daysOfWeek,
              payload: { source: "deals", _id: deal._id },
            };
          })
        : [];
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          {deals.allDeals && deals.allDeals.length !== 0 ? (
            <GridContainer>
              {deals.allDeals.map((deal) => {
                let { expanded } = deal;
                return (
                  <GridItem xs={3} sm={3} md={3}>
                    <MediaCard className={classes.root}>
                      <MediaCardHeader
                        avatar={<Avatar aria-label="recipe">R</Avatar>}
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={deal.name}
                        subheader={deal.price}
                      />
                      <MediaCardMedia
                        className={classes.media}
                        image={deal.image || "/images/dashboard/special.jpg"}
                        title="Paella dish"
                      />
                      <MediaCardContent>
                        <Typography paragraph>{deal.description}</Typography>
                      </MediaCardContent>
                      <MediaCardActions disableSpacing>
                        <Typography paragraph>dt {deal.price || 5}</Typography>
                      </MediaCardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <MediaCardContent>
                          HEREEEEE THE PRICEEEEE
                          <Typography paragraph>Here the price</Typography>
                        </MediaCardContent>
                      </Collapse>
                    </MediaCard>
                  </GridItem>
                );
              })}
            </GridContainer>
          ) : (
            <div />
          )}
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Deals Joining List</h4>
              <p className={classes.cardCategoryWhite}>
                {" "}
                Here you can check your deals joining and view who has joined
                your created deals{" "}
              </p>
            </CardHeader>
            <CardBody>
              <a className="nav-link" href="/create-deal">
                <Button onClick={() => this.setState({ modalOpen: true })}>
                  <Add />
                  Create a Deal
                </Button>
              </a>
              {deals.bookingDealsLoading ? (
                <CircularIndeterminate />
              ) : deals.allDeals && deals.allDeals.length === 0 ? (
                <div className={classes.noData}>
                  <h1 style={{ fontSize: "4rem" }}>Nothing here yet</h1>
                </div>
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "#",
                    "User Name",
                    "Phone",
                    "Email",
                    "Date Joined",
                    "Deal Name",
                    "Duration",
                    "Days Of The Week",
                    "Actions",
                  ]}
                  tableData={bookings}
                  scrollable={true}
                  hasActions={true}
                  extraActions={this.actions}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <Dialog
          open={this.state.dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Are you sure?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Would you like to remove that user from that deal?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleDialogClose}
              color="secondary"
              value="no"
            >
              No
            </Button>
            <Button
              onClick={this.handleDialogClose}
              color="primary"
              value="yes"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </GridContainer>
    );
  }
}

// export default withStyles(styles)(ComingSoon);
function mapStateToProps(state) {
  const { deals } = state;
  return { deals };
}
export default connect(mapStateToProps)(withStyles(styles)(ComingSoon));
