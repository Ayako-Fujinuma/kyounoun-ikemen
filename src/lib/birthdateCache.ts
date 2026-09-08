const STORAGE_KEY = "kyounoun-ikemen:birthdate";

/** localStorageが使えない環境(プライベートブラウズ等)でも落ちないようtry/catchで包む */
export function getCachedBirthdate(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setCachedBirthdate(birthdateKey: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, birthdateKey);
  } catch {
    // 保存できなくても診断自体は続行できるので無視する
  }
}
