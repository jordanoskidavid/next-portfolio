import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function initLenis(options: any) {
  if (!lenisInstance) {
    lenisInstance = new Lenis(options);
  }
  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
