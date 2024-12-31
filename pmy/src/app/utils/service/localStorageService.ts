export class LocalStorageService {
    // 데이터 저장
    static setItem<T>(key: string, value: T): void {
      try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error(`Error saving data to localStorage with key "${key}":`, error);
      }
    }
  
    // 데이터 가져오기
    static getItem<T>(key: string): T | null {
      try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
          return null;
        }
        return JSON.parse(serializedValue) as T;
      } catch (error) {
        console.error(`Error retrieving data from localStorage with key "${key}":`, error);
        return null;
      }
    }
  
    // 데이터 삭제
    static removeItem(key: string): void {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing data from localStorage with key "${key}":`, error);
      }
    }
  
    // 모든 데이터 초기화
    static clear(): void {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage:", error);
      }
    }
  
    // 특정 키가 존재하는지 확인
    static hasKey(key: string): boolean {
      return localStorage.getItem(key) !== null;
    }
  }
  