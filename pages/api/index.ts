import {NextApiRequest, NextApiResponse} from "next";
export default async function(req:NextApiRequest, res:NextApiResponse) {
    res.send(process.env.FIRESTORE_CONNECTION)
}