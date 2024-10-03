import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AccessUserPayload = {
  __typename?: 'AccessUserPayload';
  access_token?: Maybe<Scalars['String']['output']>;
  response?: Maybe<ResponsePayload>;
  roles?: Maybe<Array<Role>>;
};

export type AddQuotaGroupsToProject = {
  id: Scalars['String']['input'];
  quotaGroup: Array<CreateProjectQuotaGroupInput>;
};

export type Attachment = {
  __typename?: 'Attachment';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  type: AttachmentType;
  typeId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type AttachmentMediaPayload = {
  __typename?: 'AttachmentMediaPayload';
  preSignedUrl?: Maybe<Scalars['String']['output']>;
  response?: Maybe<ResponsePayload>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  attachment?: Maybe<Attachment>;
  response?: Maybe<ResponsePayload>;
};

/** The type is assigned */
export enum AttachmentType {
  Panelist = 'PANELIST'
}

export type AttachmentsPayload = {
  __typename?: 'AttachmentsPayload';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
};

export type BulkUpdatePaymentWithdrawalRequest = {
  paymentWithdrawalRequestIds: Array<InputMaybe<Scalars['String']['input']>>;
  paymentWithdrawalRequestStatuses: Array<InputMaybe<PaymentWithdrawalStatus>>;
};

export type BulkUpdatePaymentWithdrawalsPayload = {
  __typename?: 'BulkUpdatePaymentWithdrawalsPayload';
  errors: Array<Maybe<Scalars['String']['output']>>;
  response?: Maybe<ResponsePayload>;
};

export type Company = {
  __typename?: 'Company';
  clientNumber?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  project: Array<Maybe<Project>>;
  updatedAt: Scalars['String']['output'];
};

export type CompanyPayload = {
  __typename?: 'CompanyPayload';
  company?: Maybe<Company>;
  response?: Maybe<ResponsePayload>;
};

export type ContinueTakingLucidSurvey = {
  panelistId: Scalars['String']['input'];
};

/** The project lifecycle */
export enum CpiHistoryType {
  Client = 'CLIENT',
  Supplier = 'SUPPLIER'
}

export type CreateAttachmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** enum type for module type - Upload Media */
  type: AttachmentType;
  typeId: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBulkSignupSurveyResponseInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  clientNumber?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCpiInput = {
  cpi: Scalars['String']['input'];
  type: CpiHistoryType;
  typeId: Scalars['String']['input'];
};

export type CreatePaymentWithdrawalRequest = {
  panelistId: Scalars['String']['input'];
  points: Scalars['String']['input'];
  type?: InputMaybe<PaymentWithdrawalType>;
};

export type CreateProjectInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  methodology?: InputMaybe<ProjectMethodology>;
  projectUsers: Array<CreateProjectUserInput>;
  quotaGroup: Array<CreateProjectQuotaGroupInput>;
  security?: InputMaybe<ProjectSecurity>;
  title: Scalars['String']['input'];
};

export type CreateProjectQuotaGroupInput = {
  completeCap?: InputMaybe<Scalars['String']['input']>;
  completeCapLeft?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quotaIds: Array<Scalars['String']['input']>;
  suppliers: Array<CreateSupplierQuotaGroupInput>;
  surveyEntryLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProjectUserInput = {
  isHeadManager?: InputMaybe<Scalars['Boolean']['input']>;
  isSalesManager?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CreateSignupSurveyResponse = {
  panelistId: Scalars['String']['input'];
  responses: Array<CreateBulkSignupSurveyResponseInput>;
};

export type CreateSupplierInput = {
  companyName: Scalars['String']['input'];
  completeLink?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quotaFullLink?: InputMaybe<Scalars['String']['input']>;
  securityLink?: InputMaybe<Scalars['String']['input']>;
  terminateLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSupplierQuotaGroupInput = {
  completeCap?: InputMaybe<Scalars['String']['input']>;
  completeLink?: InputMaybe<Scalars['String']['input']>;
  cpi?: InputMaybe<Scalars['String']['input']>;
  offerId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  quotaFullLink?: InputMaybe<Scalars['String']['input']>;
  quotaGroupId?: InputMaybe<Scalars['String']['input']>;
  securityLink?: InputMaybe<Scalars['String']['input']>;
  supplierCompleteCapLeft?: InputMaybe<Scalars['String']['input']>;
  supplierId: Scalars['String']['input'];
  surveyEntryLink?: InputMaybe<Scalars['String']['input']>;
  terminateLink?: InputMaybe<Scalars['String']['input']>;
};

export type FetchAllQuotaGroupsInput = {
  projectId: Scalars['String']['input'];
};

export type FetchAllQuotasInput = {
  type: QuotaType;
};

export type FetchCompaniesInput = {
  paginationOptions: PaginationInput;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type FetchCompaniesPayload = {
  __typename?: 'FetchCompaniesPayload';
  companies: Array<Maybe<Company>>;
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
};

export type FetchCpiStatsPayload = {
  __typename?: 'FetchCpiStatsPayload';
  netProfit?: Maybe<Scalars['Float']['output']>;
  response?: Maybe<ResponsePayload>;
  revenue?: Maybe<Scalars['Float']['output']>;
};

export type FetchDashboardPayload = {
  __typename?: 'FetchDashboardPayload';
  activePanelists: Scalars['Float']['output'];
  panelistsCountByCountryGraphData: Array<Maybe<FetchPanelistByCountry>>;
  panelistsCountByDayGraphData: Array<Maybe<FetchPanelistByDay>>;
  response?: Maybe<ResponsePayload>;
};

export type FetchFusionSurveyInput = {
  panelistId: Scalars['String']['input'];
};

export type FetchFusionSurveyPayload = {
  __typename?: 'FetchFusionSurveyPayload';
  memberId: Scalars['String']['output'];
  respondentId: Scalars['String']['output'];
  response?: Maybe<ResponsePayload>;
  surveys: Array<Maybe<FusionSurveyType>>;
};

export type FetchLucidSurveyBySurveyIdInput = {
  surveyId: Scalars['String']['input'];
};

export type FetchLucidSurveyForPanelistInput = {
  paginationOptions: PaginationInput;
  panelistId: Scalars['String']['input'];
  refreshCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FetchLucidSurveyLogPayload = {
  __typename?: 'FetchLucidSurveyLogPayload';
  lucidSurveyLogs?: Maybe<Array<LucidSurveyLogRawType>>;
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
};

export type FetchLucidSurveyLogsInput = {
  paginationOptions: PaginationInput;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type FetchLucidSurveyPayload = {
  __typename?: 'FetchLucidSurveyPayload';
  response?: Maybe<ResponsePayload>;
  survey?: Maybe<LucidSurvey>;
};

export type FetchLucidSurveysPayload = {
  __typename?: 'FetchLucidSurveysPayload';
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
  surveys: Array<Maybe<LucidSurvey>>;
};

export type FetchPanelistByCountry = {
  __typename?: 'FetchPanelistByCountry';
  count?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
};

export type FetchPanelistByDay = {
  __typename?: 'FetchPanelistByDay';
  count?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['DateTime']['output']>;
};

export type FetchPanelistByUserIdInput = {
  userId: Scalars['String']['input'];
};

export type FetchPanelistInput = {
  id: Scalars['String']['input'];
};

export type FetchPanelistPayload = {
  __typename?: 'FetchPanelistPayload';
  pagination?: Maybe<PaginationPayload>;
  panelists: Array<Maybe<Panelist>>;
  response?: Maybe<ResponsePayload>;
};

export type FetchPanelistPointHistory = {
  paginationOptions: PaginationInput;
  panelistId?: InputMaybe<Scalars['String']['input']>;
};

export type FetchPanelistsInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  /** format: 2023-05-04 00:00 */
  from?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGender>;
  id?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  panelistReviewStatus?: InputMaybe<PanelistReviewStatus>;
  panelistType?: InputMaybe<UserRole>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  signupSource?: InputMaybe<PanelistSignupSource>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatus>;
  /** format: 2023-05-04 00:00 */
  to?: InputMaybe<Scalars['String']['input']>;
};

export type FetchPaymentWithdrawalsInput = {
  paginationOptions: PaginationInput;
  panelistId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PaymentWithdrawalStatus>;
};

export type FetchProjectResults = {
  paginationOptions: PaginationInput;
  panelistId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  quotaGroupId?: InputMaybe<Scalars['String']['input']>;
  supplierId?: InputMaybe<Scalars['String']['input']>;
};

export type FetchProjectSuppliersInput = {
  projectId: Scalars['String']['input'];
};

export type FetchProjectsInput = {
  lifecycle?: InputMaybe<ProjectLifecycle>;
  methodology?: InputMaybe<ProjectMethodology>;
  paginationOptions: PaginationInput;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type FetchQuotaGroupsPayload = {
  __typename?: 'FetchQuotaGroupsPayload';
  pagination?: Maybe<PaginationPayload>;
  quotaGroup: Array<Maybe<QuotaGroup>>;
  response?: Maybe<ResponsePayload>;
};

export type FetchQuotaPayload = {
  __typename?: 'FetchQuotaPayload';
  pagination?: Maybe<PaginationPayload>;
  quota: Array<Maybe<Quota>>;
  response?: Maybe<ResponsePayload>;
};

export type FetchSuppliersInput = {
  paginationOptions: PaginationInput;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type FetchSuppliersPayload = {
  __typename?: 'FetchSuppliersPayload';
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
  suppliers: Array<Maybe<Supplier>>;
};

export type FetchSurveyResultById = {
  id: Scalars['String']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
  platform?: InputMaybe<Platform>;
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  response?: Maybe<ResponsePayload>;
};

export type FusionSurveyType = {
  __typename?: 'FusionSurveyType';
  cpi: Scalars['Float']['output'];
  entryLink: Scalars['String']['output'];
  estimatedLoi: Scalars['Float']['output'];
  fullOrPartialMatch: SurveyMatch;
  surveyId: Scalars['String']['output'];
};

export type GetAttachment = {
  typeId: Scalars['String']['input'];
};

export type GetMedia = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetUser = {
  id: Scalars['String']['input'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LucidSurvey = {
  __typename?: 'LucidSurvey';
  accountName?: Maybe<Scalars['String']['output']>;
  completionPercentage?: Maybe<Scalars['Float']['output']>;
  conversionRate: Scalars['Float']['output'];
  cpi: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  earningsPerClick?: Maybe<Scalars['Float']['output']>;
  epcScore?: Maybe<Scalars['Float']['output']>;
  forCountry: Scalars['String']['output'];
  id: Scalars['String']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  interviewLength: Scalars['Float']['output'];
  mobileConversion?: Maybe<Scalars['Float']['output']>;
  overallCompletes?: Maybe<Scalars['Float']['output']>;
  quotaLeft: Scalars['Float']['output'];
  studyType?: Maybe<Scalars['String']['output']>;
  surveyId: Scalars['String']['output'];
  surveyName?: Maybe<Scalars['String']['output']>;
  surveyQualification?: Maybe<Scalars['String']['output']>;
  surveyScore?: Maybe<Scalars['Float']['output']>;
  terminationLengthOfInterview?: Maybe<Scalars['Float']['output']>;
  totalClientEntrants?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type LucidSurveyLogRawType = {
  __typename?: 'LucidSurveyLogRawType';
  averageSurveyScore?: Maybe<Scalars['Float']['output']>;
  createdat?: Maybe<Scalars['String']['output']>;
  signupSource?: Maybe<Scalars['String']['output']>;
  surveyIds?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MobileNumberInput = {
  mobileNumber: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: UserPayload;
  addQuotaGroupsToProject: ProjectPayload;
  addSupplierToQuotaGroup: SupplierToQuotaGroupPayload;
  bulkUpdatePaymentWithdrawalRequest: BulkUpdatePaymentWithdrawalsPayload;
  continueTakingLucidSurvey: ValidateSurveyPayload;
  createAttachmentData: AttachmentPayload;
  createCompany: CompanyPayload;
  createCpi: ProjectPayload;
  createMobilePanelist: PanelistPayload;
  createPanelist: PanelistPayload;
  createProject: ProjectPayload;
  createProjectUser: ProjectUserPayload;
  createSignupSurveyResponses: PanelistPayload;
  createSupplier: SupplierPayload;
  createWithdrawalRequest: PaymentWithdrawalPayload;
  deactivateUser: UserPayload;
  forgotPassword: ForgotPasswordPayload;
  generateOtp: ResponsePayloadResponse;
  login: AccessUserPayload;
  registerUser: UserPayload;
  removeAttachmentData: AttachmentPayload;
  removeCompany: CompanyPayload;
  removePanelist: PanelistPayload;
  removePaymentWithdrawals: PaymentWithdrawalPayload;
  removeProject: ProjectPayload;
  removeProjectUser: ProjectPayload;
  removeQuotaGroup: QuotaGroupPayload;
  removeSupplier: SupplierPayload;
  removeSupplierFromQuotaGroup: SupplierToQuotaGroupPayload;
  removeSurveyResults: ProjectResultPayload;
  removeUser: UserPayload;
  resendVerificationEmail: UserPayload;
  resetPassword: UserPayload;
  updateAttachmentData: AttachmentPayload;
  updateCompany: CompanyPayload;
  updatePanelist: PanelistPayload;
  updatePassword: UserPayload;
  updatePaymentWithdrawals: PaymentWithdrawalPayload;
  updateProject: ProjectPayload;
  updateProjectUser: ProjectPayload;
  updateQuotaGroup: QuotaGroupPayload;
  updateRole: UserPayload;
  updateSignupSurveyResponse: UpdateSignupSurveyResponsePayload;
  updateSupplier: SupplierPayload;
  updateSupplierQuotaGroup: SupplierToQuotaGroupPayload;
  updateSurveyResultWithIdReConciliation: ProjectResultPayload;
  updateSurveyResults: ProjectResultPayload;
  updateUser: UserPayload;
  validateLucidSurvey: ValidateSurveyPayload;
  verifyEmail: UserPayload;
  verifyEmailAndSetPassword: UserPayload;
  verifyOtp: ResponsePayloadResponse;
  verifyPanelistEmailAndSetPassword: ResponsePayloadResponse;
  verifyTwilioMobileNumber: VerifyMobileNoResponsePayload;
};


export type MutationActivateUserArgs = {
  user: UserIdInput;
};


export type MutationAddQuotaGroupsToProjectArgs = {
  projectInput: AddQuotaGroupsToProject;
};


export type MutationAddSupplierToQuotaGroupArgs = {
  createSupplierQuotaGroupInput: CreateSupplierQuotaGroupInput;
};


export type MutationBulkUpdatePaymentWithdrawalRequestArgs = {
  bulkUpdatePaymentWithdrawalRequest: BulkUpdatePaymentWithdrawalRequest;
};


export type MutationContinueTakingLucidSurveyArgs = {
  continueTakingLucidSurvey: ContinueTakingLucidSurvey;
};


export type MutationCreateAttachmentDataArgs = {
  createAttachmentInput: CreateAttachmentInput;
};


export type MutationCreateCompanyArgs = {
  companyInput: CreateCompanyInput;
};


export type MutationCreateCpiArgs = {
  cpiInput: CreateCpiInput;
};


export type MutationCreateMobilePanelistArgs = {
  registerPanelistInput: RegisterPanelistMobileInput;
};


export type MutationCreatePanelistArgs = {
  registerPanelistInput: RegisterPanelistInput;
};


export type MutationCreateProjectArgs = {
  projectInput: CreateProjectInput;
};


export type MutationCreateProjectUserArgs = {
  projectInput: CreateProjectUserInput;
};


export type MutationCreateSignupSurveyResponsesArgs = {
  createSignupSurveyResponses: CreateSignupSurveyResponse;
};


export type MutationCreateSupplierArgs = {
  supplierInput: CreateSupplierInput;
};


export type MutationCreateWithdrawalRequestArgs = {
  createPaymentWithdrawalRequest: CreatePaymentWithdrawalRequest;
};


export type MutationDeactivateUserArgs = {
  user: UserIdInput;
};


export type MutationForgotPasswordArgs = {
  forgotPassword: ForgotPasswordInput;
};


export type MutationGenerateOtpArgs = {
  generateOtpInput: SendOtpToPanelistCodeInput;
};


export type MutationLoginArgs = {
  loginUser: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  user: RegisterUserInput;
};


export type MutationRemoveAttachmentDataArgs = {
  removeAttachment: RemoveAttachment;
};


export type MutationRemoveCompanyArgs = {
  companyInput: RemoveCompanyInput;
};


export type MutationRemovePanelistArgs = {
  removePanelistInput: RemovePanelistInput;
};


export type MutationRemovePaymentWithdrawalsArgs = {
  paymentWithdrawalInput: RemovePaymentWithdrawalRequest;
};


export type MutationRemoveProjectArgs = {
  project: ProjectIdInput;
};


export type MutationRemoveProjectUserArgs = {
  project: ProjectIdInput;
};


export type MutationRemoveQuotaGroupArgs = {
  removeQuotaGroupInput: RemoveQuotaGroupInput;
};


export type MutationRemoveSupplierArgs = {
  supplierInput: RemoveSupplierInput;
};


export type MutationRemoveSupplierFromQuotaGroupArgs = {
  removeSupplierToQuotaGroup: RemoveSupplierQuotaGroupInput;
};


export type MutationRemoveSurveyResultsArgs = {
  projectResult: ProjectResultIdInput;
};


export type MutationRemoveUserArgs = {
  user: UserIdInput;
};


export type MutationResendVerificationEmailArgs = {
  resendVerificationEmail: ResendVerificationEmail;
};


export type MutationResetPasswordArgs = {
  resetPassword: ResetPasswordInput;
};


export type MutationUpdateAttachmentDataArgs = {
  updateAttachmentInput: UpdateAttachmentInput;
};


export type MutationUpdateCompanyArgs = {
  companyInput: UpdateCompanyInput;
};


export type MutationUpdatePanelistArgs = {
  updatePanelistInput: UpdatePanelistInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationUpdatePaymentWithdrawalsArgs = {
  paymentWithdrawalInput: UpdatePaymentWithdrawalRequest;
};


export type MutationUpdateProjectArgs = {
  projectInput: UpdateProjectInput;
};


export type MutationUpdateProjectUserArgs = {
  projectInput: UpdateProjectUserInput;
};


export type MutationUpdateQuotaGroupArgs = {
  updateQuotaGroupInput: UpdateQuotaGroupInput;
};


export type MutationUpdateRoleArgs = {
  user: UpdateRoleInput;
};


export type MutationUpdateSignupSurveyResponseArgs = {
  updateSignupSurveyResponseInput: UpdateSignupSurveyResponseInput;
};


export type MutationUpdateSupplierArgs = {
  supplierInput: UpdateSupplierInput;
};


export type MutationUpdateSupplierQuotaGroupArgs = {
  updateSupplierQuotaGroupInput: UpdateSupplierQuotaGroupInput;
};


export type MutationUpdateSurveyResultWithIdReConciliationArgs = {
  projectResult: UpdateSurveyResultWithIdReConciliationInput;
};


export type MutationUpdateSurveyResultsArgs = {
  projectResult: UpdateProjectResultStatusInput;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};


export type MutationValidateLucidSurveyArgs = {
  validateLucidSurveyInput: ValidateLucidSurveyInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmail: VerifyEmailInput;
};


export type MutationVerifyEmailAndSetPasswordArgs = {
  verifyEmailAndSetPassword: VerifyUserAndUpdatePasswordInput;
};


export type MutationVerifyOtpArgs = {
  verifyOtpInput: VerifyOtpInput;
};


export type MutationVerifyPanelistEmailAndSetPasswordArgs = {
  verifyPanelistEmailAndSetPasswordInput: VerifyUserAndUpdatePasswordInput;
};


export type MutationVerifyTwilioMobileNumberArgs = {
  mobileNumber: MobileNumberInput;
};

/** The application platform */
export enum Platform {
  MobileApp = 'MOBILE_APP',
  Web = 'WEB'
}

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationPayload = {
  __typename?: 'PaginationPayload';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Panelist = {
  __typename?: 'Panelist';
  address?: Maybe<Scalars['String']['output']>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  attachments: Array<Maybe<Attachment>>;
  availablePoints?: Maybe<Scalars['Float']['output']>;
  blockDate?: Maybe<Scalars['String']['output']>;
  blockFromLucid?: Maybe<Scalars['Boolean']['output']>;
  blockPromotions?: Maybe<Scalars['Boolean']['output']>;
  carrierName?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dob?: Maybe<Scalars['String']['output']>;
  fraudScore: Scalars['Float']['output'];
  gender?: Maybe<UserGender>;
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  loginCount?: Maybe<Scalars['Float']['output']>;
  lucidProfileCompleted: Scalars['Boolean']['output'];
  maxMindScore?: Maybe<Scalars['Float']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  mobileCountryCode?: Maybe<Scalars['String']['output']>;
  mobileNetworkCode?: Maybe<Scalars['String']['output']>;
  newPanel?: Maybe<Scalars['Boolean']['output']>;
  panelistReviewStatus?: Maybe<PanelistReviewStatus>;
  paymentWithdrawals: Array<Maybe<PaymentWithdrawal>>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneNumberType?: Maybe<Scalars['String']['output']>;
  pointHistory: Array<Maybe<PointHistory>>;
  pointsWithdrawn?: Maybe<Scalars['Float']['output']>;
  privacyPolicy?: Maybe<Scalars['Boolean']['output']>;
  scamalyticsScore: Scalars['Float']['output'];
  signupSource?: Maybe<PanelistSignupSource>;
  signupSurveyResponse: Array<Maybe<SignupSurveyResponse>>;
  state?: Maybe<Scalars['String']['output']>;
  termsAndConditions?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  verifyTokenExpired?: Maybe<Scalars['Boolean']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type PanelistPayload = {
  __typename?: 'PanelistPayload';
  panelist?: Maybe<Panelist>;
  response?: Maybe<ResponsePayload>;
};

/** PanelistReviewStatus */
export enum PanelistReviewStatus {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Pending = 'PENDING',
  UpdateNeeded = 'UPDATE_NEEDED'
}

/** PanelistSignupSource */
export enum PanelistSignupSource {
  Cake = 'CAKE',
  ClickWorks = 'CLICK_WORKS',
  Manual = 'MANUAL',
  Panthera = 'PANTHERA'
}

export type PaymentWithdrawal = {
  __typename?: 'PaymentWithdrawal';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  panelist?: Maybe<Panelist>;
  panelistId: Scalars['String']['output'];
  points: Scalars['String']['output'];
  status: PaymentWithdrawalStatus;
  type?: Maybe<PaymentWithdrawalType>;
  updatedAt: Scalars['String']['output'];
};

export type PaymentWithdrawalPayload = {
  __typename?: 'PaymentWithdrawalPayload';
  paymentWithdrawal?: Maybe<PaymentWithdrawal>;
  response?: Maybe<ResponsePayload>;
};

/** Payment Withdrawal Status */
export enum PaymentWithdrawalStatus {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  DeliveryFailed = 'DELIVERY_FAILED',
  Requested = 'REQUESTED'
}

/** Payment Withdrawal Type */
export enum PaymentWithdrawalType {
  GiftCard = 'GIFT_CARD',
  Paypal = 'PAYPAL'
}

export type PaymentWithdrawalsPayload = {
  __typename?: 'PaymentWithdrawalsPayload';
  pagination?: Maybe<PaginationPayload>;
  paymentWithdrawals: Array<Maybe<PaymentWithdrawal>>;
};

export type PointHistoriesPayload = {
  __typename?: 'PointHistoriesPayload';
  pagination?: Maybe<PaginationPayload>;
  pointHistory: Array<Maybe<PointHistory>>;
};

export type PointHistory = {
  __typename?: 'PointHistory';
  createdAt: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  panelist?: Maybe<Panelist>;
  panelistId: Scalars['String']['output'];
  points: Scalars['String']['output'];
  surveyId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  archive: Scalars['Boolean']['output'];
  client?: Maybe<Company>;
  clientId?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dataQuality: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lifecycle?: Maybe<ProjectLifecycle>;
  methodology?: Maybe<ProjectMethodology>;
  projectUsers: Array<Maybe<ProjectUser>>;
  quotaGroup?: Maybe<Array<Maybe<QuotaGroup>>>;
  security?: Maybe<ProjectSecurity>;
  surveyResult: Array<Maybe<SurveyResult>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ProjectIdInput = {
  id: Scalars['String']['input'];
};

/** The project lifecycle */
export enum ProjectLifecycle {
  Closes = 'CLOSES',
  Open = 'OPEN'
}

/** The project methodology */
export enum ProjectMethodology {
  Cati = 'CATI',
  Facetoface = 'FACETOFACE',
  Online = 'ONLINE'
}

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  project?: Maybe<Project>;
  response?: Maybe<ResponsePayload>;
};

export type ProjectResultIdInput = {
  id: Scalars['String']['input'];
};

export type ProjectResultPayload = {
  __typename?: 'ProjectResultPayload';
  projectResult?: Maybe<SurveyResult>;
  response?: Maybe<ResponsePayload>;
};

/** The project security */
export enum ProjectSecurity {
  High = 'HIGH',
  Low = 'LOW'
}

export type ProjectUser = {
  __typename?: 'ProjectUser';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isHeadManager?: Maybe<Scalars['Boolean']['output']>;
  isSalesManager?: Maybe<Scalars['Boolean']['output']>;
  projectId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ProjectUserPayload = {
  __typename?: 'ProjectUserPayload';
  projectUser?: Maybe<ProjectUser>;
  response?: Maybe<ResponsePayload>;
};

export type ProjectsPayload = {
  __typename?: 'ProjectsPayload';
  pagination?: Maybe<PaginationPayload>;
  projects: Array<Maybe<Project>>;
  response?: Maybe<ResponsePayload>;
};

export type ProjectsResultsPayload = {
  __typename?: 'ProjectsResultsPayload';
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
  results: Array<Maybe<SurveyResult>>;
};

export type Query = {
  __typename?: 'Query';
  fetchAllCompanies: FetchCompaniesPayload;
  fetchAllPanelists: FetchPanelistPayload;
  fetchAllProjects: ProjectsPayload;
  fetchAllQuotas: FetchQuotaPayload;
  fetchAllRoles: RolesPayload;
  fetchAllSuppliers: FetchSuppliersPayload;
  fetchAllUsers: UsersPayload;
  fetchCpiStats: FetchCpiStatsPayload;
  fetchDashboardData: FetchDashboardPayload;
  fetchLatestLucidSurveyLogs: FetchLucidSurveyLogPayload;
  fetchLucidSurveyBySurveyId: FetchLucidSurveyPayload;
  fetchLucidSurveys: FetchLucidSurveysPayload;
  fetchPanelist: PanelistPayload;
  fetchPanelistByUserId: PanelistPayload;
  fetchPanelistFusionSurvey: FetchFusionSurveyPayload;
  fetchPanelistPointHistory: PointHistoriesPayload;
  fetchPaymentWithdrawals: PaymentWithdrawalsPayload;
  fetchProject: ProjectPayload;
  fetchProjectQuotaGroups: FetchQuotaGroupsPayload;
  fetchProjectStats: SubmissionStatsPayload;
  fetchProjectSuppliers: FetchSuppliersPayload;
  fetchSurveyResultById: SurveyResultPayload;
  fetchSurveyResults: ProjectsResultsPayload;
  fetchUser: UserPayload;
  getAttachment: AttachmentMediaPayload;
  getAttachments: AttachmentsPayload;
  getUser: UserPayload;
  me: UserPayload;
  searchUser: UsersPayload;
  validateLucidSurveyAvailability: ValidateSurveyAvailabilityPayload;
};


export type QueryFetchAllCompaniesArgs = {
  companiesInput: FetchCompaniesInput;
};


export type QueryFetchAllPanelistsArgs = {
  fetchPanelistsInput: FetchPanelistsInput;
};


export type QueryFetchAllProjectsArgs = {
  projectInput: FetchProjectsInput;
};


export type QueryFetchAllQuotasArgs = {
  fetchAllQuotasInput: FetchAllQuotasInput;
};


export type QueryFetchAllSuppliersArgs = {
  suppliersInput: FetchSuppliersInput;
};


export type QueryFetchAllUsersArgs = {
  userInput: UsersInput;
};


export type QueryFetchLatestLucidSurveyLogsArgs = {
  fetchLucidSurveyLogsInput: FetchLucidSurveyLogsInput;
};


export type QueryFetchLucidSurveyBySurveyIdArgs = {
  fetchLucidSurveyInput: FetchLucidSurveyBySurveyIdInput;
};


export type QueryFetchLucidSurveysArgs = {
  fetchLucidSurveysInput: FetchLucidSurveyForPanelistInput;
};


export type QueryFetchPanelistArgs = {
  fetchPanelistInput: FetchPanelistInput;
};


export type QueryFetchPanelistByUserIdArgs = {
  fetchPanelistByUserIdInput: FetchPanelistByUserIdInput;
};


export type QueryFetchPanelistFusionSurveyArgs = {
  fetchFusionSurveyInput: FetchFusionSurveyInput;
};


export type QueryFetchPanelistPointHistoryArgs = {
  fetchPanelistPointHistory: FetchPanelistPointHistory;
};


export type QueryFetchPaymentWithdrawalsArgs = {
  paymentWithdrawalsInput: FetchPaymentWithdrawalsInput;
};


export type QueryFetchProjectArgs = {
  project: ProjectIdInput;
};


export type QueryFetchProjectQuotaGroupsArgs = {
  fetchProjectQuotaGroups: FetchAllQuotaGroupsInput;
};


export type QueryFetchProjectStatsArgs = {
  project: ProjectIdInput;
};


export type QueryFetchProjectSuppliersArgs = {
  suppliersInput: FetchProjectSuppliersInput;
};


export type QueryFetchSurveyResultByIdArgs = {
  surveyResult: FetchSurveyResultById;
};


export type QueryFetchSurveyResultsArgs = {
  projectResult: FetchProjectResults;
};


export type QueryGetAttachmentArgs = {
  getMedia: GetMedia;
};


export type QueryGetAttachmentsArgs = {
  getAttachment: GetAttachment;
};


export type QueryGetUserArgs = {
  getUser: GetUser;
};


export type QuerySearchUserArgs = {
  searchUserInput: SearchUserInput;
};


export type QueryValidateLucidSurveyAvailabilityArgs = {
  validateSurveyAvailabilityInput: ValidatePanelistSurveyAvailabilityInput;
};

export type Quota = {
  __typename?: 'Quota';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  quotaGroup?: Maybe<Array<QuotaGroup>>;
  type: QuotaType;
  updatedAt: Scalars['String']['output'];
};

export type QuotaGroup = {
  __typename?: 'QuotaGroup';
  completeCap?: Maybe<Scalars['String']['output']>;
  completeCapLeft?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectId: Scalars['String']['output'];
  quota: Array<Maybe<Quota>>;
  supplierQuotaGroup?: Maybe<Array<SupplierQuotaGroup>>;
  surveyEntryLink?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type QuotaGroupPayload = {
  __typename?: 'QuotaGroupPayload';
  quotaGroup?: Maybe<QuotaGroup>;
  response?: Maybe<ResponsePayload>;
};

/** QuotaType */
export enum QuotaType {
  Age = 'AGE',
  Gender = 'GENDER',
  Region = 'REGION'
}

export type RegisterPanelistInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  fraudScore?: InputMaybe<Scalars['Float']['input']>;
  gender?: InputMaybe<UserGender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maxMindScore?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Platform>;
  privacyPolicy?: InputMaybe<Scalars['Boolean']['input']>;
  responses: Array<CreateBulkSignupSurveyResponseInput>;
  /** Send Investor Type from the ENUM - Sign-up */
  roleType: UserRole;
  scamalyticsScore?: InputMaybe<Scalars['Float']['input']>;
  signupSource?: InputMaybe<PanelistSignupSource>;
  state?: InputMaybe<Scalars['String']['input']>;
  termsAndConditions?: InputMaybe<Scalars['Boolean']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterPanelistMobileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  affiliateId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  fraudScore?: InputMaybe<Scalars['Float']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maxMindScore?: InputMaybe<Scalars['Float']['input']>;
  newPanel?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Platform>;
  privacyPolicy?: InputMaybe<Scalars['Boolean']['input']>;
  /** Send Investor Type from the ENUM - Sign-up */
  roleType: UserRole;
  scamalyticsScore?: InputMaybe<Scalars['Float']['input']>;
  signupSource?: InputMaybe<PanelistSignupSource>;
  termsAndConditions?: InputMaybe<Scalars['Boolean']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  /** Send Investor Type from the ENUM - Sign-up */
  roleType: UserRole;
};

export type RemoveAttachment = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCompanyInput = {
  id: Scalars['String']['input'];
};

export type RemovePanelistInput = {
  id: Scalars['String']['input'];
};

export type RemovePaymentWithdrawalRequest = {
  id: Scalars['String']['input'];
};

export type RemoveQuotaGroupInput = {
  id: Scalars['String']['input'];
};

export type RemoveSupplierInput = {
  id: Scalars['String']['input'];
};

export type RemoveSupplierQuotaGroupInput = {
  id: Scalars['String']['input'];
};

export type ResendVerificationEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResponsePayload = {
  __typename?: 'ResponsePayload';
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

export type ResponsePayloadResponse = {
  __typename?: 'ResponsePayloadResponse';
  response?: Maybe<ResponsePayload>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export type RolesPayload = {
  __typename?: 'RolesPayload';
  response?: Maybe<ResponsePayload>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type SearchUserInput = {
  searchTerm: Scalars['String']['input'];
};

export type SendOtpToPanelistCodeInput = {
  phoneNumber: Scalars['String']['input'];
};

export type SignupSurveyResponse = {
  __typename?: 'SignupSurveyResponse';
  answer: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  panelist?: Maybe<Panelist>;
  panelistId: Scalars['String']['output'];
  question: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type SubmissionStats = {
  __typename?: 'SubmissionStats';
  companyName?: Maybe<Scalars['String']['output']>;
  completeCap?: Maybe<Scalars['String']['output']>;
  completedResponses: Scalars['String']['output'];
  initializedResponses: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  quotaGroupId?: Maybe<Scalars['String']['output']>;
  quotaGroupName?: Maybe<Scalars['String']['output']>;
  quotaResponses: Scalars['String']['output'];
  securityTerminateResponses: Scalars['String']['output'];
  supplierCompleteCapLeft?: Maybe<Scalars['String']['output']>;
  terminatedResponses: Scalars['String']['output'];
};

export type SubmissionStatsPayload = {
  __typename?: 'SubmissionStatsPayload';
  response?: Maybe<ResponsePayload>;
  stats: Array<SubmissionStats>;
};

export type Supplier = {
  __typename?: 'Supplier';
  companyName?: Maybe<Scalars['String']['output']>;
  completeLink?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  hashEnabled: Scalars['Boolean']['output'];
  hashPrivetKey?: Maybe<Scalars['String']['output']>;
  hashPrivetKeyVariableName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  quotaFullLink?: Maybe<Scalars['String']['output']>;
  securityLink?: Maybe<Scalars['String']['output']>;
  supplierQuotaGroup?: Maybe<Array<SupplierQuotaGroup>>;
  surveyEntryLink?: Maybe<Scalars['String']['output']>;
  terminateLink?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SupplierPayload = {
  __typename?: 'SupplierPayload';
  response?: Maybe<ResponsePayload>;
  supplier?: Maybe<Supplier>;
};

export type SupplierQuotaGroup = {
  __typename?: 'SupplierQuotaGroup';
  completeCap?: Maybe<Scalars['String']['output']>;
  completeLink?: Maybe<Scalars['String']['output']>;
  cpi?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  offerId?: Maybe<Scalars['String']['output']>;
  quotaFullLink?: Maybe<Scalars['String']['output']>;
  quotaGroup?: Maybe<QuotaGroup>;
  quotaGroupId: Scalars['String']['output'];
  securityLink?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Supplier>;
  supplierCompleteCapLeft?: Maybe<Scalars['String']['output']>;
  supplierId: Scalars['String']['output'];
  supplierResults?: Maybe<Array<Maybe<SurveyResult>>>;
  surveyEntryLink?: Maybe<Scalars['String']['output']>;
  terminateLink?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SupplierToQuotaGroupPayload = {
  __typename?: 'SupplierToQuotaGroupPayload';
  response?: Maybe<ResponsePayload>;
  supplierQuotaGroup?: Maybe<SupplierQuotaGroup>;
};

/** The Survey Match */
export enum SurveyMatch {
  Full = 'FULL',
  Partial = 'PARTIAL'
}

export type SurveyResult = {
  __typename?: 'SurveyResult';
  clientStatus?: Maybe<Scalars['String']['output']>;
  cpi: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dataQualityScore: Scalars['Float']['output'];
  defenderApiScore: Scalars['Float']['output'];
  fullUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  marketPlaceStatus?: Maybe<Scalars['String']['output']>;
  maxMindScore: Scalars['Float']['output'];
  panelistId: Scalars['String']['output'];
  project?: Maybe<Project>;
  projectId: Scalars['String']['output'];
  proofCpi?: Maybe<Scalars['String']['output']>;
  proofStatus?: Maybe<Scalars['String']['output']>;
  proofSurveyNumber?: Maybe<Scalars['String']['output']>;
  resultFinalized?: Maybe<Scalars['Boolean']['output']>;
  scamalyticsScore: Scalars['Float']['output'];
  supplierQuotaGroup?: Maybe<SupplierQuotaGroup>;
  supplierQuotaGroupId?: Maybe<Scalars['String']['output']>;
  surveyEndTime?: Maybe<Scalars['String']['output']>;
  surveyId?: Maybe<Scalars['String']['output']>;
  surveyResultStatus: SurveyResultStatus;
  surveySource: SurveySource;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SurveyResultPayload = {
  __typename?: 'SurveyResultPayload';
  response?: Maybe<ResponsePayload>;
  surveyResult?: Maybe<SurveyResult>;
};

/** The survey result status */
export enum SurveyResultStatus {
  Completed = 'COMPLETED',
  DailySurveyInvite = 'DAILY_SURVEY_INVITE',
  Initialized = 'INITIALIZED',
  InternalSecurityTerminate = 'INTERNAL_SECURITY_TERMINATE',
  Quota = 'QUOTA',
  SecurityTerminate = 'SECURITY_TERMINATE',
  Terminate = 'TERMINATE'
}

/** The survey source */
export enum SurveySource {
  FusionSurvey = 'FUSION_SURVEY',
  LucidSurvey = 'LUCID_SURVEY',
  NomadicSurvey = 'NOMADIC_SURVEY'
}

export type UpdateAttachmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  /** enum type for module type - Upload Media */
  type?: InputMaybe<AttachmentType>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyInput = {
  clientNumber?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePanelistInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  blockPromotions?: InputMaybe<Scalars['Boolean']['input']>;
  carrierName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  fraudScore?: InputMaybe<Scalars['Float']['input']>;
  gender?: InputMaybe<UserGender>;
  id: Scalars['String']['input'];
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  loginCount?: InputMaybe<Scalars['Float']['input']>;
  lucidProfileCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  maxMindScore?: InputMaybe<Scalars['Float']['input']>;
  mobileCountryCode?: InputMaybe<Scalars['String']['input']>;
  mobileNetworkCode?: InputMaybe<Scalars['String']['input']>;
  panelistReviewStatus?: InputMaybe<PanelistReviewStatus>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneNumberType?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Platform>;
  privacyPolicy?: InputMaybe<Scalars['Boolean']['input']>;
  scamalyticsScore?: InputMaybe<Scalars['Float']['input']>;
  signupSource?: InputMaybe<PanelistSignupSource>;
  state?: InputMaybe<Scalars['String']['input']>;
  termsAndConditions?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdatePaymentWithdrawalRequest = {
  id: Scalars['String']['input'];
  status: PaymentWithdrawalStatus;
};

export type UpdateProjectInput = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  dataQuality?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lifecycle?: InputMaybe<ProjectLifecycle>;
  methodology?: InputMaybe<ProjectMethodology>;
  security?: InputMaybe<ProjectSecurity>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectResultStatusInput = {
  dataQualityScore?: InputMaybe<Scalars['Float']['input']>;
  defenderApiScore?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  maxMindScore?: InputMaybe<Scalars['Float']['input']>;
  resultFinalized?: InputMaybe<Scalars['Boolean']['input']>;
  scamalyticsScore?: InputMaybe<Scalars['Float']['input']>;
  surveyResultStatus: SurveyResultStatus;
};

export type UpdateProjectUserInput = {
  id: Scalars['String']['input'];
  isHeadManager?: InputMaybe<Scalars['Boolean']['input']>;
  isSalesManager?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateQuotaGroupInput = {
  completeCap?: InputMaybe<Scalars['String']['input']>;
  completeCapLeft?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  surveyEntryLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  id: Scalars['String']['input'];
  roles: Array<UserRole>;
};

export type UpdateSignupSurveyResponseInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateSignupSurveyResponsePayload = {
  __typename?: 'UpdateSignupSurveyResponsePayload';
  response?: Maybe<ResponsePayload>;
  signupSurveyResponse?: Maybe<SignupSurveyResponse>;
};

export type UpdateSupplierInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  completeLink?: InputMaybe<Scalars['String']['input']>;
  hashEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  hashPrivetKey?: InputMaybe<Scalars['String']['input']>;
  hashPrivetKeyVariableName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  quotaFullLink?: InputMaybe<Scalars['String']['input']>;
  securityLink?: InputMaybe<Scalars['String']['input']>;
  terminateLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSupplierQuotaGroupInput = {
  completeCap?: InputMaybe<Scalars['String']['input']>;
  completeLink?: InputMaybe<Scalars['String']['input']>;
  cpi?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  offerId?: InputMaybe<Scalars['String']['input']>;
  quotaFullLink?: InputMaybe<Scalars['String']['input']>;
  quotaGroupId?: InputMaybe<Scalars['String']['input']>;
  securityLink?: InputMaybe<Scalars['String']['input']>;
  supplierCompleteCapLeft?: InputMaybe<Scalars['String']['input']>;
  surveyEntryLink?: InputMaybe<Scalars['String']['input']>;
  terminateLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSurveyResultWithIdReConciliationInput = {
  resultIds: Array<Scalars['String']['input']>;
  surveyResultStatuses: Array<SurveyResultStatus>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  roles: Array<Maybe<Role>>;
  status: UserStatus;
  updatedAt: Scalars['String']['output'];
};

/** The user gender */
export enum UserGender {
  Decline = 'DECLINE',
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type UserIdInput = {
  userId: Scalars['String']['input'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  response?: Maybe<ResponsePayload>;
  user?: Maybe<User>;
};

/** The user role assigned */
export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Manager = 'MANAGER',
  MedPanel = 'MED_PANEL',
  Panelist = 'PANELIST',
  SuperAdmin = 'SUPER_ADMIN',
  Supplier = 'SUPPLIER'
}

/** The user status */
export enum UserStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED'
}

export type UsersInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  roles?: InputMaybe<Array<UserRole>>;
  status?: InputMaybe<UserStatus>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  pagination?: Maybe<PaginationPayload>;
  response?: Maybe<ResponsePayload>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type ValidateLucidSurveyInput = {
  panelistId: Scalars['String']['input'];
  surveyId: Scalars['String']['input'];
};

export type ValidatePanelistSurveyAvailabilityInput = {
  panelistId: Scalars['String']['input'];
  surveyId: Scalars['String']['input'];
};

export type ValidateSurveyAvailabilityPayload = {
  __typename?: 'ValidateSurveyAvailabilityPayload';
  response?: Maybe<ResponsePayload>;
  surveyAvailable: Scalars['Boolean']['output'];
};

export type ValidateSurveyPayload = {
  __typename?: 'ValidateSurveyPayload';
  local: Scalars['Boolean']['output'];
  response?: Maybe<ResponsePayload>;
  url: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
};

export type VerifyMobileNoResponsePayload = {
  __typename?: 'VerifyMobileNoResponsePayload';
  response?: Maybe<ResponsePayload>;
  verificationResponse?: Maybe<VerifyResponsePayload>;
};

export type VerifyOtpInput = {
  otp: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type VerifyResponsePayload = {
  __typename?: 'VerifyResponsePayload';
  carrierName?: Maybe<Scalars['String']['output']>;
  mobileCountryCode?: Maybe<Scalars['String']['output']>;
  mobileNetworkCode?: Maybe<Scalars['String']['output']>;
  phoneNumberType?: Maybe<Scalars['String']['output']>;
};

export type VerifyUserAndUpdatePasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  loginUser: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessUserPayload', access_token?: string | null, response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, roles?: Array<{ __typename?: 'Role', id: string, role: UserRole }> | null } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPassword: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null } };

export type VerifyEmailAndSetPasswordMutationVariables = Exact<{
  verifyEmailAndSetPassword: VerifyUserAndUpdatePasswordInput;
}>;


export type VerifyEmailAndSetPasswordMutation = { __typename?: 'Mutation', verifyEmailAndSetPassword: { __typename?: 'UserPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, user?: { __typename?: 'User', email: string } | null } };

export type VerifyPanelistEmailAndSetPasswordMutationVariables = Exact<{
  verifyPanelistEmailAndSetPasswordInput: VerifyUserAndUpdatePasswordInput;
}>;


export type VerifyPanelistEmailAndSetPasswordMutation = { __typename?: 'Mutation', verifyPanelistEmailAndSetPassword: { __typename?: 'ResponsePayloadResponse', response?: { __typename?: 'ResponsePayload', status?: number | null, message?: string | null } | null } };

export type HandleBlockUnblockPromotionMainMutationVariables = Exact<{
  updatePanelistInput: UpdatePanelistInput;
}>;


export type HandleBlockUnblockPromotionMainMutation = { __typename?: 'Mutation', updatePanelist: { __typename?: 'PanelistPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null, name?: string | null } | null } };

export type CreateWithdrawalRequestMutationVariables = Exact<{
  createPaymentWithdrawalRequest: CreatePaymentWithdrawalRequest;
}>;


export type CreateWithdrawalRequestMutation = { __typename?: 'Mutation', createWithdrawalRequest: { __typename?: 'PaymentWithdrawalPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, paymentWithdrawal?: { __typename?: 'PaymentWithdrawal', id: string, status: PaymentWithdrawalStatus, panelistId: string, points: string, createdAt: string, updatedAt: string } | null } };

export type FetchPanelistPointHistoryQueryVariables = Exact<{
  fetchPanelistPointHistory: FetchPanelistPointHistory;
}>;


export type FetchPanelistPointHistoryQuery = { __typename?: 'Query', fetchPanelistPointHistory: { __typename?: 'PointHistoriesPayload', pointHistory: Array<{ __typename?: 'PointHistory', id: string, details?: string | null, panelistId: string, points: string, createdAt: string, updatedAt: string } | null>, pagination?: { __typename?: 'PaginationPayload', page?: number | null, limit?: number | null, totalCount?: number | null, totalPages?: number | null } | null } };

export type UpdatePanelistMutationVariables = Exact<{
  updatePanelistInput: UpdatePanelistInput;
}>;


export type UpdatePanelistMutation = { __typename?: 'Mutation', updatePanelist: { __typename?: 'PanelistPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null } };

export type FetchPanelistByUserIdQueryVariables = Exact<{
  fetchPanelistByUserIdInput: FetchPanelistByUserIdInput;
}>;


export type FetchPanelistByUserIdQuery = { __typename?: 'Query', fetchPanelistByUserId: { __typename?: 'PanelistPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, panelist?: { __typename?: 'Panelist', id: string, phone?: string | null, address?: string | null, city?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, gender?: UserGender | null, dob?: string | null, userId: string, blockPromotions?: boolean | null, timezone?: string | null, availablePoints?: number | null, pointsWithdrawn?: number | null, lucidProfileCompleted: boolean, blockFromLucid?: boolean | null, signupSurveyResponse: Array<{ __typename?: 'SignupSurveyResponse', id: string, question: string, answer: string, panelistId: string, createdAt: string, updatedAt: string } | null>, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status: UserStatus, emailVerified: boolean, email: string, roles: Array<{ __typename?: 'Role', id: string, role: UserRole } | null> } | null } | null } };

export type LoggedInUserQueryVariables = Exact<{ [key: string]: never; }>;


export type LoggedInUserQuery = { __typename?: 'Query', me: { __typename?: 'UserPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status: UserStatus, emailVerified: boolean, email: string, roles: Array<{ __typename?: 'Role', id: string, role: UserRole } | null> } | null } };

export type CreateMobilePanelistMutationVariables = Exact<{
  registerPanelistInput: RegisterPanelistMobileInput;
}>;


export type CreateMobilePanelistMutation = { __typename?: 'Mutation', createMobilePanelist: { __typename?: 'PanelistPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, message?: string | null, name?: string | null } | null } };

export type ResetPasswordMutationVariables = Exact<{
  resetPassword: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'UserPayload', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status: UserStatus, emailVerified: boolean, email: string, createdAt: string, updatedAt: string } | null, response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null, name?: string | null } | null } };

export type CreateSignupSurveyResponsesMutationVariables = Exact<{
  createSignupSurveyResponses: CreateSignupSurveyResponse;
}>;


export type CreateSignupSurveyResponsesMutation = { __typename?: 'Mutation', createSignupSurveyResponses: { __typename?: 'PanelistPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, panelist?: { __typename?: 'Panelist', id: string, phone?: string | null, address?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, gender?: UserGender | null, dob?: string | null, userId: string, blockPromotions?: boolean | null, timezone?: string | null, availablePoints?: number | null, pointsWithdrawn?: number | null, lucidProfileCompleted: boolean, signupSurveyResponse: Array<{ __typename?: 'SignupSurveyResponse', id: string, question: string, answer: string, panelistId: string, createdAt: string, updatedAt: string } | null> } | null } };

export type VerifyTwilioMobileNumberMutationVariables = Exact<{
  mobileNumber: MobileNumberInput;
}>;


export type VerifyTwilioMobileNumberMutation = { __typename?: 'Mutation', verifyTwilioMobileNumber: { __typename?: 'VerifyMobileNoResponsePayload', verificationResponse?: { __typename?: 'VerifyResponsePayload', phoneNumberType?: string | null, mobileNetworkCode?: string | null, mobileCountryCode?: string | null, carrierName?: string | null } | null, response?: { __typename?: 'ResponsePayload', status?: number | null, message?: string | null } | null } };

export type FetchPanelistFusionSurveyQueryVariables = Exact<{
  fetchFusionSurveyInput: FetchFusionSurveyInput;
}>;


export type FetchPanelistFusionSurveyQuery = { __typename?: 'Query', fetchPanelistFusionSurvey: { __typename?: 'FetchFusionSurveyPayload', respondentId: string, memberId: string, response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null, name?: string | null } | null, surveys: Array<{ __typename?: 'FusionSurveyType', surveyId: string, cpi: number, estimatedLoi: number, fullOrPartialMatch: SurveyMatch, entryLink: string } | null> } };

export type FetchLucidSurveysQueryVariables = Exact<{
  fetchLucidSurveysInput: FetchLucidSurveyForPanelistInput;
}>;


export type FetchLucidSurveysQuery = { __typename?: 'Query', fetchLucidSurveys: { __typename?: 'FetchLucidSurveysPayload', response?: { __typename?: 'ResponsePayload', message?: string | null, status?: number | null } | null, surveys: Array<{ __typename?: 'LucidSurvey', id: string, surveyId: string, quotaLeft: number, cpi: number, conversionRate: number, interviewLength: number, forCountry: string, createdAt: string, updatedAt: string } | null>, pagination?: { __typename?: 'PaginationPayload', page?: number | null, limit?: number | null, totalPages?: number | null, totalCount?: number | null } | null } };

export type ValidateLucidSurveyMutationVariables = Exact<{
  validateLucidSurveyInput: ValidateLucidSurveyInput;
}>;


export type ValidateLucidSurveyMutation = { __typename?: 'Mutation', validateLucidSurvey: { __typename?: 'ValidateSurveyPayload', url: string, local: boolean, response?: { __typename?: 'ResponsePayload', status?: number | null, message?: string | null } | null } };

export type UpdateUserMutationVariables = Exact<{
  userInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status: UserStatus, email: string, createdAt: string, updatedAt: string, emailVerified: boolean, roles: Array<{ __typename?: 'Role', id: string, role: UserRole, createdAt: string, updatedAt: string } | null> } | null } };

export type UpdatePasswordMutationVariables = Exact<{
  updatePasswordInput: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UserPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, error?: string | null, message?: string | null } | null } };

export type DeactivateUserMutationVariables = Exact<{
  userInput: UserIdInput;
}>;


export type DeactivateUserMutation = { __typename?: 'Mutation', deactivateUser: { __typename?: 'UserPayload', response?: { __typename?: 'ResponsePayload', status?: number | null, message?: string | null, error?: string | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status: UserStatus, email: string, emailVerified: boolean, createdAt: string, updatedAt: string, roles: Array<{ __typename?: 'Role', id: string, role: UserRole, createdAt: string, updatedAt: string } | null> } | null } };

export type FetchPaymentWithdrawalsQueryVariables = Exact<{
  paymentWithdrawalsInput: FetchPaymentWithdrawalsInput;
}>;


export type FetchPaymentWithdrawalsQuery = { __typename?: 'Query', fetchPaymentWithdrawals: { __typename?: 'PaymentWithdrawalsPayload', pagination?: { __typename?: 'PaginationPayload', page?: number | null, limit?: number | null, totalCount?: number | null, totalPages?: number | null } | null, paymentWithdrawals: Array<{ __typename?: 'PaymentWithdrawal', id: string, status: PaymentWithdrawalStatus, panelistId: string, points: string, createdAt: string, updatedAt: string } | null> } };


export const LoginDocument = gql`
    mutation Login($loginUser: LoginUserInput!) {
  login(loginUser: $loginUser) {
    response {
      status
      error
      message
    }
    roles {
      id
      role
    }
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUser: // value for 'loginUser'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPassword: ForgotPasswordInput!) {
  forgotPassword(forgotPassword: $forgotPassword) {
    response {
      status
      error
      message
    }
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPassword: // value for 'forgotPassword'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const VerifyEmailAndSetPasswordDocument = gql`
    mutation VerifyEmailAndSetPassword($verifyEmailAndSetPassword: VerifyUserAndUpdatePasswordInput!) {
  verifyEmailAndSetPassword(verifyEmailAndSetPassword: $verifyEmailAndSetPassword) {
    response {
      status
      error
      message
    }
    user {
      email
    }
  }
}
    `;
export type VerifyEmailAndSetPasswordMutationFn = Apollo.MutationFunction<VerifyEmailAndSetPasswordMutation, VerifyEmailAndSetPasswordMutationVariables>;

/**
 * __useVerifyEmailAndSetPasswordMutation__
 *
 * To run a mutation, you first call `useVerifyEmailAndSetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailAndSetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailAndSetPasswordMutation, { data, loading, error }] = useVerifyEmailAndSetPasswordMutation({
 *   variables: {
 *      verifyEmailAndSetPassword: // value for 'verifyEmailAndSetPassword'
 *   },
 * });
 */
export function useVerifyEmailAndSetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailAndSetPasswordMutation, VerifyEmailAndSetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailAndSetPasswordMutation, VerifyEmailAndSetPasswordMutationVariables>(VerifyEmailAndSetPasswordDocument, options);
      }
export type VerifyEmailAndSetPasswordMutationHookResult = ReturnType<typeof useVerifyEmailAndSetPasswordMutation>;
export type VerifyEmailAndSetPasswordMutationResult = Apollo.MutationResult<VerifyEmailAndSetPasswordMutation>;
export type VerifyEmailAndSetPasswordMutationOptions = Apollo.BaseMutationOptions<VerifyEmailAndSetPasswordMutation, VerifyEmailAndSetPasswordMutationVariables>;
export const VerifyPanelistEmailAndSetPasswordDocument = gql`
    mutation VerifyPanelistEmailAndSetPassword($verifyPanelistEmailAndSetPasswordInput: VerifyUserAndUpdatePasswordInput!) {
  verifyPanelistEmailAndSetPassword(
    verifyPanelistEmailAndSetPasswordInput: $verifyPanelistEmailAndSetPasswordInput
  ) {
    response {
      status
      message
    }
  }
}
    `;
export type VerifyPanelistEmailAndSetPasswordMutationFn = Apollo.MutationFunction<VerifyPanelistEmailAndSetPasswordMutation, VerifyPanelistEmailAndSetPasswordMutationVariables>;

/**
 * __useVerifyPanelistEmailAndSetPasswordMutation__
 *
 * To run a mutation, you first call `useVerifyPanelistEmailAndSetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyPanelistEmailAndSetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyPanelistEmailAndSetPasswordMutation, { data, loading, error }] = useVerifyPanelistEmailAndSetPasswordMutation({
 *   variables: {
 *      verifyPanelistEmailAndSetPasswordInput: // value for 'verifyPanelistEmailAndSetPasswordInput'
 *   },
 * });
 */
export function useVerifyPanelistEmailAndSetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<VerifyPanelistEmailAndSetPasswordMutation, VerifyPanelistEmailAndSetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyPanelistEmailAndSetPasswordMutation, VerifyPanelistEmailAndSetPasswordMutationVariables>(VerifyPanelistEmailAndSetPasswordDocument, options);
      }
export type VerifyPanelistEmailAndSetPasswordMutationHookResult = ReturnType<typeof useVerifyPanelistEmailAndSetPasswordMutation>;
export type VerifyPanelistEmailAndSetPasswordMutationResult = Apollo.MutationResult<VerifyPanelistEmailAndSetPasswordMutation>;
export type VerifyPanelistEmailAndSetPasswordMutationOptions = Apollo.BaseMutationOptions<VerifyPanelistEmailAndSetPasswordMutation, VerifyPanelistEmailAndSetPasswordMutationVariables>;
export const HandleBlockUnblockPromotionMainDocument = gql`
    mutation handleBlockUnblockPromotionMain($updatePanelistInput: UpdatePanelistInput!) {
  updatePanelist(updatePanelistInput: $updatePanelistInput) {
    response {
      status
      error
      message
      name
    }
  }
}
    `;
export type HandleBlockUnblockPromotionMainMutationFn = Apollo.MutationFunction<HandleBlockUnblockPromotionMainMutation, HandleBlockUnblockPromotionMainMutationVariables>;

/**
 * __useHandleBlockUnblockPromotionMainMutation__
 *
 * To run a mutation, you first call `useHandleBlockUnblockPromotionMainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHandleBlockUnblockPromotionMainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [handleBlockUnblockPromotionMainMutation, { data, loading, error }] = useHandleBlockUnblockPromotionMainMutation({
 *   variables: {
 *      updatePanelistInput: // value for 'updatePanelistInput'
 *   },
 * });
 */
export function useHandleBlockUnblockPromotionMainMutation(baseOptions?: Apollo.MutationHookOptions<HandleBlockUnblockPromotionMainMutation, HandleBlockUnblockPromotionMainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HandleBlockUnblockPromotionMainMutation, HandleBlockUnblockPromotionMainMutationVariables>(HandleBlockUnblockPromotionMainDocument, options);
      }
export type HandleBlockUnblockPromotionMainMutationHookResult = ReturnType<typeof useHandleBlockUnblockPromotionMainMutation>;
export type HandleBlockUnblockPromotionMainMutationResult = Apollo.MutationResult<HandleBlockUnblockPromotionMainMutation>;
export type HandleBlockUnblockPromotionMainMutationOptions = Apollo.BaseMutationOptions<HandleBlockUnblockPromotionMainMutation, HandleBlockUnblockPromotionMainMutationVariables>;
export const CreateWithdrawalRequestDocument = gql`
    mutation CreateWithdrawalRequest($createPaymentWithdrawalRequest: CreatePaymentWithdrawalRequest!) {
  createWithdrawalRequest(
    createPaymentWithdrawalRequest: $createPaymentWithdrawalRequest
  ) {
    response {
      status
      error
      message
    }
    paymentWithdrawal {
      id
      status
      panelistId
      points
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreateWithdrawalRequestMutationFn = Apollo.MutationFunction<CreateWithdrawalRequestMutation, CreateWithdrawalRequestMutationVariables>;

/**
 * __useCreateWithdrawalRequestMutation__
 *
 * To run a mutation, you first call `useCreateWithdrawalRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWithdrawalRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWithdrawalRequestMutation, { data, loading, error }] = useCreateWithdrawalRequestMutation({
 *   variables: {
 *      createPaymentWithdrawalRequest: // value for 'createPaymentWithdrawalRequest'
 *   },
 * });
 */
export function useCreateWithdrawalRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateWithdrawalRequestMutation, CreateWithdrawalRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWithdrawalRequestMutation, CreateWithdrawalRequestMutationVariables>(CreateWithdrawalRequestDocument, options);
      }
export type CreateWithdrawalRequestMutationHookResult = ReturnType<typeof useCreateWithdrawalRequestMutation>;
export type CreateWithdrawalRequestMutationResult = Apollo.MutationResult<CreateWithdrawalRequestMutation>;
export type CreateWithdrawalRequestMutationOptions = Apollo.BaseMutationOptions<CreateWithdrawalRequestMutation, CreateWithdrawalRequestMutationVariables>;
export const FetchPanelistPointHistoryDocument = gql`
    query FetchPanelistPointHistory($fetchPanelistPointHistory: FetchPanelistPointHistory!) {
  fetchPanelistPointHistory(fetchPanelistPointHistory: $fetchPanelistPointHistory) {
    pointHistory {
      id
      details
      panelistId
      points
      createdAt
      updatedAt
    }
    pagination {
      page
      limit
      totalCount
      totalPages
    }
  }
}
    `;

/**
 * __useFetchPanelistPointHistoryQuery__
 *
 * To run a query within a React component, call `useFetchPanelistPointHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPanelistPointHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPanelistPointHistoryQuery({
 *   variables: {
 *      fetchPanelistPointHistory: // value for 'fetchPanelistPointHistory'
 *   },
 * });
 */
export function useFetchPanelistPointHistoryQuery(baseOptions: Apollo.QueryHookOptions<FetchPanelistPointHistoryQuery, FetchPanelistPointHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPanelistPointHistoryQuery, FetchPanelistPointHistoryQueryVariables>(FetchPanelistPointHistoryDocument, options);
      }
export function useFetchPanelistPointHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPanelistPointHistoryQuery, FetchPanelistPointHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPanelistPointHistoryQuery, FetchPanelistPointHistoryQueryVariables>(FetchPanelistPointHistoryDocument, options);
        }
export type FetchPanelistPointHistoryQueryHookResult = ReturnType<typeof useFetchPanelistPointHistoryQuery>;
export type FetchPanelistPointHistoryLazyQueryHookResult = ReturnType<typeof useFetchPanelistPointHistoryLazyQuery>;
export type FetchPanelistPointHistoryQueryResult = Apollo.QueryResult<FetchPanelistPointHistoryQuery, FetchPanelistPointHistoryQueryVariables>;
export const UpdatePanelistDocument = gql`
    mutation UpdatePanelist($updatePanelistInput: UpdatePanelistInput!) {
  updatePanelist(updatePanelistInput: $updatePanelistInput) {
    response {
      status
      error
      message
    }
  }
}
    `;
export type UpdatePanelistMutationFn = Apollo.MutationFunction<UpdatePanelistMutation, UpdatePanelistMutationVariables>;

/**
 * __useUpdatePanelistMutation__
 *
 * To run a mutation, you first call `useUpdatePanelistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePanelistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePanelistMutation, { data, loading, error }] = useUpdatePanelistMutation({
 *   variables: {
 *      updatePanelistInput: // value for 'updatePanelistInput'
 *   },
 * });
 */
export function useUpdatePanelistMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePanelistMutation, UpdatePanelistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePanelistMutation, UpdatePanelistMutationVariables>(UpdatePanelistDocument, options);
      }
export type UpdatePanelistMutationHookResult = ReturnType<typeof useUpdatePanelistMutation>;
export type UpdatePanelistMutationResult = Apollo.MutationResult<UpdatePanelistMutation>;
export type UpdatePanelistMutationOptions = Apollo.BaseMutationOptions<UpdatePanelistMutation, UpdatePanelistMutationVariables>;
export const FetchPanelistByUserIdDocument = gql`
    query FetchPanelistByUserId($fetchPanelistByUserIdInput: FetchPanelistByUserIdInput!) {
  fetchPanelistByUserId(fetchPanelistByUserIdInput: $fetchPanelistByUserIdInput) {
    response {
      status
      error
      message
    }
    panelist {
      id
      phone
      address
      city
      state
      country
      zipCode
      gender
      dob
      userId
      blockPromotions
      timezone
      availablePoints
      pointsWithdrawn
      lucidProfileCompleted
      blockFromLucid
      signupSurveyResponse {
        id
        question
        answer
        panelistId
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        status
        emailVerified
        email
        roles {
          id
          role
        }
      }
    }
  }
}
    `;

/**
 * __useFetchPanelistByUserIdQuery__
 *
 * To run a query within a React component, call `useFetchPanelistByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPanelistByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPanelistByUserIdQuery({
 *   variables: {
 *      fetchPanelistByUserIdInput: // value for 'fetchPanelistByUserIdInput'
 *   },
 * });
 */
export function useFetchPanelistByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FetchPanelistByUserIdQuery, FetchPanelistByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPanelistByUserIdQuery, FetchPanelistByUserIdQueryVariables>(FetchPanelistByUserIdDocument, options);
      }
export function useFetchPanelistByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPanelistByUserIdQuery, FetchPanelistByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPanelistByUserIdQuery, FetchPanelistByUserIdQueryVariables>(FetchPanelistByUserIdDocument, options);
        }
export type FetchPanelistByUserIdQueryHookResult = ReturnType<typeof useFetchPanelistByUserIdQuery>;
export type FetchPanelistByUserIdLazyQueryHookResult = ReturnType<typeof useFetchPanelistByUserIdLazyQuery>;
export type FetchPanelistByUserIdQueryResult = Apollo.QueryResult<FetchPanelistByUserIdQuery, FetchPanelistByUserIdQueryVariables>;
export const LoggedInUserDocument = gql`
    query LoggedInUser {
  me {
    response {
      status
      error
      message
    }
    user {
      id
      firstName
      lastName
      status
      emailVerified
      email
      roles {
        id
        role
      }
    }
  }
}
    `;

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(baseOptions?: Apollo.QueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
      }
export function useLoggedInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
        }
export type LoggedInUserQueryHookResult = ReturnType<typeof useLoggedInUserQuery>;
export type LoggedInUserLazyQueryHookResult = ReturnType<typeof useLoggedInUserLazyQuery>;
export type LoggedInUserQueryResult = Apollo.QueryResult<LoggedInUserQuery, LoggedInUserQueryVariables>;
export const CreateMobilePanelistDocument = gql`
    mutation CreateMobilePanelist($registerPanelistInput: RegisterPanelistMobileInput!) {
  createMobilePanelist(registerPanelistInput: $registerPanelistInput) {
    response {
      status
      message
      name
    }
  }
}
    `;
export type CreateMobilePanelistMutationFn = Apollo.MutationFunction<CreateMobilePanelistMutation, CreateMobilePanelistMutationVariables>;

/**
 * __useCreateMobilePanelistMutation__
 *
 * To run a mutation, you first call `useCreateMobilePanelistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMobilePanelistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMobilePanelistMutation, { data, loading, error }] = useCreateMobilePanelistMutation({
 *   variables: {
 *      registerPanelistInput: // value for 'registerPanelistInput'
 *   },
 * });
 */
export function useCreateMobilePanelistMutation(baseOptions?: Apollo.MutationHookOptions<CreateMobilePanelistMutation, CreateMobilePanelistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMobilePanelistMutation, CreateMobilePanelistMutationVariables>(CreateMobilePanelistDocument, options);
      }
export type CreateMobilePanelistMutationHookResult = ReturnType<typeof useCreateMobilePanelistMutation>;
export type CreateMobilePanelistMutationResult = Apollo.MutationResult<CreateMobilePanelistMutation>;
export type CreateMobilePanelistMutationOptions = Apollo.BaseMutationOptions<CreateMobilePanelistMutation, CreateMobilePanelistMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($resetPassword: ResetPasswordInput!) {
  resetPassword(resetPassword: $resetPassword) {
    user {
      id
      firstName
      lastName
      status
      emailVerified
      email
      createdAt
      updatedAt
    }
    response {
      status
      error
      message
      name
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPassword: // value for 'resetPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateSignupSurveyResponsesDocument = gql`
    mutation CreateSignupSurveyResponses($createSignupSurveyResponses: CreateSignupSurveyResponse!) {
  createSignupSurveyResponses(
    createSignupSurveyResponses: $createSignupSurveyResponses
  ) {
    response {
      status
      error
      message
    }
    panelist {
      id
      phone
      address
      city
      state
      zipCode
      gender
      dob
      userId
      blockPromotions
      timezone
      availablePoints
      pointsWithdrawn
      lucidProfileCompleted
      signupSurveyResponse {
        id
        question
        answer
        panelistId
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export type CreateSignupSurveyResponsesMutationFn = Apollo.MutationFunction<CreateSignupSurveyResponsesMutation, CreateSignupSurveyResponsesMutationVariables>;

/**
 * __useCreateSignupSurveyResponsesMutation__
 *
 * To run a mutation, you first call `useCreateSignupSurveyResponsesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSignupSurveyResponsesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSignupSurveyResponsesMutation, { data, loading, error }] = useCreateSignupSurveyResponsesMutation({
 *   variables: {
 *      createSignupSurveyResponses: // value for 'createSignupSurveyResponses'
 *   },
 * });
 */
export function useCreateSignupSurveyResponsesMutation(baseOptions?: Apollo.MutationHookOptions<CreateSignupSurveyResponsesMutation, CreateSignupSurveyResponsesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSignupSurveyResponsesMutation, CreateSignupSurveyResponsesMutationVariables>(CreateSignupSurveyResponsesDocument, options);
      }
export type CreateSignupSurveyResponsesMutationHookResult = ReturnType<typeof useCreateSignupSurveyResponsesMutation>;
export type CreateSignupSurveyResponsesMutationResult = Apollo.MutationResult<CreateSignupSurveyResponsesMutation>;
export type CreateSignupSurveyResponsesMutationOptions = Apollo.BaseMutationOptions<CreateSignupSurveyResponsesMutation, CreateSignupSurveyResponsesMutationVariables>;
export const VerifyTwilioMobileNumberDocument = gql`
    mutation VerifyTwilioMobileNumber($mobileNumber: MobileNumberInput!) {
  verifyTwilioMobileNumber(mobileNumber: $mobileNumber) {
    verificationResponse {
      phoneNumberType
      mobileNetworkCode
      mobileCountryCode
      carrierName
    }
    response {
      status
      message
    }
  }
}
    `;
export type VerifyTwilioMobileNumberMutationFn = Apollo.MutationFunction<VerifyTwilioMobileNumberMutation, VerifyTwilioMobileNumberMutationVariables>;

/**
 * __useVerifyTwilioMobileNumberMutation__
 *
 * To run a mutation, you first call `useVerifyTwilioMobileNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTwilioMobileNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTwilioMobileNumberMutation, { data, loading, error }] = useVerifyTwilioMobileNumberMutation({
 *   variables: {
 *      mobileNumber: // value for 'mobileNumber'
 *   },
 * });
 */
export function useVerifyTwilioMobileNumberMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTwilioMobileNumberMutation, VerifyTwilioMobileNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTwilioMobileNumberMutation, VerifyTwilioMobileNumberMutationVariables>(VerifyTwilioMobileNumberDocument, options);
      }
export type VerifyTwilioMobileNumberMutationHookResult = ReturnType<typeof useVerifyTwilioMobileNumberMutation>;
export type VerifyTwilioMobileNumberMutationResult = Apollo.MutationResult<VerifyTwilioMobileNumberMutation>;
export type VerifyTwilioMobileNumberMutationOptions = Apollo.BaseMutationOptions<VerifyTwilioMobileNumberMutation, VerifyTwilioMobileNumberMutationVariables>;
export const FetchPanelistFusionSurveyDocument = gql`
    query FetchPanelistFusionSurvey($fetchFusionSurveyInput: FetchFusionSurveyInput!) {
  fetchPanelistFusionSurvey(fetchFusionSurveyInput: $fetchFusionSurveyInput) {
    response {
      status
      error
      message
      name
    }
    respondentId
    memberId
    surveys {
      surveyId
      cpi
      estimatedLoi
      fullOrPartialMatch
      entryLink
    }
  }
}
    `;

/**
 * __useFetchPanelistFusionSurveyQuery__
 *
 * To run a query within a React component, call `useFetchPanelistFusionSurveyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPanelistFusionSurveyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPanelistFusionSurveyQuery({
 *   variables: {
 *      fetchFusionSurveyInput: // value for 'fetchFusionSurveyInput'
 *   },
 * });
 */
export function useFetchPanelistFusionSurveyQuery(baseOptions: Apollo.QueryHookOptions<FetchPanelistFusionSurveyQuery, FetchPanelistFusionSurveyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPanelistFusionSurveyQuery, FetchPanelistFusionSurveyQueryVariables>(FetchPanelistFusionSurveyDocument, options);
      }
export function useFetchPanelistFusionSurveyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPanelistFusionSurveyQuery, FetchPanelistFusionSurveyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPanelistFusionSurveyQuery, FetchPanelistFusionSurveyQueryVariables>(FetchPanelistFusionSurveyDocument, options);
        }
export type FetchPanelistFusionSurveyQueryHookResult = ReturnType<typeof useFetchPanelistFusionSurveyQuery>;
export type FetchPanelistFusionSurveyLazyQueryHookResult = ReturnType<typeof useFetchPanelistFusionSurveyLazyQuery>;
export type FetchPanelistFusionSurveyQueryResult = Apollo.QueryResult<FetchPanelistFusionSurveyQuery, FetchPanelistFusionSurveyQueryVariables>;
export const FetchLucidSurveysDocument = gql`
    query FetchLucidSurveys($fetchLucidSurveysInput: FetchLucidSurveyForPanelistInput!) {
  fetchLucidSurveys(fetchLucidSurveysInput: $fetchLucidSurveysInput) {
    response {
      message
      status
    }
    surveys {
      id
      surveyId
      quotaLeft
      cpi
      conversionRate
      interviewLength
      forCountry
      createdAt
      updatedAt
    }
    pagination {
      page
      limit
      totalPages
      totalCount
    }
  }
}
    `;

/**
 * __useFetchLucidSurveysQuery__
 *
 * To run a query within a React component, call `useFetchLucidSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLucidSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLucidSurveysQuery({
 *   variables: {
 *      fetchLucidSurveysInput: // value for 'fetchLucidSurveysInput'
 *   },
 * });
 */
export function useFetchLucidSurveysQuery(baseOptions: Apollo.QueryHookOptions<FetchLucidSurveysQuery, FetchLucidSurveysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchLucidSurveysQuery, FetchLucidSurveysQueryVariables>(FetchLucidSurveysDocument, options);
      }
export function useFetchLucidSurveysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchLucidSurveysQuery, FetchLucidSurveysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchLucidSurveysQuery, FetchLucidSurveysQueryVariables>(FetchLucidSurveysDocument, options);
        }
export type FetchLucidSurveysQueryHookResult = ReturnType<typeof useFetchLucidSurveysQuery>;
export type FetchLucidSurveysLazyQueryHookResult = ReturnType<typeof useFetchLucidSurveysLazyQuery>;
export type FetchLucidSurveysQueryResult = Apollo.QueryResult<FetchLucidSurveysQuery, FetchLucidSurveysQueryVariables>;
export const ValidateLucidSurveyDocument = gql`
    mutation ValidateLucidSurvey($validateLucidSurveyInput: ValidateLucidSurveyInput!) {
  validateLucidSurvey(validateLucidSurveyInput: $validateLucidSurveyInput) {
    response {
      status
      message
    }
    url
    local
  }
}
    `;
export type ValidateLucidSurveyMutationFn = Apollo.MutationFunction<ValidateLucidSurveyMutation, ValidateLucidSurveyMutationVariables>;

/**
 * __useValidateLucidSurveyMutation__
 *
 * To run a mutation, you first call `useValidateLucidSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateLucidSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateLucidSurveyMutation, { data, loading, error }] = useValidateLucidSurveyMutation({
 *   variables: {
 *      validateLucidSurveyInput: // value for 'validateLucidSurveyInput'
 *   },
 * });
 */
export function useValidateLucidSurveyMutation(baseOptions?: Apollo.MutationHookOptions<ValidateLucidSurveyMutation, ValidateLucidSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateLucidSurveyMutation, ValidateLucidSurveyMutationVariables>(ValidateLucidSurveyDocument, options);
      }
export type ValidateLucidSurveyMutationHookResult = ReturnType<typeof useValidateLucidSurveyMutation>;
export type ValidateLucidSurveyMutationResult = Apollo.MutationResult<ValidateLucidSurveyMutation>;
export type ValidateLucidSurveyMutationOptions = Apollo.BaseMutationOptions<ValidateLucidSurveyMutation, ValidateLucidSurveyMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userInput: UpdateUserInput!) {
  updateUser(user: $userInput) {
    response {
      status
      error
      message
    }
    user {
      id
      firstName
      lastName
      status
      email
      createdAt
      updatedAt
      emailVerified
      roles {
        id
        role
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($updatePasswordInput: UpdatePasswordInput!) {
  updatePassword(updatePasswordInput: $updatePasswordInput) {
    response {
      status
      error
      message
    }
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      updatePasswordInput: // value for 'updatePasswordInput'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const DeactivateUserDocument = gql`
    mutation DeactivateUser($userInput: UserIdInput!) {
  deactivateUser(user: $userInput) {
    response {
      status
      message
      error
    }
    user {
      id
      firstName
      lastName
      status
      email
      emailVerified
      createdAt
      updatedAt
      roles {
        id
        role
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export type DeactivateUserMutationFn = Apollo.MutationFunction<DeactivateUserMutation, DeactivateUserMutationVariables>;

/**
 * __useDeactivateUserMutation__
 *
 * To run a mutation, you first call `useDeactivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateUserMutation, { data, loading, error }] = useDeactivateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useDeactivateUserMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateUserMutation, DeactivateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactivateUserMutation, DeactivateUserMutationVariables>(DeactivateUserDocument, options);
      }
export type DeactivateUserMutationHookResult = ReturnType<typeof useDeactivateUserMutation>;
export type DeactivateUserMutationResult = Apollo.MutationResult<DeactivateUserMutation>;
export type DeactivateUserMutationOptions = Apollo.BaseMutationOptions<DeactivateUserMutation, DeactivateUserMutationVariables>;
export const FetchPaymentWithdrawalsDocument = gql`
    query FetchPaymentWithdrawals($paymentWithdrawalsInput: FetchPaymentWithdrawalsInput!) {
  fetchPaymentWithdrawals(paymentWithdrawalsInput: $paymentWithdrawalsInput) {
    pagination {
      page
      limit
      totalCount
      totalPages
    }
    paymentWithdrawals {
      id
      status
      panelistId
      points
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useFetchPaymentWithdrawalsQuery__
 *
 * To run a query within a React component, call `useFetchPaymentWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPaymentWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPaymentWithdrawalsQuery({
 *   variables: {
 *      paymentWithdrawalsInput: // value for 'paymentWithdrawalsInput'
 *   },
 * });
 */
export function useFetchPaymentWithdrawalsQuery(baseOptions: Apollo.QueryHookOptions<FetchPaymentWithdrawalsQuery, FetchPaymentWithdrawalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPaymentWithdrawalsQuery, FetchPaymentWithdrawalsQueryVariables>(FetchPaymentWithdrawalsDocument, options);
      }
export function useFetchPaymentWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPaymentWithdrawalsQuery, FetchPaymentWithdrawalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPaymentWithdrawalsQuery, FetchPaymentWithdrawalsQueryVariables>(FetchPaymentWithdrawalsDocument, options);
        }
export type FetchPaymentWithdrawalsQueryHookResult = ReturnType<typeof useFetchPaymentWithdrawalsQuery>;
export type FetchPaymentWithdrawalsLazyQueryHookResult = ReturnType<typeof useFetchPaymentWithdrawalsLazyQuery>;
export type FetchPaymentWithdrawalsQueryResult = Apollo.QueryResult<FetchPaymentWithdrawalsQuery, FetchPaymentWithdrawalsQueryVariables>;