import { NextApiRequest, NextApiResponse } from "next"

import { services } from '../../data'

export const reqres = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services })
}


