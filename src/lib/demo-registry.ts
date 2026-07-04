import type { DemoConfig } from './types'
import hvac          from './configs/hvac'
import barber        from './configs/barber'
import plumbing      from './configs/plumbing'
import roofing       from './configs/roofing'
import pressureWash  from './configs/pressure-washing'
import landscaping   from './configs/landscaping'
import restaurant    from './configs/restaurant'
import electrician   from './configs/electrician'
import cleaning      from './configs/cleaning'
import pestControl   from './configs/pest-control'
import painting      from './configs/painting'
import flooring      from './configs/flooring'
import treeService   from './configs/tree-service'

/** Registry of all demo configs. Add new niches here. */
export const DEMO_REGISTRY: Record<string, DemoConfig> = {
  hvac:               hvac,
  barber:             barber,
  roofing:            roofing,
  plumbing:           plumbing,
  'pressure-washing': pressureWash,
  landscaping:        landscaping,
  restaurant:         restaurant,
  electrician:        electrician,
  cleaning:           cleaning,
  'pest-control':     pestControl,
  painting:           painting,
  flooring:           flooring,
  'tree-service':     treeService,
}

export function getDemo(slug: string): DemoConfig | null {
  return DEMO_REGISTRY[slug] ?? null
}

export function getAllDemos(): DemoConfig[] {
  return Object.values(DEMO_REGISTRY)
}

export const VALID_SLUGS = Object.keys(DEMO_REGISTRY)
