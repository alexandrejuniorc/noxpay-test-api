import { z } from "zod"

const envSchema = z.object({
    PORT:  z.string().default('3000').transform(value => Number(value)),
})

const _env = envSchema.parse(process.env)

if (!_env) {
  throw new Error("Env not found")
}

export const env = _env