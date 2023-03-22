// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { crew } from '@/data/Crew'
import { ICrew } from '@/data/Crew/ICrew'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICrew>
) {
  res.status(200).json(crew)
}
