import { Chat, ChatHistory } from "@/gql/graphql";
import { useAuth } from "@/hooks/auth";
import { selectUser } from "@/lib/redux/features/auth/authSlice";
import { useMemo } from "react";
import ChatMessage from "./chat-message";
import ChatActivity from "./chat-activity";

interface ChatHistoryItemProps {
  chatHistoryItem: ChatHistory;
  chat: Chat;
  setSelectedChat: React.Dispatch<React.SetStateAction<Chat | null>>;
}

export default function ChatHistoryItem(props: ChatHistoryItemProps) {
  const { chatHistoryItem, chat, setSelectedChat } = props;
  const { data: sessionUser } = useAuth(selectUser);

  const modifiedChatHistoryItem = useMemo(
    () =>
      [
        ...chatHistoryItem?.messages?.seenMessages!,
        ...chatHistoryItem?.messages?.sessionUserMessages!,
        ...chatHistoryItem?.activities!,
      ].sort((a, b) => Number(b?.createdAt) - Number(a?.createdAt)),
    [chat.id, chatHistoryItem]
  );

  return (
    <div key={chatHistoryItem?.date} className="flex flex-col-reverse gap-3">
      <div className="flex flex-col-reverse gap-4">
        <>
          {chatHistoryItem?.messages?.unseenMessages?.length! > 0 && (
            <div className="flex flex-col gap-3">
              <>
                {chatHistoryItem?.messages?.unseenMessages![0]?.sender
                  ?.username !== sessionUser?.username && (
                  <div className="flex justify-center">
                    <h2 className="text-xs font-semibold px-2 py-1 rounded-full bg-zinc-800 text-zinc-200 ">
                      <span>
                        {chatHistoryItem?.messages?.unseenMessages?.length!}{" "}
                      </span>
                      <span>
                        {chatHistoryItem?.messages?.unseenMessages?.length! ===
                        1
                          ? "unread message"
                          : "unread messages"}
                      </span>
                    </h2>
                  </div>
                )}
              </>
              <div className="flex flex-col-reverse gap-4">
                {chatHistoryItem?.messages?.unseenMessages?.map(
                  (message: any) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      chat={chat}
                      setSelectedChat={setSelectedChat}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </>
        <>
          {modifiedChatHistoryItem.map((item: any) =>
            item.type ? (
              <ChatActivity key={item.id} activity={item} chat={chat} />
            ) : (
              <ChatMessage
                key={item.id}
                message={item}
                chat={chat}
                setSelectedChat={setSelectedChat}
              />
            )
          )}
        </>
      </div>
      <div className="flex justify-center mt-2">
        <h2 className="text-xs font-semibold px-2 py-1 rounded-full bg-zinc-200 text-black  ">
          {chatHistoryItem?.date}
        </h2>
      </div>
    </div>
  );
}
