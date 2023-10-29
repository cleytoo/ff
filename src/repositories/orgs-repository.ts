export type OrgDTO = {
  org_name: string
  email: string
  whatsapp: string
  password: string
  cep: string
  adress: string
}

export type CreatedOrgDTO = {
  id: string
  created_at: Date
} & OrgDTO

export type EmailAndWhatsappDTO = {
  email: string
  whatsapp: string
}

export interface OrgsRepository {
  create: (data: OrgDTO) => Promise<CreatedOrgDTO | null>
  findByEmailOrWhatsapp: (
    data: EmailAndWhatsappDTO,
  ) => Promise<CreatedOrgDTO | null>
}
