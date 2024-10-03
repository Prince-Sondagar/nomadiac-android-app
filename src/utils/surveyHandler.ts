import {
  FetchPanelistPointHistory,
  ForgotPasswordInput,
  PaginationInput,
  Platform,
  RegisterPanelistMobileInput,
  UserRole,
} from '../generated';

export const forgetPasswordHandler = (
  email: string,
): { forgotPassword: ForgotPasswordInput } => {
  return {
    forgotPassword: {
      email,
      platform: Platform.MobileApp
    },
  };
};

export const registerMobilePanelUserHandler = (
  e: RegisterPanelistMobileInput,
): { registerPanelistInput: RegisterPanelistMobileInput } => {
  return {
    registerPanelistInput: {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      address: e.address,
      dob: e.dob,
      roleType: UserRole.Panelist,
      platform: Platform.MobileApp,
      country: e?.country || ""
    },
  };
};

export const withdrawPointsHandler = (id: string, point: string) => {
  return {
    createPaymentWithdrawalRequest: {
      panelistId: id,
      points: point,
    },
  };
};

export const fetchWithdrawalPaymentHandler = (
  id: string,
  paginationState: PaginationInput,
) => {
  return {
    paymentWithdrawalsInput: {
      panelistId: id,
      paginationOptions: {
        limit: paginationState?.limit,
        page: paginationState?.page,
      },
    },
  };
};

export const fetchPointHistoryHandler = (
  id: string,
  paginationState: PaginationInput,
): { fetchPanelistPointHistory: FetchPanelistPointHistory } => {
  return {
    fetchPanelistPointHistory: {
      panelistId: id,
      paginationOptions: {
        limit: paginationState?.limit,
        page: paginationState?.page,
      },
    },
  };
};
