import { randomUUID } from 'node:crypto'
import {
  CreatedOrgDTO,
  EmailAndWhatsappDTO,
  OrgDTO,
  OrgsRepository,
} from '../orgs-repository'

export class InMemoryOrgsRepository implements OrgsRepository {
  private orgs: CreatedOrgDTO[] = []

  async create(data: OrgDTO) {
    const org: CreatedOrgDTO = {
      ...data,
      id: randomUUID(),
      created_at: new Date(),
    }

    this.orgs.push(org)
    return org
  }

  async findByEmailOrWhatsapp({ email, whatsapp }: EmailAndWhatsappDTO) {
    const org = this.orgs.find(
      (org) => org.email === email || org.whatsapp === whatsapp,
    )

    return org || null
  }
}
