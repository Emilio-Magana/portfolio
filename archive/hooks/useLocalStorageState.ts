// import { useState, useEffect, Dispatch, SetStateAction } from "react";

// export function useLocalStorageState<T>(
//   key: string,
//   initialState: T,
// ): [T, Dispatch<SetStateAction<T>>] {
//   const [value, setValue] = useState<T>(initialState);
//   const [hasHydrated, setHasHydrated] = useState(false);

//   useEffect(() => {
//     const storedValue = localStorage.getItem(key);
//     if (storedValue !== null) {
//       try {
//         setValue(JSON.parse(storedValue));
//       } catch {
//         setValue(initialState);
//       }
//     }
//     setHasHydrated(true);
//   }, []);

//   useEffect(() => {
//     if (!hasHydrated) return;
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value, hasHydrated]);

//   return [value, setValue];
// }
