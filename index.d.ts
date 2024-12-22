declare module 'shield-storage' {
    export function setItem(key: string, value: any): void;
    export function getItem(key: string): any;
    export function removeItem(key: string): void;
    export function clear(): void;
  }
  