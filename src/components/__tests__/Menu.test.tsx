import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import { Menu } from '@/components/sections/Menu'
import { menu } from '@/data/menu'
import { renderWithProviders } from '@/test/utils'

describe('Menu', () => {
  it('renders every menu item from the data file', () => {
    renderWithProviders(<Menu />)

    for (const item of menu) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
    }
  })

  it('shows a price and an order pill for every item', () => {
    renderWithProviders(<Menu />)

    for (const item of menu) {
      // Prices can repeat across items, so assert at least one match.
      expect(screen.getAllByText(item.price).length).toBeGreaterThan(0)
    }
    // One decorative "Order" pill per card.
    expect(screen.getAllByText('Order')).toHaveLength(menu.length)
  })
})
