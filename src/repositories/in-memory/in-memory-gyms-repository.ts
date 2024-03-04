import { Gym, Prisma } from '@prisma/client'
import { GymsRepository } from '../gyms-repository'
import { randomUUID } from 'crypto'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string): Promise<Gym | null> {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }

  async create({
    id,
    latitude,
    longitude,
    title,
    checkIns,
    description,
    phone,
  }: Prisma.GymCreateInput) {
    const gym = {
      id: id ?? randomUUID(),
      title,
      checkIns,
      description: description ?? null,
      phone: phone ?? null,
      latitude: new Prisma.Decimal(latitude.toString()),
      longitude: new Prisma.Decimal(longitude.toString()),
    }

    this.items.push(gym)

    return gym
  }
}
