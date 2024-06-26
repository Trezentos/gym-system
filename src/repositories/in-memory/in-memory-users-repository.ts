import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  public items: User[] = []

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create({ name, email, password_hash }: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      name,
      email,
      password_hash,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }
}
