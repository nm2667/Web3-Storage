import { TbFileUpload } from 'react-icons/tb';
import storageService from 'utils/services/storage';

const FileInput = () => {
  const files: File[] = [];

  const addFile = async ({ target }: any) => {
    const inputFiles: File = target.files[0];
    files.push(inputFiles);
    await storageService(inputFiles);
    console.log(files);
  };

  return (
    <div className="flex items-center justify-center w-full">
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
    </div>
  );
};

export default FileInput;
