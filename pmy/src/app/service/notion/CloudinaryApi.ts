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

const downloadImageToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (response) => {
      const chunks: Uint8Array[] = [];

      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const result = Buffer.concat(chunks);
        resolve(result.toString('base64'));
      });
    });
    req.on('error', reject);
    req.end();
  });
};

const uploadImage = (image: string, options: UploadApiOptions = {}): Promise<{ url: string }> => {
  return cloudinary.uploader
    .upload(image, options)
    .then((result) => ({ url: result.secure_url }))
    .catch((error) => {
      console.error(error);
      return { url: '' };
    });
};

export default async function convertToPermanentImage(notionImageUrl: string, title: string) {
  const imgBase64 = await downloadImageToBase64(notionImageUrl);
  const { url: cloudinaryUrl } = await uploadImage(`data:image/jpeg;base64,${imgBase64}`, {
    folder: CLOUDINARY_UPLOAD_FOLDER!,
    public_id: title.split(' ').join('_').trim(),
    overwrite: true,
  });
  return cloudinaryUrl;
}
