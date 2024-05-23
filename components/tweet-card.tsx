"use client";
import { TweetEngagement as TweetEnagementType, User } from "@/gql/graphql";
import dayjs from "dayjs";
import { Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import TweetEngagement from "./tweet-engagement";
import TweetEngagementForTweetCard from "./tweet-engagement";

dayjs.extend(relativeTime);

const postButtons = [
  {
    id: 1,
    Icon: Heart,
    title: "Like",
  },
  {
    id: 2,
    Icon: MessageCircle,
    title: "Comment",
  },
  {
    id: 3,
    Icon: Send,
    title: "Share",
  },
];

interface TweetCardProps {
  tweet: {
    id: string;
    content: string;
    imageURL: string;
    createdAt: string;
    updatedAt: string;
    author: User;
    tweetEngagement: TweetEnagementType | null;
  };
}

const TweetCard: React.FC<TweetCardProps> = (props) => {
  const { tweet } = props;
  const {
    id,
    content,
    createdAt,
    author,
    imageURL,
    tweetEngagement,
    updatedAt,
  } = tweet;
  const { firstName, lastName, username } = author;
  const formattedCreatedAt = dayjs(Number(createdAt)).fromNow();
  const formattedUpdatedAt = dayjs(Number(updatedAt)).fromNow();

  return (
    <>
      <div className="flex items-start gap-3 cursor-pointer border-y border-t-0 border-zinc-800 transition-all p-3 hover:bg-zinc-950">
        <Link href={`/profile/${username}`}>
          <Image
            src={tweet.author.profileImageURL!}
            alt="user-image"
            className="rounded-full transition-all hover:opacity-90"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex flex-col gap-2 w-full">
          <Link
            href={`/tweet/${id}`}
            scroll={false}
            className="flex flex-col gap-[0.1rem]"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Link
                  href={`/profile/${username}`}
                  className="font-semibold hover:underline"
                >
                  {firstName} {lastName}
                </Link>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span>@{username}</span>
                  <div className="bg-zinc-500 w-1 h-1 rounded-full" />
                  <span>{formattedCreatedAt}</span>
                  <>
                    {tweet.createdAt !== tweet.updatedAt && (
                      <>
                        <div className="bg-zinc-500 w-1 h-1 rounded-full" />
                        <h2>edited</h2>
                      </>
                    )}
                  </>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{content}</p>
              {imageURL && (
                <div>
                  <Image
                    src={imageURL}
                    alt="tweet-image"
                    className="rounded-xl w-full h-full border border-zinc-800 object-cover"
                    width={640}
                    height={360}
                  />
                </div>
              )}
            </div>
          </Link>
          <TweetEngagementForTweetCard
            tweet={{
              ...tweet,
              createdAt: formattedCreatedAt,
              updatedAt: formattedUpdatedAt,
            }}
            tweetEngagement={tweetEngagement!}
          />
        </div>
      </div>
    </>
  );
};

export default TweetCard;
