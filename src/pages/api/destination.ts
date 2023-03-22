// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { destination } from '@/data/Destination'
import { IDestination } from '@/data/Destination/IDestination'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDestination[]>
) {
  res.status(200).json(destination)
}
