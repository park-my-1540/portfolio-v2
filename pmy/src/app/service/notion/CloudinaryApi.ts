import https from 'https';
import { type UploadApiOptions, v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_FOLDER } from '@/../../config';

const configureCloudinary = () => {
  const cloudinaryUrl = CLOUDINARY_URL!;
  if (!cloudinaryUrl) {
    throw new Error('CLOUDINARY_URL is missing. Check your environment variables.');
  }
  const urlRegex = /^cloudinary:\/\/([a-z0-9-_]+):([a-z0-9-_]+)@([a-z0-9-_]+)$/i;
  if (!urlRegex.test(cloudinaryUrl)) {
    throw new Error(`Invalid Cloudinary URL provided: ${cloudinaryUrl}`);
  }
  const [, apiKey, apiSecret, cloudName] = cloudinaryUrl.match(urlRegex) ?? [];
  cloudinary.config({
    secure: true,
    api_key: apiKey,
    api_secret: apiSecret,
    cloud_name: cloudName,
  });
};

configureCloudinary();

const downloadFile = (url: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (response) => {
      const chunks: Uint8Array[] = [];

      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });
    req.on('error', reject);
    req.end();
  });
};

const uploadToCloudinary = (
  fileBuffer: Buffer,
  fileType: 'image' | 'video',
  title: string,
): Promise<{ url: string }> => {
  return new Promise((resolve, reject) => {
    const uploadOptions: UploadApiOptions = {
      folder: CLOUDINARY_UPLOAD_FOLDER!,
      public_id: title.split(' ').join('_').trim(),
      overwrite: true,
      resource_type: fileType, // 이미지면 "image", 비디오면 "video"
    };

    cloudinary.uploader
      .upload_stream(uploadOptions, (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return reject(error);
        }
        resolve({ url: result?.secure_url ?? '' });
      })
      .end(fileBuffer);
  });
};

export default async function convertToPermanentMedia(notionMediaUrl: string, title: string, type: 'image' | 'video') {
  const fileBuffer = await downloadFile(notionMediaUrl);
  const { url: cloudinaryUrl } = await uploadToCloudinary(fileBuffer, type, title);
  console.log(cloudinaryUrl);
  return cloudinaryUrl;
}
