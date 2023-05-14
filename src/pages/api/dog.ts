// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateDogs } from "@/utils/utils"
import type { Dog } from "@/utils/types"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  dogs: Dog[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dogs = generateDogs(20)
  res.status(200).json({ dogs })
}
