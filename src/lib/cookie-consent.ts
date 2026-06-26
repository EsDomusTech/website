const KEY = "dt_cookie_consent";

export type ConsentStatus = "accepted" | "rejected" | null;

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(KEY) as ConsentStatus;
}

export function setConsent(status: "accepted" | "rejected"): void {
  localStorage.setItem(KEY, status);
}
