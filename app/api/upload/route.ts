import { authOptions } from "@/configs/auth";
import db from "@/configs/db-config";
import cloudinary from "@/lib/cloudinary";
import { File as FormidableFile, IncomingForm } from "formidable";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface UploadResponse {
  url?: string;
  error?: string;
  detail?: string;
}

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
  const session = await getServerSession(authOptions);
  if (!session) return res.status(401).json({ error: "Unauthorized" });

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err || !files.file) {
      return res.status(400).json({ error: "File error" });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filepath = (file as FormidableFile).filepath;

    try {
      const result = await cloudinary.uploader.upload(filepath, {
        folder: `invitation/${session.user?.email}`,
        resource_type: "auto",
      });

      fs.unlinkSync(filepath);

      const { error } = await db.from("images").insert({
        invitation_id: fields.invitation_id,
        url: result.secure_url,
        type: fields.type,
        public_id: result.public_id,
      });

      if (error) {
        console.error("Db error:", error);
        return res.status(500).json({ error: "Failed to insert to database" });
      }

      return res.status(200).json({ url: result.secure_url });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return res
        .status(500)
        .json({ error: "Upload failed", detail: e.message });
    }
  });
}
