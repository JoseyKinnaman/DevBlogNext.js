import { readPostsInfo } from "@/lib/helper";
import { NextApiHandler } from "next";


const handler: NextApiHandler = (req, res) => {
  const {method} = req
  switch(method){
    case "GET": {
      const data = readPostsInfo()
      res.json({postInfo: data})
    }
    default: return res.status(404).send("Not Found")
  }
}



export default handler;
