import type { ReactElement } from 'react'
import { render } from '@testing-library/react'

import { LanguageProvider } from '@/context/LanguageProvider'

/** Render a component wrapped in the LanguageProvider (most components need useT). */
export function renderWithProviders(ui: ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}
