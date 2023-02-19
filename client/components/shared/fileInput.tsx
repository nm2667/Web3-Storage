import { useState } from 'react';
import { TbFileUpload } from 'react-icons/tb';
import storageService from 'utils/services/storage';

const FileInput = () => {
  const files: File[] = [];
  const [file, setFile] = useState('');

  const addFile = async ({ target }: any) => {
    const inputFiles: File = target.files[0];
    files.push(inputFiles);
    const cid = await storageService(inputFiles);
    console.log(files);
    setFile(`Gateway URL: https://${cid}.ipfs.w3s.link`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full text-3xl">
      <p className="txt-3xl"> Web3-Storage</p>
      {file ? <p className="text-2xl pb-10">{file}</p> : ''}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-2/12 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="h-16 w-16">
            <TbFileUpload className="h-full w-full" />
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Upload Your files
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={addFile}
        />
      </label>
      <p className="text-2xl flex flex-col pt-10">
        <div>Made By :</div> <div>Sarthak Sachdeva</div>
        <div>Nithya Murali</div>
        <div>Saransh Sinha</div>
      </p>
    </div>
  );
};

export default FileInput;
