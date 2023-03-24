// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { technologys } from '@/data/Technology'
import { ITechnology } from '@/data/Technology/ITechnlogy'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITechnology[]>
) {
  res.status(200).json(technologys)
}
