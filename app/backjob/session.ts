import CryptoJS from 'crypto-js';

// Function to encrypt data
export function encryptData(data: string, secretKey: string): string {
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
  return encryptedData;
}

// Function to decrypt data
export function decryptData(encryptedData: string, secretKey: string): string {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

// const algorithm = 'aes-256-cbc';
// const secretKey = 'GerMAnfR0Gl3g'; // Replace with your own secret key
// const iv = crypto.randomBytes(16); // Generate a random IV

// export function encryptData(data: string, secretKey: string): string {
//   const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
//   let encryptedData = cipher.update(data, 'utf8', 'hex');
//   encryptedData += cipher.final('hex');
//   return encryptedData;
// }

// export function decryptData(encryptedData: string , secretKey: string): string {
//   const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
//   let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
//   decryptedData += decipher.final('utf8');
//   return decryptedData;
// }