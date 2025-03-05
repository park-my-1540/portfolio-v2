const LocalStorageService = {
  // 데이터 저장
  setItem: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Error saving data to localStorage with key "${key}":`,
        error,
      );
    }
  },

  // 데이터 가져오기
  getItem: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? (JSON.parse(serializedValue) as T) : null;
    } catch (error) {
      console.error(
        `Error retrieving data from localStorage with key "${key}":`,
        error,
      );
      return null;
    }
  },

  // 데이터 삭제
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(
        `Error removing data from localStorage with key "${key}":`,
        error,
      );
    }
  },

  // 모든 데이터 초기화
  clear: (): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  // 특정 키가 존재하는지 확인
  hasKey: (key: string): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(key) !== null;
  },
};

export default LocalStorageService;
