export class OrgAlreadyExistsError extends Error {
  constructor() {
    super('Org already exists, email or whatsapp already in use.')
  }
}
