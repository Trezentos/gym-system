import { expect, test, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const { user } = await registerUseCase.execute({
      name: 'Romero',
      email: 'romerofagundes1998@hotmail.com',
      password: '12345',
    })

    expect(user.id).toEqual(expect.any(String))
    // expect(user.id).toEqual('user-1')
  })

  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const { user } = await registerUseCase.execute({
      name: 'Romero',
      email: 'romerofagundes1998@hotmail.com',
      password: '12345',
    })

    const isPasswordCorrectlyHashed = await compare('12345', user.password_hash)

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})

describe('should not be able to register with same email twice', () => {
  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const email = 'romerofagundes1998@hotmail.com'

    await registerUseCase.execute({
      name: 'Romero',
      email,
      password: '12345',
    })

    expect(async () => {
      await registerUseCase.execute({
        name: 'Romero',
        email,
        password: '12345',
      })
    }).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
