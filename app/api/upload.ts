// import type { NextApiRequest, NextApiResponse } from "next";
// import multer from "multer";
// import { MusicUpload } from "@/types/music";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// export const config = {
//   api: {
//     bodyParser: false, // Multer handles it
//   },
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   upload.single("file")(req as any, res as any, (err: any) => {
//     if (err) return res.status(500).json({ message: "Error uploading file" });
//     res.status(200).json({ message: "File uploaded successfully" });
//   });
// }
