import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export class CloudinaryService {
  /**
   * Delete a file from Cloudinary
   * @param publicId - The public ID of the file
   * @param resourceType - The resource type (image, video, raw)
   */
  async deleteFile(publicId: string, resourceType: string = "image"): Promise<boolean> {
    if (!publicId) return false;

    try {
      const result = await cloudinary.uploader.destroy(publicId, {
        resource_type: resourceType,
      });
      return result.result === "ok" || result.result === "not_found";
    } catch (error) {
      console.error("Cloudinary Deletion Error:", error);
      return false;
    }
  }

  /**
   * Delete multiple files from Cloudinary
   * @param publicIds - Array of public IDs
   * @param resourceType - The resource type
   */
  async deleteFiles(publicIds: string[], resourceType: string = "image"): Promise<boolean> {
    if (!publicIds || publicIds.length === 0) return true;

    try {
      const result = await cloudinary.api.delete_resources(publicIds, {
        resource_type: resourceType,
      });
      return !!result;
    } catch (error) {
      console.error("Cloudinary Batch Deletion Error:", error);
      return false;
    }
  }

  /**
   * Verify file size from Cloudinary API
   * Used for server-side validation to prevent DB save of oversized files
   */
  async verifyFileSize(publicId: string, resourceType: string = "image", maxBytes: number): Promise<boolean> {
    if (!publicId) return true; // If no publicId, nothing to verify
    
    try {
      const result = await cloudinary.api.resource(publicId, {
        resource_type: resourceType,
      });
      
      if (result && result.bytes > maxBytes) {
        console.warn(`File ${publicId} exceeds size limit: ${result.bytes} > ${maxBytes}`);
        // Auto-delete the violating file
        await this.deleteFile(publicId, resourceType);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Cloudinary Verification Error:", error);
      // If we can't verify (e.g. not found), we assume it's okay for now or deal with it in caller
      return true; 
    }
  }
}

export const cloudinaryService = new CloudinaryService();
