import { OrgDTO, OrgsRepository } from '@/repositories/orgs-repository'
import { OrgAlreadyExistsError } from './errors/org-already-exists'
import { hash } from 'bcryptjs'

export class CreateOrgUseCase {
  constructor(private readonly orgsRepository: OrgsRepository) {}

  async execute(data: OrgDTO) {
    const org = await this.orgsRepository.findByEmailOrWhatsapp({
      email: data.email,
      whatsapp: data.whatsapp,
    })

    if (org) {
      throw new OrgAlreadyExistsError()
    }

    const pawssword = await hash(data.password, 8)

    return await this.orgsRepository.create(
      Object.assign(data, { password: pawssword }),
    )
  }
}
