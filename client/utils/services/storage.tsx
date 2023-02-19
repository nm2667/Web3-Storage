import { Web3Storage, getFilesFromPath } from 'web3.storage';

const storage = new Web3Storage({
  token: `${process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN}`,
});

const storageService = async (file: File) => {
  const input = [file];
  const cid = await storage.put(input);
  console.log(`IPFS CID: ${cid}`);
  console.log(`Gateway URL: https://dweb.link/ipfs/${cid}`);
  return cid;
};

export default storageService;
