import {QueryOptions} from '@apollo/client';

// Apollo messages
export const INVALID_OR_EXPIRED_TOKEN_MESSAGE =
  'Sorry! Your token is expired or invalid';
export const NOT_FOUND_EXCEPTION = 'Not Found Exception';
export const CONFLICT_EXCEPTION = 'conflict exception';
export const SOMETHING_WENT_WRONG = 'Something went wrong';
export const DIMENSION_ALREADY_EXIST = 'Dimension already exists';
export const USER_ALREADY_EXIST = 'User already exists';
export const PRECONDITION_FAILED_EXCEPTION = 'Precondition Failed Exception';
export const REQUEST_NOT_FOUND = 'Requests not found for current user';
export const NOT_ACCEPTABLE_EXCEPTION = 'not acceptable exception';
export const TOKEN_INVALID = 'Token Invalid';
export const TOKEN_NOT_FOUND = 'Token not found';
export const UNAUTHORIZED = 'Unauthorized';
export const NOT_FOUND = 'Not Found';
export const SURVEYS_NOT_AVAILABLE = 'Surveys not available';

//messages
export const SIGNUP_MESSAGE =
  'Congratulations! your account created successfully. check your email to set password.';
export const INVALID_EMAIL = 'Invalid email address';
export const FORGET_PASSWORD_EMAIL_SENT =
  'Email for reset password sent successfully';
export const RESET_PASSWORD_SUCCESS = 'Password reset successfully';
export const EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE =
  'Email changed or not verified, please verify your email';
export const FORBIDDEN_EXCEPTION = 'forbidden exception';
export const WRONG_EMAIL_OR_PASSWORD =
  'You have entered wrong email or password';
export const FORGET_PASSWORD_SUCCESS =
  'An email has been sent to your registered email address';
export const NOT_FOUND_EMAIL_MESSAGE = 'No user found with this email';
export const RESET_PASSWORD_FAILURE = 'Reset password failed';
export const FOLLOW_INSTRUCTIONS =
  'Please follow provided link in email to reset your password';
export const PAGE_NOT_FOUND = 'Page Not Found';
export const RESET_FILTERS = 'Reset Filters';
export const PASSWORD_VALIDATION_MESSAGE =
  'Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character';
export const PASSWORD_MUST_MATCH_MESSAGE =
  'Password and confirm password fields must match';
export const LOOKS_LIKE_AN_EMPTY_SPACE =
  'Looks like an empty space. You can go back to homepage by clicking the button below';
export const FOUR_O_FOUR = '404';
export const PROJECT = 'Projects';
export const OVERVIEW = 'Overview';
export const DASHBOARD_TITLE = 'Dashboard';
export const USER_TITLE = 'User';
export const PAGE_LIMIT = 10;
export const ROLE_EVENT = 'role';
export const STATUS_EVENT = 'status';
export const USER_STATUS_PLACEHOLDER = 'User Status';
export const NONE = 'None';
export const USER_ROLE_PLACEHOLDER = 'User Role';
export const CANT_DELETE_USER = "This user can't be deleted.";
export const TRANSACTION_ID = 'TRANSACTION_ID';
export const SOURCE = 'SOURCE';
export const SURVEY_RESPONSE = 'SurveyResponse';
export const SURVEY_STEP = 'SURVEY_STEP';
export const SURVEY_FORM = 'SurveyForm';
export const POSTCODE_DEPENDENT_QUE = 'postCodeDependentQue';

// Regex
export const NUMBER_REGEX = /^[0-9]+$/;
export const ALPHABETS_REGEX = /^\b(?!.*?\s{2})[A-Za-z ]{1,}\b$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#=+%&/,><':;|_~`])\S{8,99}$/;
export const NAME_REGEX =
  /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const SPACES_REGEX = /^\S+(?: \S+)*$/;
export const SSN_REGEX = /^\d{3}-\d{2}-\d{4}$/;
export const SSN_REGEX_TYPE_2 = /^\d{2}-\d{7}$/;
// US phone number RegExp
export const PHONE_REGEX = /^\(\d{3}\) \d{3}-\d{4}$/;
//forces the name to be two words long with only one space between
export const FULL_NAME_REGEX = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;

//Token
export const AUTH_TOKEN = 'portal_token';
export const PASSWORD = 'password';
export const TEXT = 'text';
export const RESET_PASSWORD = 'Reset password';

// Root Enum
export enum RootScreenEnum {
  START_SCREEN = 'StartScreen',
  LOGIN_SCREEN = 'LoginScreen',
  SIGNUP_SCREEN = 'SignupScreen',
  FORGOT_PASSWORD_SCREEN = 'ForgotPasswordScreen',
  RESET_PASSWORD_SCREEN = 'ResetPasswordScreen',
  SURVEY_RESPONSE_SCREEN = 'SurveyResponseScreen',
  HOME_SCREEN = 'Home',
  DASHBOARD_SCREEN = 'DashboardScreen',
  POINT_HISTORY_SCREEN = 'PointHistoryScreen',
  PAYMENT_REQUEST_SCREEN = 'PaymentRequestScreen',
  EDIT_PROFILE_SCREEN = 'EditProfileScreen',
  UPDATE_PASSWORD_SCREEN = 'UpdatePasswordScreen',
  PREFERENCE_SCREEN = 'PreferenceScreen',
  PRIVACY_POLICY_SCREEN = 'PrivacyPolicyScreen',
  SURVEY_TAB = 'SurveyTab',
  PROFILE_TAB = 'ProfileTab',
  WALLET_TAB = 'WalletTab',
  WEBVIEW_SCREEN = 'WebViewScreen',
  SURVEY_TAB_SCREEN = 'Survey',
  PROFILE_TAB_SCREEN = 'Profile',
  WALLET_TAB_SCREEN = 'Wallet',
  SURVEY_DETAIL_SCREEN = 'SurveyDetailScreen',
  ONBOARDING_SCREEN = 'ProfileCompleteScreen',
  LUCID_SURVEY_TABLE_SCREEN = 'LucidSurveyTableScreen',
  ADDITIONAL_INFORMATION_SCREEN = 'LucidSurveyScreen',
  SET_PASSWORD_SCREEN = 'SetPasswordScreen',
  THANKS_DETAILS_SCREEN = 'ThanksDetailsScreen',
}

//BottomTabs
export const SURVEY_TAB = 'SurveyTab';
export const PROFILE_TAB = 'ProfileTab';
export const WALLET_TAB = 'WalletTab';
export const SURVEY_TAB_SCREEN = 'Survey';
export const PROFILE_TAB_SCREEN = 'Profile';
export const WALLET_TAB_SCREEN = 'Wallet';

export const GRAPHQL_QUERY_POLICY = {
  fetchPolicy: 'network-only',
  nextFetchPolicy: 'no-cache',
  notifyOnNetworkStatusChange: true,
} as unknown as QueryOptions;

export const CountriesArray = [
  {value: 'United States', label: 'United States'},
  {value: 'Australia', label: 'Australia'},
  {value: 'Canada', label: 'Canada'},
  {value: 'United Kingdom', label: 'United Kingdom'},
  {value: 'New Zealand', label: 'New Zealand'},
];

export const CountryToIso: {[key: string]: string} = {
  'United States': 'us',
  Australia: 'au',
  'United Kingdom': 'gb',
  'New Zealand': 'nz',
  Canada: 'ca',
};

//Country
export const UNITED_STATES = 'United States';
export const AUSTRALIA = 'Australia';
export const CANADA = 'Canada';
export const UNITED_KINGDOM = 'United Kingdom';
export const NEW_ZEALAND = 'New Zealand';
export const DIVISION = [
  'Connecticut',
  'Maine',
  'Massachusetts',
  'New Hampshire',
  'Rhode Island',
  'Vermont',
];
export const DIVISION_2 = ['New Jersey', 'New York', 'Pennsylvania'];
export const DIVISION_3 = [
  'Indiana',
  'Illinois',
  'Michigan',
  'Ohio',
  'Wisconsin',
];
export const DIVISION_4 = [
  'Iowa',
  'Nebr aska',
  'Kansas',
  'Nor th Dakota',
  'Minnesota',
  'South Dak ota',
  'Missouri',
];
export const DIVISION_5 = [
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Maryland',
  'North Carolina',
  'South Carolina',
  'Virginia',
  'West Virginia',
];
export const DIVISION_6 = ['Alabama', 'Kentucky', 'Mississippi', 'Tennessee'];
export const DIVISION_7 = ['Arkansas', 'Louisiana', 'Oklahoma', 'Texas'];
export const DIVISION_8 = [
  'Arizona',
  'Colorado',
  'Idaho',
  'New Mexico',
  'Montana',
  'Utah',
  'Nevada',
  'Wyoming',
];
export const DIVISION_9 = [
  'Alaska',
  'California',
  'Hawaii',
  'Oregon',
  'Washington',
];
