import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const createOrgBodySchema = z.object({
    org_name: z.string(),
    email: z.string().email(),
    whatsapp: z.string(),
    password: z.string().min(6),
    cep: z.string(),
    adress: z.string(),
  })

  const { org_name, email, whatsapp, password, cep, adress } =
    createOrgBodySchema.parse(req.body)
}
