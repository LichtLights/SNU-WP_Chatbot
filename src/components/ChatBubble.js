
// firebase 관련 모듈을 불러옵니다.
import { db } from "@/firebase";
import {
  collection,
  query,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  where,
} from "firebase/firestore";

const userDialog = collection(db, "userDialogs");
const AIDialog = collection(db, "AIDialogs");

export const ChatBubble = ({ message }) => {

  if(message.role === "assistant") {
    const docRef = addDoc(AIDialog, {
      dialog: message.content,
    });
  }
  else {
    const docRef = addDoc(userDialog, {
      dialog: message.content,
    });
  }

  return (
    <div
      className={`flex flex-col ${
        /* message.role 이 assistant 인 경우 좌측 정렬, 그 외에는 우측 정렬 */
        message.role === "assistant" ? "items-start" : "items-end"
      }`}
    >
      <div
        className={`flex items-center ${
          message.role === "assistant"
            ? "bg-neutral-200 text-neutral-900"
            : "bg-blue-500 text-white"
        } rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        {message.content}
      </div>
    </div>
  );
};
