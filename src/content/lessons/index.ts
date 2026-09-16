import { whatIsWeb3 } from "./what-is-web3";
import type { LessonContent } from "./types";
export const lessons: Record<string, LessonContent> = { [whatIsWeb3.slug]: whatIsWeb3 };
export function getLesson(slug: string): LessonContent | undefined {
  return Object.hasOwn(lessons, slug) ? lessons[slug] : undefined;
}
export const plannedLessons: Record<string, string> = {
  blockchain: "Blockchain", bitcoin: "Bitcoin", ethereum: "Ethereum", accounts: "Accounts",
  "wallet-and-keys": "Wallet & Keys", transactions: "Transactions", gas: "Gas",
  "smart-contracts": "Smart Contracts", evm: "EVM", build: "Build",
};
