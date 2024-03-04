import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymRepository)
  })

  it('should be able to register', async () => {
    const { gym } = await sut.execute({
      title: 'Fagundes Fit',
      description: null,
      phone: null,
      latitude: -26.892214,
      longitude: -48.6784079,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
