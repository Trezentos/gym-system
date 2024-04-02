import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-checkins-repository'
import { FetchUserCheckInsHistoryUseCase } from './fetch-user-check-ins-history'
import { randomUUID } from 'crypto'
import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsUseCase

describe('Get user metrics use Case ', async () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsUseCase(checkInRepository)
  })

  it('Should be able to get check-ins count from metrics', async () => {
    await checkInRepository.create({
      gym_id: 'gym-01',
      user_id: 'user_01',
    })
    await checkInRepository.create({
      gym_id: 'gym-02',
      user_id: 'user_01',
    })

    const { checkInsCount } = await sut.execute({
      userId: 'user_01',
      page: 1,
    })

    expect(checkInsCount).toEqual(2)
  })
})
