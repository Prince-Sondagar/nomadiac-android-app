// packages block
import { onError } from '@apollo/client/link/error';
import { DevSettings } from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
  NextLink,
  Operation,
} from '@apollo/client';
import {
  INVALID_OR_EXPIRED_TOKEN_MESSAGE,
  NOT_FOUND,
  NOT_FOUND_EXCEPTION,
  PRECONDITION_FAILED_EXCEPTION,
  REQUEST_NOT_FOUND,
  SURVEYS_NOT_AVAILABLE,
  TOKEN_INVALID,
  TOKEN_NOT_FOUND,
  UNAUTHORIZED,
} from '../constants';
import { getToken, removeToken } from '../utils';
import Config from 'react-native-config';
import { Toast } from '../contexts/ToastContext';
import { ErrorException } from '../interfaceTypes';

const authMiddleware = new ApolloLink(
  async (operation: Operation, forward: NextLink) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${await getToken()}`,
      },
    });
    return forward(operation);
  },
);

const httpLink = new HttpLink({
  uri: Config.BACKEND_BASE_GQL_NATIVE_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ extensions }) => {
      if (extensions) {
        const { exception } = extensions;
        if (exception) {
          const { response } = exception as ErrorException;

          const { response: subResponse } = response || {};
          const { response: thirdResponse } = subResponse || {};
          const { error } = thirdResponse || {};
          if (
            error &&
            error !== NOT_FOUND_EXCEPTION &&
            error !== NOT_FOUND &&
            error !== SURVEYS_NOT_AVAILABLE &&
            error !== PRECONDITION_FAILED_EXCEPTION
          ) {
            return Toast.error(error);
          }

          if (response) {
            const { error, response: errorResponse } = response;

            if (
              error &&
              error !== REQUEST_NOT_FOUND &&
              error !== NOT_FOUND_EXCEPTION &&
              error !== NOT_FOUND &&
              error !== SURVEYS_NOT_AVAILABLE
            ) {
              if (error === TOKEN_NOT_FOUND) {
                Toast.error(INVALID_OR_EXPIRED_TOKEN_MESSAGE);
              } else if (error !== NOT_FOUND && error !== SURVEYS_NOT_AVAILABLE)
                Toast.error(error);
            }

            if (errorResponse) {
              const { error: responseError, message } = errorResponse;

              if (
                message &&
                message !== REQUEST_NOT_FOUND &&
                message !== NOT_FOUND_EXCEPTION &&
                message !== NOT_FOUND &&
                message !== SURVEYS_NOT_AVAILABLE
              ) {
                Toast.error(message);
              } else if (
                responseError &&
                responseError !== REQUEST_NOT_FOUND &&
                responseError !== NOT_FOUND_EXCEPTION &&
                responseError !== NOT_FOUND &&
                responseError !== PRECONDITION_FAILED_EXCEPTION &&
                responseError !== SURVEYS_NOT_AVAILABLE
              ) {
                Toast.error(responseError);
              }
            }
          }
        }
      }

      return null;
    });
    const [{ message }] = graphQLErrors;
    if (message === UNAUTHORIZED || message === TOKEN_INVALID) {
      removeToken()
    };
  }
  if (networkError) Toast.error(networkError.message);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: from([authMiddleware, errorLink, httpLink]),
});

export default client;
