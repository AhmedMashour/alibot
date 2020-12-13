import { dealsConstants } from "../_constants/deals.constants";

export function deals(state = {}, action) {
  switch (action.type) {
    case dealsConstants.GET_DEALS_REQUEST:
      state.loading = true;
      return state;
    case dealsConstants.GET_DEALS_SUCCESS:
      state.allDeals = action.deals;
      state.loading = false;
      return state;
    case dealsConstants.GET_DEALS_FAILURE:
      state.error = action.error;
      state.loading = false;
      return state;
    case dealsConstants.GET_DEAL_BOOKINGS_REQUEST:
      state.bookingDealsLoading = true;
      return state;
    case dealsConstants.GET_DEAL_BOOKINGS_SUCCESS:
      state.bookingDeals = action.bookings;
      state.bookingDealsLoading = false;
      return state;
    case dealsConstants.GET_DEAL_BOOKINGS_FAILURE:
      state.bookingDealsError = action.error;
      state.bookingDealsLoading = false;
      return state;
    default:
      return state;
  }
}
