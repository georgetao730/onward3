"use client";

import { useSyncExternalStore } from "react";

const event = "onward3:progress";
const key = (slug: string) => `onward3:lesson:${slug}:completed`;
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(event, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(event, callback);
  };
}
export function useLessonComplete(slug: string) {
  return useSyncExternalStore(subscribe, () => {
    try { return localStorage.getItem(key(slug)) === "true"; }
    catch { return false; }
  }, () => false);
}
export function saveLessonComplete(slug: string) {
  try {
    localStorage.setItem(key(slug), "true");
    window.dispatchEvent(new Event(event));
    return true;
  } catch { return false; }
}
