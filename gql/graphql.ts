/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  commentsCount?: Maybe<Scalars['Int']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCommentLikedBySessionUser?: Maybe<Scalars['Boolean']['output']>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  parentComment?: Maybe<Comment>;
  repliedTo?: Maybe<Comment>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Scalars['Boolean']['output'];
  createReply: Scalars['Boolean']['output'];
  createTweet: Scalars['Boolean']['output'];
  createUserWithEmailAndPassword?: Maybe<Scalars['Boolean']['output']>;
  deleteComment: Scalars['Boolean']['output'];
  deleteTweet: Scalars['Boolean']['output'];
  dislikeComment: Scalars['Boolean']['output'];
  dislikeTweet?: Maybe<Scalars['Boolean']['output']>;
  followUser?: Maybe<Scalars['Boolean']['output']>;
  likeComment: Scalars['Boolean']['output'];
  likeTweet?: Maybe<Scalars['Boolean']['output']>;
  removeFollower?: Maybe<Scalars['Boolean']['output']>;
  unfollowUser?: Maybe<Scalars['Boolean']['output']>;
  updateComment: Scalars['Boolean']['output'];
  updateTweet: Scalars['Boolean']['output'];
};


export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  tweetId: Scalars['String']['input'];
};


export type MutationCreateReplyArgs = {
  commentId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  tweetId: Scalars['String']['input'];
};


export type MutationCreateTweetArgs = {
  payload: TweetInput;
};


export type MutationCreateUserWithEmailAndPasswordArgs = {
  user: SignUpFormInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
  tweetId: Scalars['String']['input'];
};


export type MutationDeleteTweetArgs = {
  tweetId: Scalars['ID']['input'];
};


export type MutationDislikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationDislikeTweetArgs = {
  tweetId: Scalars['String']['input'];
};


export type MutationFollowUserArgs = {
  to: Scalars['ID']['input'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationLikeTweetArgs = {
  tweetId: Scalars['String']['input'];
};


export type MutationRemoveFollowerArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationUnfollowUserArgs = {
  to: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  commentId: Scalars['String']['input'];
  content: Scalars['String']['input'];
};


export type MutationUpdateTweetArgs = {
  payload: TweetInput;
  tweetId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllTweets?: Maybe<Array<Maybe<Tweet>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getComment?: Maybe<Comment>;
  getCommentsOfComment?: Maybe<Array<Maybe<Comment>>>;
  getCustomUserToken?: Maybe<Scalars['String']['output']>;
  getMutualFollowers?: Maybe<Array<Maybe<User>>>;
  getMutualLikers?: Maybe<Array<Maybe<User>>>;
  getRecommendedUsers?: Maybe<Array<Maybe<User>>>;
  getSessionUser?: Maybe<User>;
  getSignedURLForUploadingImage: Scalars['String']['output'];
  getTweet?: Maybe<Tweet>;
  getTweetEngagement?: Maybe<TweetEngagement>;
  getTweetsFeed?: Maybe<Array<Maybe<Tweet>>>;
  getUser?: Maybe<User>;
  isEmailExist?: Maybe<Scalars['Boolean']['output']>;
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  isUsernameExist?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetCommentArgs = {
  commentId: Scalars['String']['input'];
  tweetId: Scalars['String']['input'];
};


export type QueryGetCommentsOfCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type QueryGetCustomUserTokenArgs = {
  googleToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<SignInFormInput>;
};


export type QueryGetMutualFollowersArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetMutualLikersArgs = {
  tweetId: Scalars['String']['input'];
};


export type QueryGetSignedUrlForUploadingImageArgs = {
  payload: ImageUploadInput;
};


export type QueryGetTweetArgs = {
  tweetId: Scalars['String']['input'];
};


export type QueryGetTweetEngagementArgs = {
  tweetId: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIsEmailExistArgs = {
  email: Scalars['String']['input'];
};


export type QueryIsFollowingArgs = {
  userId: Scalars['String']['input'];
};


export type QueryIsUsernameExistArgs = {
  username: Scalars['String']['input'];
};

export type SignInFormInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpFormInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  tweetEngagement?: Maybe<TweetEngagement>;
  updatedAt: Scalars['String']['output'];
};

export type TweetEngagement = {
  __typename?: 'TweetEngagement';
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsCount?: Maybe<Scalars['Int']['output']>;
  isTweetLikedBySessionUser?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Array<Maybe<User>>>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  shares?: Maybe<Scalars['Int']['output']>;
  tweet?: Maybe<Tweet>;
};

export type TweetInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  imageURL?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<Maybe<User>>>;
  followersCount?: Maybe<Scalars['Int']['output']>;
  followings?: Maybe<Array<Maybe<User>>>;
  followingsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileImageURL?: Maybe<Scalars['String']['output']>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
  tweetsCount?: Maybe<Scalars['Int']['output']>;
  username: Scalars['String']['output'];
};

export type ImageUploadInput = {
  imageName: Scalars['String']['input'];
  imageType: Scalars['String']['input'];
};

export type LikeTweetMutationMutationVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type LikeTweetMutationMutation = { __typename?: 'Mutation', likeTweet?: boolean | null };

export type DislikeTweetMutationMutationVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type DislikeTweetMutationMutation = { __typename?: 'Mutation', dislikeTweet?: boolean | null };

export type CreateCommentMutationVariables = Exact<{
  tweetId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: boolean };

export type EditCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type EditCommentMutation = { __typename?: 'Mutation', updateComment: boolean };

export type DeleteCommentMutationVariables = Exact<{
  tweetId: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: boolean };

export type LikeCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type LikeCommentMutation = { __typename?: 'Mutation', likeComment: boolean };

export type DislikeCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type DislikeCommentMutation = { __typename?: 'Mutation', dislikeComment: boolean };

export type CreateReplyMutationVariables = Exact<{
  tweetId: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateReplyMutation = { __typename?: 'Mutation', createReply: boolean };

export type CreateTweetMutationVariables = Exact<{
  payload: TweetInput;
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', createTweet: boolean };

export type DeleteTweetMutationVariables = Exact<{
  tweetId: Scalars['ID']['input'];
}>;


export type DeleteTweetMutation = { __typename?: 'Mutation', deleteTweet: boolean };

export type UpdateTweetMutationVariables = Exact<{
  tweetId: Scalars['ID']['input'];
  payload: TweetInput;
}>;


export type UpdateTweetMutation = { __typename?: 'Mutation', updateTweet: boolean };

export type CreateUserWithEmailAndPasswordMutationMutationVariables = Exact<{
  user: SignUpFormInput;
}>;


export type CreateUserWithEmailAndPasswordMutationMutation = { __typename?: 'Mutation', createUserWithEmailAndPassword?: boolean | null };

export type FollowUserMutationMutationVariables = Exact<{
  to: Scalars['ID']['input'];
}>;


export type FollowUserMutationMutation = { __typename?: 'Mutation', followUser?: boolean | null };

export type UnfollowUserMutationMutationVariables = Exact<{
  to: Scalars['ID']['input'];
}>;


export type UnfollowUserMutationMutation = { __typename?: 'Mutation', unfollowUser?: boolean | null };

export type RemoveFollowerMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type RemoveFollowerMutation = { __typename?: 'Mutation', removeFollower?: boolean | null };

export type GetTweetEnagagementQueryQueryVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type GetTweetEnagagementQueryQuery = { __typename?: 'Query', getTweet?: { __typename?: 'Tweet', tweetEngagement?: { __typename?: 'TweetEngagement', likesCount?: number | null, isTweetLikedBySessionUser?: boolean | null, commentsCount?: number | null } | null } | null };

export type GetLikedByQueryQueryVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type GetLikedByQueryQuery = { __typename?: 'Query', getTweetEngagement?: { __typename?: 'TweetEngagement', likes?: Array<{ __typename?: 'User', username: string, profileImageURL?: string | null } | null> | null } | null };

export type GetDetailedLikedByQueryQueryVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type GetDetailedLikedByQueryQuery = { __typename?: 'Query', getTweetEngagement?: { __typename?: 'TweetEngagement', likes?: Array<{ __typename?: 'User', username: string, profileImageURL?: string | null, firstName: string, lastName?: string | null, id: string } | null> | null } | null };

export type GetTweetCommentsQueryQueryVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type GetTweetCommentsQueryQuery = { __typename?: 'Query', getTweet?: { __typename?: 'Tweet', tweetEngagement?: { __typename?: 'TweetEngagement', comments?: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: string, updatedAt: string, likesCount?: number | null, isCommentLikedBySessionUser?: boolean | null, commentsCount?: number | null, author?: { __typename?: 'User', firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null } | null, parentComment?: { __typename?: 'Comment', id: string } | null } | null> | null } | null } | null };

export type GetCommentsOfCommentQueryVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type GetCommentsOfCommentQuery = { __typename?: 'Query', getCommentsOfComment?: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: string, updatedAt: string, likesCount?: number | null, isCommentLikedBySessionUser?: boolean | null, author?: { __typename?: 'User', firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null } | null, parentComment?: { __typename?: 'Comment', id: string } | null, repliedTo?: { __typename?: 'Comment', id: string, author?: { __typename?: 'User', username: string } | null } | null } | null> | null };

export type GetRepliedToCommentQueryVariables = Exact<{
  commentId: Scalars['String']['input'];
  tweetId: Scalars['String']['input'];
}>;


export type GetRepliedToCommentQuery = { __typename?: 'Query', getComment?: { __typename?: 'Comment', repliedTo?: { __typename?: 'Comment', content: string, createdAt: string, author?: { __typename?: 'User', firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null } | null } | null } | null };

export type GetSignedUrlForUploadingImageQueryQueryVariables = Exact<{
  payload: ImageUploadInput;
}>;


export type GetSignedUrlForUploadingImageQueryQuery = { __typename?: 'Query', getSignedURLForUploadingImage: string };

export type GetTweetQueryVariables = Exact<{
  tweetId: Scalars['String']['input'];
}>;


export type GetTweetQuery = { __typename?: 'Query', getTweet?: { __typename?: 'Tweet', content?: string | null, id: string, imageURL?: string | null, createdAt: string, updatedAt: string, author?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null } | null } | null };

export type GetTweetsFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsFeedQuery = { __typename?: 'Query', getTweetsFeed?: Array<{ __typename?: 'Tweet', id: string, content?: string | null, imageURL?: string | null, createdAt: string, updatedAt: string, author?: { __typename?: 'User', firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null } | null, tweetEngagement?: { __typename?: 'TweetEngagement', likesCount?: number | null, isTweetLikedBySessionUser?: boolean | null, commentsCount?: number | null } | null } | null> | null };

export type GetCustomUserTokenQueryQueryVariables = Exact<{
  googleToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<SignInFormInput>;
}>;


export type GetCustomUserTokenQueryQuery = { __typename?: 'Query', getCustomUserToken?: string | null };

export type GetUserQueryQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQueryQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, profileImageURL?: string | null, followersCount?: number | null, followingsCount?: number | null, createdAt?: string | null, tweetsCount?: number | null } | null };

export type GetSessionUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionUserQueryQuery = { __typename?: 'Query', getSessionUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null, email?: string | null } | null };

export type GetAllUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQueryQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, profileImageURL?: string | null, email?: string | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null } | null> | null };

export type IsUsernameExistQueryQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type IsUsernameExistQueryQuery = { __typename?: 'Query', isUsernameExist?: boolean | null };

export type IsEmailExistQueryQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type IsEmailExistQueryQuery = { __typename?: 'Query', isEmailExist?: boolean | null };

export type GetFollowersQueryQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFollowersQueryQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', followers?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, email?: string | null, profileImageURL?: string | null } | null> | null } | null };

export type GetFollowingsQueryQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFollowingsQueryQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', followings?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, email?: string | null, profileImageURL?: string | null } | null> | null } | null };

export type GetMutualUsersQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetMutualUsersQuery = { __typename?: 'Query', getMutualFollowers?: Array<{ __typename?: 'User', username: string, profileImageURL?: string | null } | null> | null };

export type GetIsFollowingQueryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetIsFollowingQueryQuery = { __typename?: 'Query', isFollowing?: boolean | null };

export type GetRecommendedUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecommendedUsersQueryQuery = { __typename?: 'Query', getRecommendedUsers?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, username: string, email?: string | null, profileImageURL?: string | null } | null> | null };

export type GetUserTweetsQueryQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserTweetsQueryQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', tweets?: Array<{ __typename?: 'Tweet', id: string, content?: string | null, imageURL?: string | null, createdAt: string, updatedAt: string, tweetEngagement?: { __typename?: 'TweetEngagement', likesCount?: number | null, isTweetLikedBySessionUser?: boolean | null, commentsCount?: number | null } | null } | null> | null } | null };


export const LikeTweetMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeTweetMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}]}]}}]} as unknown as DocumentNode<LikeTweetMutationMutation, LikeTweetMutationMutationVariables>;
export const DislikeTweetMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeTweetMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislikeTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}]}]}}]} as unknown as DocumentNode<DislikeTweetMutationMutation, DislikeTweetMutationMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const EditCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const LikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<LikeCommentMutation, LikeCommentMutationVariables>;
export const DislikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislikeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<DislikeCommentMutation, DislikeCommentMutationVariables>;
export const CreateReplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<CreateReplyMutation, CreateReplyMutationVariables>;
export const CreateTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TweetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<CreateTweetMutation, CreateTweetMutationVariables>;
export const DeleteTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}]}]}}]} as unknown as DocumentNode<DeleteTweetMutation, DeleteTweetMutationVariables>;
export const UpdateTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TweetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<UpdateTweetMutation, UpdateTweetMutationVariables>;
export const CreateUserWithEmailAndPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUserWithEmailAndPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpFormInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserWithEmailAndPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}]}}]} as unknown as DocumentNode<CreateUserWithEmailAndPasswordMutationMutation, CreateUserWithEmailAndPasswordMutationMutationVariables>;
export const FollowUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}]}}]} as unknown as DocumentNode<FollowUserMutationMutation, FollowUserMutationMutationVariables>;
export const UnfollowUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollowUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}]}}]} as unknown as DocumentNode<UnfollowUserMutationMutation, UnfollowUserMutationMutationVariables>;
export const RemoveFollowerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFollower"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFollower"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemoveFollowerMutation, RemoveFollowerMutationVariables>;
export const GetTweetEnagagementQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTweetEnagagementQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweetEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isTweetLikedBySessionUser"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetTweetEnagagementQueryQuery, GetTweetEnagagementQueryQueryVariables>;
export const GetLikedByQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLikedByQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweetEngagement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetLikedByQueryQuery, GetLikedByQueryQueryVariables>;
export const GetDetailedLikedByQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDetailedLikedByQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweetEngagement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetDetailedLikedByQueryQuery, GetDetailedLikedByQueryQueryVariables>;
export const GetTweetCommentsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTweetCommentsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweetEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isCommentLikedBySessionUser"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"parentComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTweetCommentsQueryQuery, GetTweetCommentsQueryQueryVariables>;
export const GetCommentsOfCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsOfComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommentsOfComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isCommentLikedBySessionUser"}},{"kind":"Field","name":{"kind":"Name","value":"parentComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repliedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsOfCommentQuery, GetCommentsOfCommentQueryVariables>;
export const GetRepliedToCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRepliedToComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRepliedToCommentQuery, GetRepliedToCommentQueryVariables>;
export const GetSignedUrlForUploadingImageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSignedURLForUploadingImageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"imageUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSignedURLForUploadingImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<GetSignedUrlForUploadingImageQueryQuery, GetSignedUrlForUploadingImageQueryQueryVariables>;
export const GetTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tweetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tweetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetTweetQuery, GetTweetQueryVariables>;
export const GetTweetsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTweetsFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTweetsFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tweetEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isTweetLikedBySessionUser"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetTweetsFeedQuery, GetTweetsFeedQueryVariables>;
export const GetCustomUserTokenQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomUserTokenQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"googleToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInFormInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomUserToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"googleToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"googleToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}]}}]} as unknown as DocumentNode<GetCustomUserTokenQueryQuery, GetCustomUserTokenQueryQueryVariables>;
export const GetUserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tweetsCount"}}]}}]}}]} as unknown as DocumentNode<GetUserQueryQuery, GetUserQueryQueryVariables>;
export const GetSessionUserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSessionUserQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSessionUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetSessionUserQueryQuery, GetSessionUserQueryQueryVariables>;
export const GetAllUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQueryQuery, GetAllUsersQueryQueryVariables>;
export const IsUsernameExistQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsUsernameExistQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isUsernameExist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}]}}]} as unknown as DocumentNode<IsUsernameExistQueryQuery, IsUsernameExistQueryQueryVariables>;
export const IsEmailExistQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsEmailExistQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEmailExist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<IsEmailExistQueryQuery, IsEmailExistQueryQueryVariables>;
export const GetFollowersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFollowersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetFollowersQueryQuery, GetFollowersQueryQueryVariables>;
export const GetFollowingsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFollowingsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetFollowingsQueryQuery, GetFollowingsQueryQueryVariables>;
export const GetMutualUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMutualUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMutualFollowers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]} as unknown as DocumentNode<GetMutualUsersQuery, GetMutualUsersQueryVariables>;
export const GetIsFollowingQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIsFollowingQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFollowing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<GetIsFollowingQueryQuery, GetIsFollowingQueryQueryVariables>;
export const GetRecommendedUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecommendedUsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecommendedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]} as unknown as DocumentNode<GetRecommendedUsersQueryQuery, GetRecommendedUsersQueryQueryVariables>;
export const GetUserTweetsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserTweetsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tweetEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isTweetLikedBySessionUser"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserTweetsQueryQuery, GetUserTweetsQueryQueryVariables>;