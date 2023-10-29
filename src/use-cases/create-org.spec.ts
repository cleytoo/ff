import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { CreateOrgUseCase } from './create-org'
import { OrgAlreadyExistsError } from './errors/org-already-exists'

let orgsRepository: InMemoryOrgsRepository
let sut: CreateOrgUseCase

describe('Create Org UseCase', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new CreateOrgUseCase(orgsRepository)
  })

  it('should not be able to create a org when email already exists', async () => {
    await orgsRepository.create({
      org_name: 'any_org_name',
      email: 'org@provider.com',
      adress: 'any_adress',
      cep: '00000000',
      password: '1234567',
      whatsapp: '0000000000',
    })

    await expect(() =>
      sut.execute({
        org_name: 'any_org_name',
        email: 'org@provider.com',
        adress: 'any_adress',
        cep: '00000000',
        password: '1234567',
        whatsapp: '0000000000',
      }),
    ).rejects.toBeInstanceOf(OrgAlreadyExistsError)
  })
  it('should not be able to create a org when whatsapp already exists', async () => {
    await orgsRepository.create({
      org_name: 'any_org_name',
      email: 'org@provider.com',
      adress: 'any_adress',
      cep: '00000000',
      password: '1234567',
      whatsapp: '0000000000',
    })

    await expect(() =>
      sut.execute({
        org_name: 'any_org_name',
        email: 'org@provider.com',
        adress: 'any_adress',
        cep: '00000000',
        password: '1234567',
        whatsapp: '0000000000',
      }),
    ).rejects.toBeInstanceOf(OrgAlreadyExistsError)
  })
})
