export function setLoggedIn(value: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem("progressly_logged_in", value ? "1" : "0");
}

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("progressly_logged_in") === "1";
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("progressly_logged_in");
}