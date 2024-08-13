"use client";
import { queryClient } from "@/lib/clients/query";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { graphqlClient } from "@/lib/clients/graphql";
import { getChatHistoryQuery, getChatsQuery } from "@/graphql/queries/chat";
import { addChats } from "@/lib/redux/features/chat/chatSlice";
import { fetchChatHistory } from "@/lib/redux/features/chat/chatThunks";
import { getUserLastSeenQuery } from "@/graphql/queries/user";
import { addOnlineUser } from "@/lib/redux/features/onlineUsers/onlineUsersSlice";

export const getUnseenMessagesCount = () => {
  const currentUnseenChatsCount: any = queryClient.getQueryData([
    "unseen-chats-count",
  ]);
  return currentUnseenChatsCount.getUnseenChatsCount;
};

export const useChats = () => {
  const chats = useAppSelector((store) => store.chat.totalChats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchChats = async () => {
      const data = await queryClient.fetchQuery({
        queryKey: ["chats"],
        queryFn: () => graphqlClient.request(getChatsQuery),
      });
      dispatch(addChats(data.getChats));
    };

    fetchChats();
  }, []);

  return chats;
};

export const useChatHistory = (chatId: string) => {
  const chatHistoryObj = useAppSelector(
    (store) => store.chat.chatHistories[chatId]
  );
  const chatHistory = chatHistoryObj?.data;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chatHistoryObj?.isDataFetched) return;
    dispatch(fetchChatHistory({ chatId, recentChatHistory: chatHistory }));
  }, [chatId]);

  return chatHistoryObj;
};

export const useUserLastSeenAt = (userId: string) => {
  const onlineUser = useAppSelector((store) => store.onlineUsers[userId]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (onlineUser) return;

    const fetchLastSeenAt = async () => {
      const { getUserLastSeen } = await queryClient.fetchQuery({
        queryKey: ["user-last-seen-at", userId],
        queryFn: () => graphqlClient.request(getUserLastSeenQuery, { userId }),
      });

      dispatch(
        addOnlineUser({
          userId,
          data: { isOnline: false, lastSeenAt: getUserLastSeen },
        })
      );
    };

    fetchLastSeenAt();
  }, [userId]);

  return onlineUser;
};

// export const useChatHistory = (chatId: string) => {
//   const chatHistoryObj = useAppSelector(
//     (store) => store.chat.chatHistories[chatId]
//   );
//   const chatHistory = chatHistoryObj?.data;
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (chatHistoryObj?.isDataFetched) return;

//     const fetch = async () => {
//       const data = await queryClient.fetchQuery({
//         queryKey: ["chat-history", chatId],
//         queryFn: () => graphqlClient.request(getChatHistoryQuery, { chatId }),
//       });

//       console.log("chatHistory fetched -", data.getChatHistory);

//       if (!chatHistoryObj)
//         dispatch(
//           addChatHistory({
//             chatId,
//             chatHistoryObj: { data: data.getChatHistory, isDataFetched: true },
//           })
//         );
//       else
//         dispatch(
//           addChatHistory({
//             chatId,
//             chatHistoryObj: {
//               data: [...chatHistory, ...data.getChatHistory!],
//               isDataFetched: true,
//             },
//           })
//         );
//     };

//     fetch();
//   }, [chatId]);

//   return chatHistoryObj;
// };

// export const useChatHistory = (chatId: string) => {
//   const chatHistoryObj = useAppSelector(
//     (store) => store.chat.chatHistories[chatId]
//   );
//   const chatHistory = chatHistoryObj.data;

//   const dispatch = useAppDispatch();

//   const [isFetchedDataAddedToStore, setIsFetchedDataAddedToStore] =
//     useState(false);
//   console.log("isFetchedDataAddedToStore -", isFetchedDataAddedToStore);

//   useEffect(() => {
//     if (isFetchedDataAddedToStore) return;

//     const fetch = async () => {
//       const data = await queryClient.fetchQuery({
//         queryKey: ["chat-history", chatId],
//         queryFn: () => graphqlClient.request(getChatHistoryQuery, { chatId }),
//       });

//       console.log("chatHistory fetched -", data.getChatHistory);

//       if (!chatHistory) {
//         dispatch(
//           addChatHistory({
//             chatId,
//             chatHistory: data.getChatHistory,
//           })
//         );
//       } else {
//         dispatch(
//           addChatHistory({
//             chatId,
//             chatHistory: [...chatHistory, ...data.getChatHistory!],
//           })
//         );
//       }

//       setIsFetchedDataAddedToStore(true);
//     };
//     fetch();
//   }, [chatId]);

//   return chatHistory;
// };

// if (chatHistory) return;
// dispatch(
//   addChatHistory({
//     chatId,
//     chatHistory: data.getChatHistory,
//   })
// );

// dispatch(
//   addChatHistory({
//     chatId,
//     chatHistory: [...chatHistory, ...data.getChatHistory!],
//   })
// );
