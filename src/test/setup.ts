import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Unmount React trees after each test to keep tests isolated.
afterEach(() => {
  cleanup()
})

// jsdom doesn't implement matchMedia; stub it so theme code can run in tests.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList
}

// jsdom doesn't implement IntersectionObserver; stub it so the scroll-reveal in
// Section.tsx can mount in tests (it never fires in jsdom, which is fine).
if (!('IntersectionObserver' in window)) {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
  ;(globalThis as { IntersectionObserver: unknown }).IntersectionObserver =
    MockIntersectionObserver
}
