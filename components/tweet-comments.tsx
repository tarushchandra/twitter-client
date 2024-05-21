"use client";
import CommentCard from "./comment-card";
import { useTweetComments } from "@/hooks/queries/tweet-engagement";
import CreateComment from "./create-comment";
import { Tweet } from "@/gql/graphql";
import { COMMENT_MODE } from "./post-comment-modal";
import CommentCardLoading from "./ui/comment-card-loading";

export default function TweetComments({ tweet }: { tweet: Tweet }) {
  const tweetEngagement = useTweetComments(tweet.id);

  // console.log("tweetEngagement -", tweetEngagement);
  // console.log("comments -", tweetEngagement?.comments);

  return (
    <div className="border-t border-zinc-800">
      <CreateComment
        tweet={tweet}
        tweetEngagement={tweetEngagement as any}
        placeholder="Add a comment"
        mode={COMMENT_MODE.CREATE_COMMENT_ON_TWEET}
      />

      <div className="px-4">
        {tweetEngagement === undefined ? (
          Array.from({ length: 8 }, (_, index) => (
            <CommentCardLoading key={index} />
          ))
        ) : (
          <>
            {tweetEngagement?.comments &&
            tweetEngagement.comments.length !== 0 ? (
              tweetEngagement.comments.map((comment: any) => (
                <CommentCard
                  key={comment?.id}
                  comment={comment}
                  tweet={tweet}
                />
              ))
            ) : (
              <h1 className="text-center pt-2 font-semibold">No comments</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
}
