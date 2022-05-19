import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

/** About me section */
export type AboutSection = {
  __typename?: 'AboutSection';
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** About me image */
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<AboutSection>;
  /** System stage field */
  stage: Stage;
  /** About me markdown description */
  text: Scalars['String'];
};


/** About me section */
export type AboutSectionImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** About me section */
export type AboutSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type AboutSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutSectionConnection = {
  __typename?: 'AboutSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutSectionCreateInput = {
  display: Scalars['Boolean'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AboutSectionCreateLocalizationsInput>;
  /** text input for default locale (en) */
  text: Scalars['String'];
};

export type AboutSectionCreateLocalizationDataInput = {
  text: Scalars['String'];
};

export type AboutSectionCreateLocalizationInput = {
  /** Localization input */
  data: AboutSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type AboutSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AboutSectionCreateLocalizationInput>>;
};

export type AboutSectionCreateManyInlineInput = {
  /** Create and connect multiple existing AboutSection documents */
  create?: InputMaybe<Array<AboutSectionCreateInput>>;
};

export type AboutSectionCreateOneInlineInput = {
  /** Create and connect one AboutSection document */
  create?: InputMaybe<AboutSectionCreateInput>;
};

export type AboutSectionCreateWithPositionInput = {
  /** Document to create */
  data: AboutSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AboutSectionEdge = {
  __typename?: 'AboutSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AboutSection;
};

/** Identifies documents */
export type AboutSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum AboutSectionOrderByInput {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type AboutSectionParent = Page;

export type AboutSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type AboutSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type AboutSectionParentCreateManyInlineInput = {
  /** Connect multiple existing AboutSectionParent documents */
  connect?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing AboutSectionParent documents */
  create?: InputMaybe<Array<AboutSectionParentCreateInput>>;
};

export type AboutSectionParentCreateOneInlineInput = {
  /** Connect one existing AboutSectionParent document */
  connect?: InputMaybe<AboutSectionParentWhereUniqueInput>;
  /** Create and connect one AboutSectionParent document */
  create?: InputMaybe<AboutSectionParentCreateInput>;
};

export type AboutSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type AboutSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing AboutSectionParent documents */
  connect?: InputMaybe<Array<AboutSectionParentConnectInput>>;
  /** Create and connect multiple AboutSectionParent documents */
  create?: InputMaybe<Array<AboutSectionParentCreateInput>>;
  /** Delete multiple AboutSectionParent documents */
  delete?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>;
  /** Disconnect multiple AboutSectionParent documents */
  disconnect?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AboutSectionParent documents */
  set?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>;
  /** Update multiple AboutSectionParent documents */
  update?: InputMaybe<Array<AboutSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutSectionParent documents */
  upsert?: InputMaybe<Array<AboutSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type AboutSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type AboutSectionParentUpdateOneInlineInput = {
  /** Connect existing AboutSectionParent document */
  connect?: InputMaybe<AboutSectionParentWhereUniqueInput>;
  /** Create and connect one AboutSectionParent document */
  create?: InputMaybe<AboutSectionParentCreateInput>;
  /** Delete currently connected AboutSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AboutSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AboutSectionParent document */
  update?: InputMaybe<AboutSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutSectionParent document */
  upsert?: InputMaybe<AboutSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type AboutSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type AboutSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type AboutSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type AboutSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type AboutSectionUpdateInput = {
  display?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AboutSectionUpdateLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']>;
};

export type AboutSectionUpdateLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type AboutSectionUpdateLocalizationInput = {
  data: AboutSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type AboutSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AboutSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AboutSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AboutSectionUpsertLocalizationInput>>;
};

export type AboutSectionUpdateManyInlineInput = {
  /** Create and connect multiple AboutSection component instances */
  create?: InputMaybe<Array<AboutSectionCreateWithPositionInput>>;
  /** Delete multiple AboutSection documents */
  delete?: InputMaybe<Array<AboutSectionWhereUniqueInput>>;
  /** Update multiple AboutSection component instances */
  update?: InputMaybe<Array<AboutSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AboutSection component instances */
  upsert?: InputMaybe<Array<AboutSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AboutSectionUpdateManyInput = {
  display?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AboutSectionUpdateManyLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']>;
};

export type AboutSectionUpdateManyLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type AboutSectionUpdateManyLocalizationInput = {
  data: AboutSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AboutSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AboutSectionUpdateManyLocalizationInput>>;
};

export type AboutSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutSectionUpdateManyInput;
  /** Document search */
  where: AboutSectionWhereInput;
};

export type AboutSectionUpdateOneInlineInput = {
  /** Create and connect one AboutSection document */
  create?: InputMaybe<AboutSectionCreateInput>;
  /** Delete currently connected AboutSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single AboutSection document */
  update?: InputMaybe<AboutSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutSection document */
  upsert?: InputMaybe<AboutSectionUpsertWithNestedWhereUniqueInput>;
};

export type AboutSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AboutSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutSectionWhereUniqueInput;
};

export type AboutSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutSectionUpdateInput;
  /** Unique document search */
  where: AboutSectionWhereUniqueInput;
};

export type AboutSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutSectionCreateInput;
  /** Update document if it exists */
  update: AboutSectionUpdateInput;
};

export type AboutSectionUpsertLocalizationInput = {
  create: AboutSectionCreateLocalizationDataInput;
  locale: Locale;
  update: AboutSectionUpdateLocalizationDataInput;
};

export type AboutSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AboutSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutSectionWhereUniqueInput;
};

export type AboutSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutSectionUpsertInput;
  /** Unique document search */
  where: AboutSectionWhereUniqueInput;
};

/** Identifies documents */
export type AboutSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  text?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']>;
};

/** References AboutSection record uniquely */
export type AboutSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  faviconPage: Array<Page>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetFaviconPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faviconPage?: InputMaybe<PageCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageAbout?: InputMaybe<AboutSectionCreateManyInlineInput>;
  imageContactSection?: InputMaybe<ContactSectionCreateManyInlineInput>;
  imageEducationSection?: InputMaybe<EducationSectionCreateManyInlineInput>;
  imageExperienceSection?: InputMaybe<ExperienceSectionCreateManyInlineInput>;
  imageHeroSection?: InputMaybe<HeroSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  faviconPage_every?: InputMaybe<PageWhereInput>;
  faviconPage_none?: InputMaybe<PageWhereInput>;
  faviconPage_some?: InputMaybe<PageWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  faviconPage?: InputMaybe<PageUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageAbout?: InputMaybe<AboutSectionUpdateManyInlineInput>;
  imageContactSection?: InputMaybe<ContactSectionUpdateManyInlineInput>;
  imageEducationSection?: InputMaybe<EducationSectionUpdateManyInlineInput>;
  imageExperienceSection?: InputMaybe<ExperienceSectionUpdateManyInlineInput>;
  imageHeroSection?: InputMaybe<HeroSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  faviconPage_every?: InputMaybe<PageWhereInput>;
  faviconPage_none?: InputMaybe<PageWhereInput>;
  faviconPage_some?: InputMaybe<PageWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

/** Page contact section */
export type ContactSection = {
  __typename?: 'ContactSection';
  /** Contact section description */
  description: Scalars['String'];
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Contact image on left side */
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ContactSection>;
  /** System stage field */
  stage: Stage;
};


/** Page contact section */
export type ContactSectionImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Page contact section */
export type ContactSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ContactSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactSectionConnection = {
  __typename?: 'ContactSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactSectionCreateInput = {
  /** description input for default locale (en) */
  description: Scalars['String'];
  display: Scalars['Boolean'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ContactSectionCreateLocalizationsInput>;
};

export type ContactSectionCreateLocalizationDataInput = {
  description: Scalars['String'];
};

export type ContactSectionCreateLocalizationInput = {
  /** Localization input */
  data: ContactSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ContactSectionCreateLocalizationInput>>;
};

export type ContactSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ContactSection documents */
  create?: InputMaybe<Array<ContactSectionCreateInput>>;
};

export type ContactSectionCreateOneInlineInput = {
  /** Create and connect one ContactSection document */
  create?: InputMaybe<ContactSectionCreateInput>;
};

export type ContactSectionCreateWithPositionInput = {
  /** Document to create */
  data: ContactSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactSectionEdge = {
  __typename?: 'ContactSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactSection;
};

/** Identifies documents */
export type ContactSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum ContactSectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ContactSectionParent = Page;

export type ContactSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ContactSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ContactSectionParentCreateManyInlineInput = {
  /** Connect multiple existing ContactSectionParent documents */
  connect?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactSectionParent documents */
  create?: InputMaybe<Array<ContactSectionParentCreateInput>>;
};

export type ContactSectionParentCreateOneInlineInput = {
  /** Connect one existing ContactSectionParent document */
  connect?: InputMaybe<ContactSectionParentWhereUniqueInput>;
  /** Create and connect one ContactSectionParent document */
  create?: InputMaybe<ContactSectionParentCreateInput>;
};

export type ContactSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ContactSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactSectionParent documents */
  connect?: InputMaybe<Array<ContactSectionParentConnectInput>>;
  /** Create and connect multiple ContactSectionParent documents */
  create?: InputMaybe<Array<ContactSectionParentCreateInput>>;
  /** Delete multiple ContactSectionParent documents */
  delete?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Disconnect multiple ContactSectionParent documents */
  disconnect?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactSectionParent documents */
  set?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Update multiple ContactSectionParent documents */
  update?: InputMaybe<Array<ContactSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactSectionParent documents */
  upsert?: InputMaybe<Array<ContactSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ContactSectionParentUpdateOneInlineInput = {
  /** Connect existing ContactSectionParent document */
  connect?: InputMaybe<ContactSectionParentWhereUniqueInput>;
  /** Create and connect one ContactSectionParent document */
  create?: InputMaybe<ContactSectionParentCreateInput>;
  /** Delete currently connected ContactSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ContactSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactSectionParent document */
  update?: InputMaybe<ContactSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactSectionParent document */
  upsert?: InputMaybe<ContactSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ContactSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ContactSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ContactSectionUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ContactSectionUpdateLocalizationsInput>;
};

export type ContactSectionUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type ContactSectionUpdateLocalizationInput = {
  data: ContactSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ContactSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ContactSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ContactSectionUpsertLocalizationInput>>;
};

export type ContactSectionUpdateManyInlineInput = {
  /** Create and connect multiple ContactSection component instances */
  create?: InputMaybe<Array<ContactSectionCreateWithPositionInput>>;
  /** Delete multiple ContactSection documents */
  delete?: InputMaybe<Array<ContactSectionWhereUniqueInput>>;
  /** Update multiple ContactSection component instances */
  update?: InputMaybe<Array<ContactSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactSection component instances */
  upsert?: InputMaybe<Array<ContactSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactSectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ContactSectionUpdateManyLocalizationsInput>;
};

export type ContactSectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type ContactSectionUpdateManyLocalizationInput = {
  data: ContactSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ContactSectionUpdateManyLocalizationInput>>;
};

export type ContactSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactSectionUpdateManyInput;
  /** Document search */
  where: ContactSectionWhereInput;
};

export type ContactSectionUpdateOneInlineInput = {
  /** Create and connect one ContactSection document */
  create?: InputMaybe<ContactSectionCreateInput>;
  /** Delete currently connected ContactSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactSection document */
  update?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactSection document */
  upsert?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactSectionUpdateInput;
  /** Unique document search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactSectionCreateInput;
  /** Update document if it exists */
  update: ContactSectionUpdateInput;
};

export type ContactSectionUpsertLocalizationInput = {
  create: ContactSectionCreateLocalizationDataInput;
  locale: Locale;
  update: ContactSectionUpdateLocalizationDataInput;
};

export type ContactSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactSectionUpsertInput;
  /** Unique document search */
  where: ContactSectionWhereUniqueInput;
};

/** Identifies documents */
export type ContactSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References ContactSection record uniquely */
export type ContactSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** Education section */
export type EducationSection = {
  __typename?: 'EducationSection';
  /** Bullet point achievements for the given school / university */
  achievements: Array<Scalars['String']>;
  /** Any info related to the school / university, e.g study level, location, year */
  description: Scalars['String'];
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** School / university image */
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<EducationSection>;
  /** System stage field */
  stage: Stage;
  /** Title of school or university */
  title: Scalars['String'];
};


/** Education section */
export type EducationSectionImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Education section */
export type EducationSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type EducationSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EducationSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type EducationSectionConnection = {
  __typename?: 'EducationSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EducationSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EducationSectionCreateInput = {
  /** achievements input for default locale (en) */
  achievements: Array<Scalars['String']>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  display: Scalars['Boolean'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<EducationSectionCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String'];
};

export type EducationSectionCreateLocalizationDataInput = {
  achievements: Array<Scalars['String']>;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type EducationSectionCreateLocalizationInput = {
  /** Localization input */
  data: EducationSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type EducationSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<EducationSectionCreateLocalizationInput>>;
};

export type EducationSectionCreateManyInlineInput = {
  /** Create and connect multiple existing EducationSection documents */
  create?: InputMaybe<Array<EducationSectionCreateInput>>;
};

export type EducationSectionCreateOneInlineInput = {
  /** Create and connect one EducationSection document */
  create?: InputMaybe<EducationSectionCreateInput>;
};

export type EducationSectionCreateWithPositionInput = {
  /** Document to create */
  data: EducationSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EducationSectionEdge = {
  __typename?: 'EducationSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EducationSection;
};

/** Identifies documents */
export type EducationSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum EducationSectionOrderByInput {
  AchievementsAsc = 'achievements_ASC',
  AchievementsDesc = 'achievements_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EducationSectionParent = Page;

export type EducationSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type EducationSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type EducationSectionParentCreateManyInlineInput = {
  /** Connect multiple existing EducationSectionParent documents */
  connect?: InputMaybe<Array<EducationSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing EducationSectionParent documents */
  create?: InputMaybe<Array<EducationSectionParentCreateInput>>;
};

export type EducationSectionParentCreateOneInlineInput = {
  /** Connect one existing EducationSectionParent document */
  connect?: InputMaybe<EducationSectionParentWhereUniqueInput>;
  /** Create and connect one EducationSectionParent document */
  create?: InputMaybe<EducationSectionParentCreateInput>;
};

export type EducationSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type EducationSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing EducationSectionParent documents */
  connect?: InputMaybe<Array<EducationSectionParentConnectInput>>;
  /** Create and connect multiple EducationSectionParent documents */
  create?: InputMaybe<Array<EducationSectionParentCreateInput>>;
  /** Delete multiple EducationSectionParent documents */
  delete?: InputMaybe<Array<EducationSectionParentWhereUniqueInput>>;
  /** Disconnect multiple EducationSectionParent documents */
  disconnect?: InputMaybe<Array<EducationSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EducationSectionParent documents */
  set?: InputMaybe<Array<EducationSectionParentWhereUniqueInput>>;
  /** Update multiple EducationSectionParent documents */
  update?: InputMaybe<Array<EducationSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EducationSectionParent documents */
  upsert?: InputMaybe<Array<EducationSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type EducationSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type EducationSectionParentUpdateOneInlineInput = {
  /** Connect existing EducationSectionParent document */
  connect?: InputMaybe<EducationSectionParentWhereUniqueInput>;
  /** Create and connect one EducationSectionParent document */
  create?: InputMaybe<EducationSectionParentCreateInput>;
  /** Delete currently connected EducationSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EducationSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EducationSectionParent document */
  update?: InputMaybe<EducationSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EducationSectionParent document */
  upsert?: InputMaybe<EducationSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type EducationSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type EducationSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type EducationSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type EducationSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type EducationSectionUpdateInput = {
  /** achievements input for default locale (en) */
  achievements?: InputMaybe<Array<Scalars['String']>>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<EducationSectionUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type EducationSectionUpdateLocalizationDataInput = {
  achievements?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EducationSectionUpdateLocalizationInput = {
  data: EducationSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type EducationSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<EducationSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<EducationSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<EducationSectionUpsertLocalizationInput>>;
};

export type EducationSectionUpdateManyInlineInput = {
  /** Create and connect multiple EducationSection component instances */
  create?: InputMaybe<Array<EducationSectionCreateWithPositionInput>>;
  /** Delete multiple EducationSection documents */
  delete?: InputMaybe<Array<EducationSectionWhereUniqueInput>>;
  /** Update multiple EducationSection component instances */
  update?: InputMaybe<Array<EducationSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EducationSection component instances */
  upsert?: InputMaybe<Array<EducationSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EducationSectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<EducationSectionUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type EducationSectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EducationSectionUpdateManyLocalizationInput = {
  data: EducationSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type EducationSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<EducationSectionUpdateManyLocalizationInput>>;
};

export type EducationSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EducationSectionUpdateManyInput;
  /** Document search */
  where: EducationSectionWhereInput;
};

export type EducationSectionUpdateOneInlineInput = {
  /** Create and connect one EducationSection document */
  create?: InputMaybe<EducationSectionCreateInput>;
  /** Delete currently connected EducationSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single EducationSection document */
  update?: InputMaybe<EducationSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EducationSection document */
  upsert?: InputMaybe<EducationSectionUpsertWithNestedWhereUniqueInput>;
};

export type EducationSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EducationSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EducationSectionWhereUniqueInput;
};

export type EducationSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EducationSectionUpdateInput;
  /** Unique document search */
  where: EducationSectionWhereUniqueInput;
};

export type EducationSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationSectionCreateInput;
  /** Update document if it exists */
  update: EducationSectionUpdateInput;
};

export type EducationSectionUpsertLocalizationInput = {
  create: EducationSectionCreateLocalizationDataInput;
  locale: Locale;
  update: EducationSectionUpdateLocalizationDataInput;
};

export type EducationSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EducationSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EducationSectionWhereUniqueInput;
};

export type EducationSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EducationSectionUpsertInput;
  /** Unique document search */
  where: EducationSectionWhereUniqueInput;
};

/** Identifies documents */
export type EducationSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  achievements?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  achievements_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  achievements_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  achievements_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  achievements_not?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References EducationSection record uniquely */
export type EducationSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Experience seciton */
export type ExperienceSection = {
  __typename?: 'ExperienceSection';
  /** Bullet point achievements for the given job */
  achievements: Array<Scalars['String']>;
  /** Job description, e.g company name, country, start-end data */
  description: Scalars['String'];
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Company logo image */
  image: Asset;
  /** URL link to company website */
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ExperienceSection>;
  /** System stage field */
  stage: Stage;
  /** Title of the job */
  title: Scalars['String'];
};


/** Experience seciton */
export type ExperienceSectionImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Experience seciton */
export type ExperienceSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ExperienceSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ExperienceSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExperienceSectionConnection = {
  __typename?: 'ExperienceSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ExperienceSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ExperienceSectionCreateInput = {
  /** achievements input for default locale (en) */
  achievements: Array<Scalars['String']>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  display: Scalars['Boolean'];
  image: AssetCreateOneInlineInput;
  link?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ExperienceSectionCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String'];
};

export type ExperienceSectionCreateLocalizationDataInput = {
  achievements: Array<Scalars['String']>;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type ExperienceSectionCreateLocalizationInput = {
  /** Localization input */
  data: ExperienceSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type ExperienceSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ExperienceSectionCreateLocalizationInput>>;
};

export type ExperienceSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ExperienceSection documents */
  create?: InputMaybe<Array<ExperienceSectionCreateInput>>;
};

export type ExperienceSectionCreateOneInlineInput = {
  /** Create and connect one ExperienceSection document */
  create?: InputMaybe<ExperienceSectionCreateInput>;
};

export type ExperienceSectionCreateWithPositionInput = {
  /** Document to create */
  data: ExperienceSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ExperienceSectionEdge = {
  __typename?: 'ExperienceSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ExperienceSection;
};

/** Identifies documents */
export type ExperienceSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ExperienceSectionOrderByInput {
  AchievementsAsc = 'achievements_ASC',
  AchievementsDesc = 'achievements_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ExperienceSectionParent = Page;

export type ExperienceSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ExperienceSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ExperienceSectionParentCreateManyInlineInput = {
  /** Connect multiple existing ExperienceSectionParent documents */
  connect?: InputMaybe<Array<ExperienceSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing ExperienceSectionParent documents */
  create?: InputMaybe<Array<ExperienceSectionParentCreateInput>>;
};

export type ExperienceSectionParentCreateOneInlineInput = {
  /** Connect one existing ExperienceSectionParent document */
  connect?: InputMaybe<ExperienceSectionParentWhereUniqueInput>;
  /** Create and connect one ExperienceSectionParent document */
  create?: InputMaybe<ExperienceSectionParentCreateInput>;
};

export type ExperienceSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ExperienceSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing ExperienceSectionParent documents */
  connect?: InputMaybe<Array<ExperienceSectionParentConnectInput>>;
  /** Create and connect multiple ExperienceSectionParent documents */
  create?: InputMaybe<Array<ExperienceSectionParentCreateInput>>;
  /** Delete multiple ExperienceSectionParent documents */
  delete?: InputMaybe<Array<ExperienceSectionParentWhereUniqueInput>>;
  /** Disconnect multiple ExperienceSectionParent documents */
  disconnect?: InputMaybe<Array<ExperienceSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ExperienceSectionParent documents */
  set?: InputMaybe<Array<ExperienceSectionParentWhereUniqueInput>>;
  /** Update multiple ExperienceSectionParent documents */
  update?: InputMaybe<Array<ExperienceSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ExperienceSectionParent documents */
  upsert?: InputMaybe<Array<ExperienceSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type ExperienceSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ExperienceSectionParentUpdateOneInlineInput = {
  /** Connect existing ExperienceSectionParent document */
  connect?: InputMaybe<ExperienceSectionParentWhereUniqueInput>;
  /** Create and connect one ExperienceSectionParent document */
  create?: InputMaybe<ExperienceSectionParentCreateInput>;
  /** Delete currently connected ExperienceSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ExperienceSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ExperienceSectionParent document */
  update?: InputMaybe<ExperienceSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ExperienceSectionParent document */
  upsert?: InputMaybe<ExperienceSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ExperienceSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ExperienceSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ExperienceSectionUpdateInput = {
  /** achievements input for default locale (en) */
  achievements?: InputMaybe<Array<Scalars['String']>>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ExperienceSectionUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ExperienceSectionUpdateLocalizationDataInput = {
  achievements?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ExperienceSectionUpdateLocalizationInput = {
  data: ExperienceSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type ExperienceSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ExperienceSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ExperienceSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ExperienceSectionUpsertLocalizationInput>>;
};

export type ExperienceSectionUpdateManyInlineInput = {
  /** Create and connect multiple ExperienceSection component instances */
  create?: InputMaybe<Array<ExperienceSectionCreateWithPositionInput>>;
  /** Delete multiple ExperienceSection documents */
  delete?: InputMaybe<Array<ExperienceSectionWhereUniqueInput>>;
  /** Update multiple ExperienceSection component instances */
  update?: InputMaybe<Array<ExperienceSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ExperienceSection component instances */
  upsert?: InputMaybe<Array<ExperienceSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ExperienceSectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ExperienceSectionUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ExperienceSectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ExperienceSectionUpdateManyLocalizationInput = {
  data: ExperienceSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ExperienceSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ExperienceSectionUpdateManyLocalizationInput>>;
};

export type ExperienceSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExperienceSectionUpdateManyInput;
  /** Document search */
  where: ExperienceSectionWhereInput;
};

export type ExperienceSectionUpdateOneInlineInput = {
  /** Create and connect one ExperienceSection document */
  create?: InputMaybe<ExperienceSectionCreateInput>;
  /** Delete currently connected ExperienceSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ExperienceSection document */
  update?: InputMaybe<ExperienceSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ExperienceSection document */
  upsert?: InputMaybe<ExperienceSectionUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ExperienceSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ExperienceSectionWhereUniqueInput;
};

export type ExperienceSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExperienceSectionUpdateInput;
  /** Unique document search */
  where: ExperienceSectionWhereUniqueInput;
};

export type ExperienceSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ExperienceSectionCreateInput;
  /** Update document if it exists */
  update: ExperienceSectionUpdateInput;
};

export type ExperienceSectionUpsertLocalizationInput = {
  create: ExperienceSectionCreateLocalizationDataInput;
  locale: Locale;
  update: ExperienceSectionUpdateLocalizationDataInput;
};

export type ExperienceSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ExperienceSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ExperienceSectionWhereUniqueInput;
};

export type ExperienceSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExperienceSectionUpsertInput;
  /** Unique document search */
  where: ExperienceSectionWhereUniqueInput;
};

/** Identifies documents */
export type ExperienceSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  achievements?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  achievements_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  achievements_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  achievements_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  achievements_not?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ExperienceSection record uniquely */
export type ExperienceSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Page footer section */
export type FooterSection = {
  __typename?: 'FooterSection';
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type FooterSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterSectionConnection = {
  __typename?: 'FooterSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FooterSectionCreateInput = {
  display: Scalars['Boolean'];
};

export type FooterSectionCreateManyInlineInput = {
  /** Create and connect multiple existing FooterSection documents */
  create?: InputMaybe<Array<FooterSectionCreateInput>>;
};

export type FooterSectionCreateOneInlineInput = {
  /** Create and connect one FooterSection document */
  create?: InputMaybe<FooterSectionCreateInput>;
};

export type FooterSectionCreateWithPositionInput = {
  /** Document to create */
  data: FooterSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FooterSectionEdge = {
  __typename?: 'FooterSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FooterSection;
};

/** Identifies documents */
export type FooterSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum FooterSectionOrderByInput {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type FooterSectionParent = Page;

export type FooterSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type FooterSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type FooterSectionParentCreateManyInlineInput = {
  /** Connect multiple existing FooterSectionParent documents */
  connect?: InputMaybe<Array<FooterSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing FooterSectionParent documents */
  create?: InputMaybe<Array<FooterSectionParentCreateInput>>;
};

export type FooterSectionParentCreateOneInlineInput = {
  /** Connect one existing FooterSectionParent document */
  connect?: InputMaybe<FooterSectionParentWhereUniqueInput>;
  /** Create and connect one FooterSectionParent document */
  create?: InputMaybe<FooterSectionParentCreateInput>;
};

export type FooterSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type FooterSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing FooterSectionParent documents */
  connect?: InputMaybe<Array<FooterSectionParentConnectInput>>;
  /** Create and connect multiple FooterSectionParent documents */
  create?: InputMaybe<Array<FooterSectionParentCreateInput>>;
  /** Delete multiple FooterSectionParent documents */
  delete?: InputMaybe<Array<FooterSectionParentWhereUniqueInput>>;
  /** Disconnect multiple FooterSectionParent documents */
  disconnect?: InputMaybe<Array<FooterSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FooterSectionParent documents */
  set?: InputMaybe<Array<FooterSectionParentWhereUniqueInput>>;
  /** Update multiple FooterSectionParent documents */
  update?: InputMaybe<Array<FooterSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FooterSectionParent documents */
  upsert?: InputMaybe<Array<FooterSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type FooterSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type FooterSectionParentUpdateOneInlineInput = {
  /** Connect existing FooterSectionParent document */
  connect?: InputMaybe<FooterSectionParentWhereUniqueInput>;
  /** Create and connect one FooterSectionParent document */
  create?: InputMaybe<FooterSectionParentCreateInput>;
  /** Delete currently connected FooterSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FooterSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FooterSectionParent document */
  update?: InputMaybe<FooterSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterSectionParent document */
  upsert?: InputMaybe<FooterSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type FooterSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type FooterSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type FooterSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type FooterSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type FooterSectionUpdateInput = {
  display?: InputMaybe<Scalars['Boolean']>;
};

export type FooterSectionUpdateManyInlineInput = {
  /** Create and connect multiple FooterSection component instances */
  create?: InputMaybe<Array<FooterSectionCreateWithPositionInput>>;
  /** Delete multiple FooterSection documents */
  delete?: InputMaybe<Array<FooterSectionWhereUniqueInput>>;
  /** Update multiple FooterSection component instances */
  update?: InputMaybe<Array<FooterSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FooterSection component instances */
  upsert?: InputMaybe<Array<FooterSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterSectionUpdateManyInput = {
  display?: InputMaybe<Scalars['Boolean']>;
};

export type FooterSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterSectionUpdateManyInput;
  /** Document search */
  where: FooterSectionWhereInput;
};

export type FooterSectionUpdateOneInlineInput = {
  /** Create and connect one FooterSection document */
  create?: InputMaybe<FooterSectionCreateInput>;
  /** Delete currently connected FooterSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FooterSection document */
  update?: InputMaybe<FooterSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterSection document */
  upsert?: InputMaybe<FooterSectionUpsertWithNestedWhereUniqueInput>;
};

export type FooterSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FooterSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterSectionWhereUniqueInput;
};

export type FooterSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterSectionUpdateInput;
  /** Unique document search */
  where: FooterSectionWhereUniqueInput;
};

export type FooterSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterSectionCreateInput;
  /** Update document if it exists */
  update: FooterSectionUpdateInput;
};

export type FooterSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FooterSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterSectionWhereUniqueInput;
};

export type FooterSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterSectionUpsertInput;
  /** Unique document search */
  where: FooterSectionWhereUniqueInput;
};

/** Identifies documents */
export type FooterSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References FooterSection record uniquely */
export type FooterSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Page hero section */
export type HeroSection = {
  __typename?: 'HeroSection';
  /** Second row skills of the hero section */
  bottomSkills: Array<Scalars['String']>;
  /** Call to action text */
  callToActionText: Scalars['String'];
  /** Call to action URL */
  callToActionUrl: Scalars['String'];
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Hero section background image */
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<HeroSection>;
  /** Secondary title of hero section */
  secondaryTitle: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Main text of hero section */
  title: Scalars['String'];
  /** First row skills of the hero section */
  topSkills: Array<Scalars['String']>;
};


/** Page hero section */
export type HeroSectionImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Page hero section */
export type HeroSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type HeroSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroSectionConnection = {
  __typename?: 'HeroSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroSectionCreateInput = {
  /** bottomSkills input for default locale (en) */
  bottomSkills: Array<Scalars['String']>;
  /** callToActionText input for default locale (en) */
  callToActionText: Scalars['String'];
  callToActionUrl: Scalars['String'];
  display: Scalars['Boolean'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HeroSectionCreateLocalizationsInput>;
  /** secondaryTitle input for default locale (en) */
  secondaryTitle: Scalars['String'];
  /** title input for default locale (en) */
  title: Scalars['String'];
  /** topSkills input for default locale (en) */
  topSkills: Array<Scalars['String']>;
};

export type HeroSectionCreateLocalizationDataInput = {
  bottomSkills: Array<Scalars['String']>;
  callToActionText: Scalars['String'];
  secondaryTitle: Scalars['String'];
  title: Scalars['String'];
  topSkills: Array<Scalars['String']>;
};

export type HeroSectionCreateLocalizationInput = {
  /** Localization input */
  data: HeroSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HeroSectionCreateLocalizationInput>>;
};

export type HeroSectionCreateManyInlineInput = {
  /** Create and connect multiple existing HeroSection documents */
  create?: InputMaybe<Array<HeroSectionCreateInput>>;
};

export type HeroSectionCreateOneInlineInput = {
  /** Create and connect one HeroSection document */
  create?: InputMaybe<HeroSectionCreateInput>;
};

export type HeroSectionCreateWithPositionInput = {
  /** Document to create */
  data: HeroSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroSectionEdge = {
  __typename?: 'HeroSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HeroSection;
};

/** Identifies documents */
export type HeroSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  callToActionUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  callToActionUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  callToActionUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  callToActionUrl_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  callToActionUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  callToActionUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  callToActionUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  callToActionUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  callToActionUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  callToActionUrl_starts_with?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum HeroSectionOrderByInput {
  BottomSkillsAsc = 'bottomSkills_ASC',
  BottomSkillsDesc = 'bottomSkills_DESC',
  CallToActionTextAsc = 'callToActionText_ASC',
  CallToActionTextDesc = 'callToActionText_DESC',
  CallToActionUrlAsc = 'callToActionUrl_ASC',
  CallToActionUrlDesc = 'callToActionUrl_DESC',
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SecondaryTitleAsc = 'secondaryTitle_ASC',
  SecondaryTitleDesc = 'secondaryTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopSkillsAsc = 'topSkills_ASC',
  TopSkillsDesc = 'topSkills_DESC'
}

export type HeroSectionParent = Page;

export type HeroSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type HeroSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type HeroSectionParentCreateManyInlineInput = {
  /** Connect multiple existing HeroSectionParent documents */
  connect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroSectionParent documents */
  create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
};

export type HeroSectionParentCreateOneInlineInput = {
  /** Connect one existing HeroSectionParent document */
  connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
  /** Create and connect one HeroSectionParent document */
  create?: InputMaybe<HeroSectionParentCreateInput>;
};

export type HeroSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type HeroSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroSectionParent documents */
  connect?: InputMaybe<Array<HeroSectionParentConnectInput>>;
  /** Create and connect multiple HeroSectionParent documents */
  create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
  /** Delete multiple HeroSectionParent documents */
  delete?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Disconnect multiple HeroSectionParent documents */
  disconnect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroSectionParent documents */
  set?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Update multiple HeroSectionParent documents */
  update?: InputMaybe<Array<HeroSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroSectionParent documents */
  upsert?: InputMaybe<Array<HeroSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type HeroSectionParentUpdateOneInlineInput = {
  /** Connect existing HeroSectionParent document */
  connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
  /** Create and connect one HeroSectionParent document */
  create?: InputMaybe<HeroSectionParentCreateInput>;
  /** Delete currently connected HeroSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected HeroSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroSectionParent document */
  update?: InputMaybe<HeroSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroSectionParent document */
  upsert?: InputMaybe<HeroSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type HeroSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type HeroSectionUpdateInput = {
  /** bottomSkills input for default locale (en) */
  bottomSkills?: InputMaybe<Array<Scalars['String']>>;
  /** callToActionText input for default locale (en) */
  callToActionText?: InputMaybe<Scalars['String']>;
  callToActionUrl?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<HeroSectionUpdateLocalizationsInput>;
  /** secondaryTitle input for default locale (en) */
  secondaryTitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  /** topSkills input for default locale (en) */
  topSkills?: InputMaybe<Array<Scalars['String']>>;
};

export type HeroSectionUpdateLocalizationDataInput = {
  bottomSkills?: InputMaybe<Array<Scalars['String']>>;
  callToActionText?: InputMaybe<Scalars['String']>;
  secondaryTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  topSkills?: InputMaybe<Array<Scalars['String']>>;
};

export type HeroSectionUpdateLocalizationInput = {
  data: HeroSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HeroSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HeroSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HeroSectionUpsertLocalizationInput>>;
};

export type HeroSectionUpdateManyInlineInput = {
  /** Create and connect multiple HeroSection component instances */
  create?: InputMaybe<Array<HeroSectionCreateWithPositionInput>>;
  /** Delete multiple HeroSection documents */
  delete?: InputMaybe<Array<HeroSectionWhereUniqueInput>>;
  /** Update multiple HeroSection component instances */
  update?: InputMaybe<Array<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HeroSection component instances */
  upsert?: InputMaybe<Array<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroSectionUpdateManyInput = {
  /** callToActionText input for default locale (en) */
  callToActionText?: InputMaybe<Scalars['String']>;
  callToActionUrl?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HeroSectionUpdateManyLocalizationsInput>;
  /** secondaryTitle input for default locale (en) */
  secondaryTitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type HeroSectionUpdateManyLocalizationDataInput = {
  callToActionText?: InputMaybe<Scalars['String']>;
  secondaryTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HeroSectionUpdateManyLocalizationInput = {
  data: HeroSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HeroSectionUpdateManyLocalizationInput>>;
};

export type HeroSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroSectionUpdateManyInput;
  /** Document search */
  where: HeroSectionWhereInput;
};

export type HeroSectionUpdateOneInlineInput = {
  /** Create and connect one HeroSection document */
  create?: InputMaybe<HeroSectionCreateInput>;
  /** Delete currently connected HeroSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroSection document */
  update?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroSection document */
  upsert?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroSectionUpdateInput;
  /** Unique document search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroSectionCreateInput;
  /** Update document if it exists */
  update: HeroSectionUpdateInput;
};

export type HeroSectionUpsertLocalizationInput = {
  create: HeroSectionCreateLocalizationDataInput;
  locale: Locale;
  update: HeroSectionUpdateLocalizationDataInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroSectionUpsertInput;
  /** Unique document search */
  where: HeroSectionWhereUniqueInput;
};

/** Identifies documents */
export type HeroSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  bottomSkills?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  bottomSkills_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  bottomSkills_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  bottomSkills_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  bottomSkills_not?: InputMaybe<Array<Scalars['String']>>;
  callToActionText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  callToActionText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  callToActionText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  callToActionText_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  callToActionText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  callToActionText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  callToActionText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  callToActionText_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  callToActionText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  callToActionText_starts_with?: InputMaybe<Scalars['String']>;
  callToActionUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  callToActionUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  callToActionUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  callToActionUrl_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  callToActionUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  callToActionUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  callToActionUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  callToActionUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  callToActionUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  callToActionUrl_starts_with?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  secondaryTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  secondaryTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  secondaryTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secondaryTitle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  secondaryTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  secondaryTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  secondaryTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  secondaryTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  secondaryTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  secondaryTitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  topSkills?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  topSkills_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  topSkills_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  topSkills_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  topSkills_not?: InputMaybe<Array<Scalars['String']>>;
};

/** References HeroSection record uniquely */
export type HeroSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  Bg = 'bg',
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one navItem */
  createNavItem?: Maybe<NavItem>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many NavItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavItemsConnection)
   */
  deleteManyNavItems: BatchPayload;
  /** Delete many NavItem documents, return deleted documents */
  deleteManyNavItemsConnection: NavItemConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Delete one navItem from _all_ existing stages. Returns deleted document. */
  deleteNavItem?: Maybe<NavItem>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many NavItem documents
   * @deprecated Please use the new paginated many mutation (publishManyNavItemsConnection)
   */
  publishManyNavItems: BatchPayload;
  /** Publish many NavItem documents */
  publishManyNavItemsConnection: NavItemConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Publish one navItem */
  publishNavItem?: Maybe<NavItem>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one navItem */
  schedulePublishNavItem?: Maybe<NavItem>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one navItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavItem?: Maybe<NavItem>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many NavItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavItemsConnection)
   */
  unpublishManyNavItems: BatchPayload;
  /** Find many NavItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavItemsConnection: NavItemConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /** Unpublish one navItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavItem?: Maybe<NavItem>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many navItems
   * @deprecated Please use the new paginated many mutation (updateManyNavItemsConnection)
   */
  updateManyNavItems: BatchPayload;
  /** Update many NavItem documents */
  updateManyNavItemsConnection: NavItemConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Update one navItem */
  updateNavItem?: Maybe<NavItem>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one navItem */
  upsertNavItem?: Maybe<NavItem>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateNavItemArgs = {
  data: NavItemCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyNavItemsArgs = {
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationDeleteManyNavItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteNavItemArgs = {
  where: NavItemWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNavItemsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNavItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishNavItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: NavItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishNavItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishNavItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NavItemWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyNavItemsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationUnpublishManyNavItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishNavItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NavItemWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyNavItemsArgs = {
  data: NavItemUpdateManyInput;
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationUpdateManyNavItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateNavItemArgs = {
  data: NavItemUpdateInput;
  where: NavItemWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertNavItemArgs = {
  upsert: NavItemUpsertInput;
  where: NavItemWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};

/** Navigation item */
export type NavItem = Node & {
  __typename?: 'NavItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NavItem>;
  /** List of NavItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** URL of navigation item */
  link: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<NavItem>;
  /** Whether the navigation link should open in a new tab */
  openInNewTab: Scalars['Boolean'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Navigation item */
export type NavItemCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Navigation item */
export type NavItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Navigation item */
export type NavItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Navigation item */
export type NavItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Navigation item */
export type NavItemLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Navigation item */
export type NavItemPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Navigation item */
export type NavItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Navigation item */
export type NavItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Navigation item */
export type NavItemUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Navigation item */
export type NavItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NavItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavItemConnection = {
  __typename?: 'NavItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavItemCreateInput = {
  cl3d6a2d31qz401xp02ac1mui?: InputMaybe<NavbarSectionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NavItemCreateLocalizationsInput>;
  openInNewTab: Scalars['Boolean'];
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavItemCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavItemCreateLocalizationInput = {
  /** Localization input */
  data: NavItemCreateLocalizationDataInput;
  locale: Locale;
};

export type NavItemCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NavItemCreateLocalizationInput>>;
};

export type NavItemCreateManyInlineInput = {
  /** Connect multiple existing NavItem documents */
  connect?: InputMaybe<Array<NavItemWhereUniqueInput>>;
  /** Create and connect multiple existing NavItem documents */
  create?: InputMaybe<Array<NavItemCreateInput>>;
};

export type NavItemCreateOneInlineInput = {
  /** Connect one existing NavItem document */
  connect?: InputMaybe<NavItemWhereUniqueInput>;
  /** Create and connect one NavItem document */
  create?: InputMaybe<NavItemCreateInput>;
};

/** An edge in a connection. */
export type NavItemEdge = {
  __typename?: 'NavItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavItem;
};

/** Identifies documents */
export type NavItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavItemUpdateInput = {
  cl3d6a2d31qz401xp02ac1mui?: InputMaybe<NavbarSectionUpdateManyInlineInput>;
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NavItemUpdateLocalizationsInput>;
  openInNewTab?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type NavItemUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type NavItemUpdateLocalizationInput = {
  data: NavItemUpdateLocalizationDataInput;
  locale: Locale;
};

export type NavItemUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NavItemCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NavItemUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NavItemUpsertLocalizationInput>>;
};

export type NavItemUpdateManyInlineInput = {
  /** Connect multiple existing NavItem documents */
  connect?: InputMaybe<Array<NavItemConnectInput>>;
  /** Create and connect multiple NavItem documents */
  create?: InputMaybe<Array<NavItemCreateInput>>;
  /** Delete multiple NavItem documents */
  delete?: InputMaybe<Array<NavItemWhereUniqueInput>>;
  /** Disconnect multiple NavItem documents */
  disconnect?: InputMaybe<Array<NavItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavItem documents */
  set?: InputMaybe<Array<NavItemWhereUniqueInput>>;
  /** Update multiple NavItem documents */
  update?: InputMaybe<Array<NavItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavItem documents */
  upsert?: InputMaybe<Array<NavItemUpsertWithNestedWhereUniqueInput>>;
};

export type NavItemUpdateManyInput = {
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NavItemUpdateManyLocalizationsInput>;
  openInNewTab?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type NavItemUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type NavItemUpdateManyLocalizationInput = {
  data: NavItemUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NavItemUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NavItemUpdateManyLocalizationInput>>;
};

export type NavItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavItemUpdateManyInput;
  /** Document search */
  where: NavItemWhereInput;
};

export type NavItemUpdateOneInlineInput = {
  /** Connect existing NavItem document */
  connect?: InputMaybe<NavItemWhereUniqueInput>;
  /** Create and connect one NavItem document */
  create?: InputMaybe<NavItemCreateInput>;
  /** Delete currently connected NavItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavItem document */
  update?: InputMaybe<NavItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavItem document */
  upsert?: InputMaybe<NavItemUpsertWithNestedWhereUniqueInput>;
};

export type NavItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavItemUpdateInput;
  /** Unique document search */
  where: NavItemWhereUniqueInput;
};

export type NavItemUpsertInput = {
  /** Create document if it didn't exist */
  create: NavItemCreateInput;
  /** Update document if it exists */
  update: NavItemUpdateInput;
};

export type NavItemUpsertLocalizationInput = {
  create: NavItemCreateLocalizationDataInput;
  locale: Locale;
  update: NavItemUpdateLocalizationDataInput;
};

export type NavItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavItemUpsertInput;
  /** Unique document search */
  where: NavItemWhereUniqueInput;
};

/** Identifies documents */
export type NavItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References NavItem record uniquely */
export type NavItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Navbar section */
export type NavbarSection = {
  __typename?: 'NavbarSection';
  /** Whether to show or hide the given component */
  display: Scalars['Boolean'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Left side of navbar text */
  initials: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<NavbarSection>;
  /** Navbar navigation items */
  navItems: Array<NavItem>;
  /** System stage field */
  stage: Stage;
};


/** Navbar section */
export type NavbarSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Navbar section */
export type NavbarSectionNavItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemWhereInput>;
};

export type NavbarSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavbarSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavbarSectionConnection = {
  __typename?: 'NavbarSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavbarSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavbarSectionCreateInput = {
  display: Scalars['Boolean'];
  /** initials input for default locale (en) */
  initials: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NavbarSectionCreateLocalizationsInput>;
  navItems?: InputMaybe<NavItemCreateManyInlineInput>;
};

export type NavbarSectionCreateLocalizationDataInput = {
  initials: Scalars['String'];
};

export type NavbarSectionCreateLocalizationInput = {
  /** Localization input */
  data: NavbarSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type NavbarSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NavbarSectionCreateLocalizationInput>>;
};

export type NavbarSectionCreateManyInlineInput = {
  /** Create and connect multiple existing NavbarSection documents */
  create?: InputMaybe<Array<NavbarSectionCreateInput>>;
};

export type NavbarSectionCreateOneInlineInput = {
  /** Create and connect one NavbarSection document */
  create?: InputMaybe<NavbarSectionCreateInput>;
};

export type NavbarSectionCreateWithPositionInput = {
  /** Document to create */
  data: NavbarSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavbarSectionEdge = {
  __typename?: 'NavbarSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavbarSection;
};

/** Identifies documents */
export type NavbarSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  navItems_every?: InputMaybe<NavItemWhereInput>;
  navItems_none?: InputMaybe<NavItemWhereInput>;
  navItems_some?: InputMaybe<NavItemWhereInput>;
};

export enum NavbarSectionOrderByInput {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InitialsAsc = 'initials_ASC',
  InitialsDesc = 'initials_DESC'
}

export type NavbarSectionParent = Page;

export type NavbarSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type NavbarSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type NavbarSectionParentCreateManyInlineInput = {
  /** Connect multiple existing NavbarSectionParent documents */
  connect?: InputMaybe<Array<NavbarSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing NavbarSectionParent documents */
  create?: InputMaybe<Array<NavbarSectionParentCreateInput>>;
};

export type NavbarSectionParentCreateOneInlineInput = {
  /** Connect one existing NavbarSectionParent document */
  connect?: InputMaybe<NavbarSectionParentWhereUniqueInput>;
  /** Create and connect one NavbarSectionParent document */
  create?: InputMaybe<NavbarSectionParentCreateInput>;
};

export type NavbarSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type NavbarSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing NavbarSectionParent documents */
  connect?: InputMaybe<Array<NavbarSectionParentConnectInput>>;
  /** Create and connect multiple NavbarSectionParent documents */
  create?: InputMaybe<Array<NavbarSectionParentCreateInput>>;
  /** Delete multiple NavbarSectionParent documents */
  delete?: InputMaybe<Array<NavbarSectionParentWhereUniqueInput>>;
  /** Disconnect multiple NavbarSectionParent documents */
  disconnect?: InputMaybe<Array<NavbarSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavbarSectionParent documents */
  set?: InputMaybe<Array<NavbarSectionParentWhereUniqueInput>>;
  /** Update multiple NavbarSectionParent documents */
  update?: InputMaybe<Array<NavbarSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavbarSectionParent documents */
  upsert?: InputMaybe<Array<NavbarSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavbarSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type NavbarSectionParentUpdateOneInlineInput = {
  /** Connect existing NavbarSectionParent document */
  connect?: InputMaybe<NavbarSectionParentWhereUniqueInput>;
  /** Create and connect one NavbarSectionParent document */
  create?: InputMaybe<NavbarSectionParentCreateInput>;
  /** Delete currently connected NavbarSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavbarSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavbarSectionParent document */
  update?: InputMaybe<NavbarSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavbarSectionParent document */
  upsert?: InputMaybe<NavbarSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type NavbarSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type NavbarSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type NavbarSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type NavbarSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type NavbarSectionUpdateInput = {
  display?: InputMaybe<Scalars['Boolean']>;
  /** initials input for default locale (en) */
  initials?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NavbarSectionUpdateLocalizationsInput>;
  navItems?: InputMaybe<NavItemUpdateManyInlineInput>;
};

export type NavbarSectionUpdateLocalizationDataInput = {
  initials?: InputMaybe<Scalars['String']>;
};

export type NavbarSectionUpdateLocalizationInput = {
  data: NavbarSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type NavbarSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NavbarSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NavbarSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NavbarSectionUpsertLocalizationInput>>;
};

export type NavbarSectionUpdateManyInlineInput = {
  /** Create and connect multiple NavbarSection component instances */
  create?: InputMaybe<Array<NavbarSectionCreateWithPositionInput>>;
  /** Delete multiple NavbarSection documents */
  delete?: InputMaybe<Array<NavbarSectionWhereUniqueInput>>;
  /** Update multiple NavbarSection component instances */
  update?: InputMaybe<Array<NavbarSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavbarSection component instances */
  upsert?: InputMaybe<Array<NavbarSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavbarSectionUpdateManyInput = {
  display?: InputMaybe<Scalars['Boolean']>;
  /** initials input for default locale (en) */
  initials?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NavbarSectionUpdateManyLocalizationsInput>;
};

export type NavbarSectionUpdateManyLocalizationDataInput = {
  initials?: InputMaybe<Scalars['String']>;
};

export type NavbarSectionUpdateManyLocalizationInput = {
  data: NavbarSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NavbarSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NavbarSectionUpdateManyLocalizationInput>>;
};

export type NavbarSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavbarSectionUpdateManyInput;
  /** Document search */
  where: NavbarSectionWhereInput;
};

export type NavbarSectionUpdateOneInlineInput = {
  /** Create and connect one NavbarSection document */
  create?: InputMaybe<NavbarSectionCreateInput>;
  /** Delete currently connected NavbarSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavbarSection document */
  update?: InputMaybe<NavbarSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavbarSection document */
  upsert?: InputMaybe<NavbarSectionUpsertWithNestedWhereUniqueInput>;
};

export type NavbarSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavbarSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavbarSectionWhereUniqueInput;
};

export type NavbarSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavbarSectionUpdateInput;
  /** Unique document search */
  where: NavbarSectionWhereUniqueInput;
};

export type NavbarSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: NavbarSectionCreateInput;
  /** Update document if it exists */
  update: NavbarSectionUpdateInput;
};

export type NavbarSectionUpsertLocalizationInput = {
  create: NavbarSectionCreateLocalizationDataInput;
  locale: Locale;
  update: NavbarSectionUpdateLocalizationDataInput;
};

export type NavbarSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavbarSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavbarSectionWhereUniqueInput;
};

export type NavbarSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavbarSectionUpsertInput;
  /** Unique document search */
  where: NavbarSectionWhereUniqueInput;
};

/** Identifies documents */
export type NavbarSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavbarSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  display_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  initials?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  initials_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  initials_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  initials_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  initials_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  initials_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  initials_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  initials_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  initials_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  initials_starts_with?: InputMaybe<Scalars['String']>;
  navItems_every?: InputMaybe<NavItemWhereInput>;
  navItems_none?: InputMaybe<NavItemWhereInput>;
  navItems_some?: InputMaybe<NavItemWhereInput>;
};

/** References NavbarSection record uniquely */
export type NavbarSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Default page layout template */
export type Page = Node & {
  __typename?: 'Page';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The page description */
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** Page favicon */
  favicon?: Maybe<Asset>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Page sections where all the content is */
  sections: Array<PagesectionsUnion>;
  /** System stage field */
  stage: Stage;
  /** Page title */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Page url */
  url: Scalars['String'];
};


/** Default page layout template */
export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Default page layout template */
export type PageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Default page layout template */
export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Default page layout template */
export type PageFaviconArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Default page layout template */
export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Default page layout template */
export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Default page layout template */
export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Default page layout template */
export type PagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Default page layout template */
export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Default page layout template */
export type PageSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Default page layout template */
export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Default page layout template */
export type PageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  favicon?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  sections?: InputMaybe<PagesectionsUnionCreateManyInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type PageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  favicon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type PageUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  sections?: InputMaybe<PagesectionsUnionUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PagesectionsUnion = AboutSection | ContactSection | EducationSection | ExperienceSection | FooterSection | HeroSection | NavbarSection;

export type PagesectionsUnionConnectInput = {
  AboutSection?: InputMaybe<AboutSectionConnectInput>;
  ContactSection?: InputMaybe<ContactSectionConnectInput>;
  EducationSection?: InputMaybe<EducationSectionConnectInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionConnectInput>;
  FooterSection?: InputMaybe<FooterSectionConnectInput>;
  HeroSection?: InputMaybe<HeroSectionConnectInput>;
  NavbarSection?: InputMaybe<NavbarSectionConnectInput>;
};

export type PagesectionsUnionCreateInput = {
  AboutSection?: InputMaybe<AboutSectionCreateInput>;
  ContactSection?: InputMaybe<ContactSectionCreateInput>;
  EducationSection?: InputMaybe<EducationSectionCreateInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionCreateInput>;
  FooterSection?: InputMaybe<FooterSectionCreateInput>;
  HeroSection?: InputMaybe<HeroSectionCreateInput>;
  NavbarSection?: InputMaybe<NavbarSectionCreateInput>;
};

export type PagesectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagesectionsUnion documents */
  create?: InputMaybe<Array<PagesectionsUnionCreateInput>>;
};

export type PagesectionsUnionCreateOneInlineInput = {
  /** Create and connect one PagesectionsUnion document */
  create?: InputMaybe<PagesectionsUnionCreateInput>;
};

export type PagesectionsUnionCreateWithPositionInput = {
  AboutSection?: InputMaybe<AboutSectionCreateWithPositionInput>;
  ContactSection?: InputMaybe<ContactSectionCreateWithPositionInput>;
  EducationSection?: InputMaybe<EducationSectionCreateWithPositionInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionCreateWithPositionInput>;
  FooterSection?: InputMaybe<FooterSectionCreateWithPositionInput>;
  HeroSection?: InputMaybe<HeroSectionCreateWithPositionInput>;
  NavbarSection?: InputMaybe<NavbarSectionCreateWithPositionInput>;
};

export type PagesectionsUnionUpdateInput = {
  AboutSection?: InputMaybe<AboutSectionUpdateInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateInput>;
  EducationSection?: InputMaybe<EducationSectionUpdateInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpdateInput>;
  FooterSection?: InputMaybe<FooterSectionUpdateInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpdateInput>;
};

export type PagesectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagesectionsUnion component instances */
  create?: InputMaybe<Array<PagesectionsUnionCreateWithPositionInput>>;
  /** Delete multiple PagesectionsUnion documents */
  delete?: InputMaybe<Array<PagesectionsUnionWhereUniqueInput>>;
  /** Update multiple PagesectionsUnion component instances */
  update?: InputMaybe<Array<PagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagesectionsUnion component instances */
  upsert?: InputMaybe<Array<PagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagesectionsUnionUpdateManyWithNestedWhereInput = {
  AboutSection?: InputMaybe<AboutSectionUpdateManyWithNestedWhereInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateManyWithNestedWhereInput>;
  EducationSection?: InputMaybe<EducationSectionUpdateManyWithNestedWhereInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpdateManyWithNestedWhereInput>;
  FooterSection?: InputMaybe<FooterSectionUpdateManyWithNestedWhereInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateManyWithNestedWhereInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpdateManyWithNestedWhereInput>;
};

export type PagesectionsUnionUpdateOneInlineInput = {
  /** Create and connect one PagesectionsUnion document */
  create?: InputMaybe<PagesectionsUnionCreateInput>;
  /** Delete currently connected PagesectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single PagesectionsUnion document */
  update?: InputMaybe<PagesectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagesectionsUnion document */
  upsert?: InputMaybe<PagesectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  AboutSection?: InputMaybe<AboutSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  EducationSection?: InputMaybe<EducationSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  FooterSection?: InputMaybe<FooterSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagesectionsUnionUpdateWithNestedWhereUniqueInput = {
  AboutSection?: InputMaybe<AboutSectionUpdateWithNestedWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueInput>;
  EducationSection?: InputMaybe<EducationSectionUpdateWithNestedWhereUniqueInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpdateWithNestedWhereUniqueInput>;
  FooterSection?: InputMaybe<FooterSectionUpdateWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpdateWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  AboutSection?: InputMaybe<AboutSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  EducationSection?: InputMaybe<EducationSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  FooterSection?: InputMaybe<FooterSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagesectionsUnionUpsertWithNestedWhereUniqueInput = {
  AboutSection?: InputMaybe<AboutSectionUpsertWithNestedWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueInput>;
  EducationSection?: InputMaybe<EducationSectionUpsertWithNestedWhereUniqueInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionUpsertWithNestedWhereUniqueInput>;
  FooterSection?: InputMaybe<FooterSectionUpsertWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
  NavbarSection?: InputMaybe<NavbarSectionUpsertWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionWhereInput = {
  AboutSection?: InputMaybe<AboutSectionWhereInput>;
  ContactSection?: InputMaybe<ContactSectionWhereInput>;
  EducationSection?: InputMaybe<EducationSectionWhereInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionWhereInput>;
  FooterSection?: InputMaybe<FooterSectionWhereInput>;
  HeroSection?: InputMaybe<HeroSectionWhereInput>;
  NavbarSection?: InputMaybe<NavbarSectionWhereInput>;
};

export type PagesectionsUnionWhereUniqueInput = {
  AboutSection?: InputMaybe<AboutSectionWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionWhereUniqueInput>;
  EducationSection?: InputMaybe<EducationSectionWhereUniqueInput>;
  ExperienceSection?: InputMaybe<ExperienceSectionWhereUniqueInput>;
  FooterSection?: InputMaybe<FooterSectionWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionWhereUniqueInput>;
  NavbarSection?: InputMaybe<NavbarSectionWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single navItem */
  navItem?: Maybe<NavItem>;
  /** Retrieve document version */
  navItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navItems */
  navItems: Array<NavItem>;
  /** Retrieve multiple navItems using the Relay connection interface */
  navItemsConnection: NavItemConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryNavItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavItemWhereUniqueInput;
};


export type QueryNavItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavItemWhereInput>;
};


export type QueryNavItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavItemWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | NavItem | Page;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetMainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainPageQuery = { __typename?: 'Query', page?: { __typename?: 'Page', localizations: Array<{ __typename?: 'Page', locale: Locale, title: string, description: string, favicon?: { __typename?: 'Asset', url: string, fileName: string, width?: number | null, height?: number | null } | null, sections: Array<{ __typename: 'AboutSection', text: string, display: boolean, image: { __typename?: 'Asset', fileName: string, height?: number | null, url: string, width?: number | null } } | { __typename: 'ContactSection', description: string, display: boolean, image: { __typename?: 'Asset', fileName: string, height?: number | null, url: string, width?: number | null } } | { __typename: 'EducationSection', achievements: Array<string>, description: string, display: boolean, title: string, image: { __typename?: 'Asset', fileName: string, height?: number | null, url: string, width?: number | null } } | { __typename: 'ExperienceSection', achievements: Array<string>, description: string, display: boolean, title: string, image: { __typename?: 'Asset', fileName: string, height?: number | null, url: string, width?: number | null } } | { __typename: 'FooterSection', display: boolean } | { __typename: 'HeroSection', bottomSkills: Array<string>, callToActionText: string, callToActionUrl: string, display: boolean, topSkills: Array<string>, title: string, secondaryTitle: string, image: { __typename?: 'Asset', fileName: string, height?: number | null, url: string, width?: number | null } } | { __typename: 'NavbarSection', display: boolean, initials: string, navItems: Array<{ __typename?: 'NavItem', title: string, link: string, openInNewTab: boolean }> }> }> } | null };


export const GetMainPageDocument = gql`
    query GetMainPage {
  page(where: {url: "index"}) {
    localizations(locales: [en, bg], includeCurrent: true) {
      locale
      title
      description
      locale
      favicon {
        url
        fileName
        width
        height
      }
      sections {
        __typename
        ... on NavbarSection {
          display
          initials
          navItems {
            title
            link
            openInNewTab
          }
        }
        ... on HeroSection {
          bottomSkills
          callToActionText
          callToActionUrl
          display
          topSkills
          title
          secondaryTitle
          image {
            fileName
            height
            url
            width
          }
        }
        ... on AboutSection {
          text
          display
          image {
            fileName
            height
            url
            width
          }
        }
        ... on EducationSection {
          achievements
          description
          display
          title
          image {
            fileName
            height
            url
            width
          }
        }
        ... on ExperienceSection {
          achievements
          description
          display
          title
          image {
            fileName
            height
            url
            width
          }
        }
        ... on ContactSection {
          description
          display
          image {
            fileName
            height
            url
            width
          }
        }
        ... on FooterSection {
          display
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetMainPage(variables?: GetMainPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMainPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMainPageQuery>(GetMainPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMainPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;