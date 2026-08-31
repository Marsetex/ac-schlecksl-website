import type { NavLink } from './nav-link.model'

export interface NavItem {
  label: string
  to?: string
  children?: NavLink[]
}
