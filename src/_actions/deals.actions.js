import { dealsConstants } from "../_constants/deals.constants";
import { dealsService } from "../_services";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers";

export const dealsActions = {
  getDeals,
  updateDeal,
  createDeal,
  deleteDeal,
  getDealBookings,
  deleteDealBooking,
};

function getDeals({ skip, limit }) {
  return (dispatch) => {
    dispatch(request());

    dealsService.getDeals({ skip, limit }).then(
      (deals) => dispatch(success(deals)),
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: dealsConstants.GET_DEALS_REQUEST };
  }
  function success(deals) {
    return { type: dealsConstants.GET_DEALS_SUCCESS, deals };
  }
  function failure(error) {
    return { type: dealsConstants.GET_DEALS_FAILURE, error };
  }
}

function getDealBookings({ skip, limit }) {
  return (dispatch) => {
    dispatch(request());

    dealsService.getDealBookings({ skip, limit }).then(
      (bookings) => dispatch(success(bookings)),
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: dealsConstants.GET_DEAL_BOOKINGS_REQUEST };
  }
  function success(bookings) {
    return { type: dealsConstants.GET_DEAL_BOOKINGS_SUCCESS, bookings };
  }
  function failure(error) {
    return { type: dealsConstants.GET_DEAL_BOOKINGS_FAILURE, error };
  }
}
function createDeal(dealData) {
  return (dispatch) => {
    dispatch(request());

    dealsService.createDeal(dealData).then(
      () => dispatch(success()),
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: dealsConstants.CREATE_DEALS_REQUREST };
  }
  function success() {
    return { type: dealsConstants.CREATE_DEALS_SUCCESS };
  }
  function failure(error) {
    return { type: dealsConstants.CREATE_DEALS_FAILURE, error };
  }
}

function updateDeal({ row, name, value }) {
  return (dispatch) => {
    dispatch(request({ row, name, value }));

    dealsService.updateDeal({ row, name, value }).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
  function request(body) {
    return { type: dealsConstants.UPDATE_DEAL_REQUREST, body };
  }
  function success(body) {
    return { type: dealsConstants.UPDATE_DEAL_SUCCESS, body };
  }
  function failure(error) {
    return { type: dealsConstants.UPDATE_DEAL_FAILURE, error };
  }
}

function deleteDeal({ row }) {
  return (dispatch) => {
    dispatch(request({ row }));

    dealsService.deleteDeal({ row }).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
  function request(body) {
    return { type: dealsConstants.UPDATE_DEAL_REQUREST, body };
  }
  function success(body) {
    return { type: dealsConstants.UPDATE_DEAL_SUCCESS, body };
  }
  function failure(error) {
    return { type: dealsConstants.UPDATE_DEAL_FAILURE, error };
  }
}

function deleteDealBooking({ row }) {
  return (dispatch) => {
    dispatch(request({ row }));

    dealsService.deleteDealBooking({ row }).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
  function request(body) {
    return { type: dealsConstants.UPDATE_DEAL_REQUREST, body };
  }
  function success(body) {
    return { type: dealsConstants.UPDATE_DEAL_SUCCESS, body };
  }
  function failure(error) {
    return { type: dealsConstants.UPDATE_DEAL_FAILURE, error };
  }
}
