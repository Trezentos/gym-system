import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'Jhon Doe',
      email: 'romerofagundes1998@hotmail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'romerofagundes1998@hotmail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('not should be able to authenticate with invalid email', async () => {
    await expect(() =>
      sut.execute({
        email: 'wrongEmailTesting@hotmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('not should be able to authenticate with invalid password', async () => {
    await usersRepository.create({
      email: 'romerofagundes1998@hotmail.com',
      name: 'Jhon Doe',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({
        email: 'romerofagundes1998@hotmail.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
