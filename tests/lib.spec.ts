import { describe, it, expect } from '@jest/globals'
import Helm from '../src/lib'

describe('lib', () => {
  it('should build', () => {
    const helm = new Helm({})
    expect(helm).toBeDefined()
  })
  it('should list helm releases', async () => {
    const helm = new Helm({})
    const list = await helm.list({})
    expect(list).toBeDefined()
  })
  it('should upgrade helm releases', async () => {})
  it('should install helm releases', async () => {})
})
