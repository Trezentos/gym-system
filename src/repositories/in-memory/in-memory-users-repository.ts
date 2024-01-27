import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: User) {
    const user = {
      id: 'user-1',
      name: data.name,
      created_at: new Date(),
      email: data.email,
      password_hash: data.password_hash,
    }

    this.items.push(user)

    return user
  }
}
