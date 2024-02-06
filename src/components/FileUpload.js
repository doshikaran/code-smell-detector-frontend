import React, { useState } from "react";
import axios from "axios";
import { Cloud, File as FileIcon, Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileContent, setFileContent] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [analysisResult, setAnalysisResult] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [filePath, setFilePath] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   setFileContent(e.target.result);
    // };
    // reader.readAsText(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setFilePath(response.data.filePath);
        setUploadSuccess(true);
        toast.success("File Uploaded Successfully.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        const reader = new FileReader();
        reader.onload = (e) => {
          setFileContent(e.target.result);
        };
        reader.onerror = (e) => {
          console.error("Error reading file:", e);
          alert("Error reading file.");
        };
        reader.readAsText(selectedFile);
      } else {
        setUploadSuccess(false);
        alert("File upload was not successful.");
      }
    } catch (error) {
      setUploadSuccess(false);
      console.error("Upload failed:", error);
      alert("Upload failed: " + (error.response && error.response.data));
    }

    setIsUploading(false);
    setUploadProgress(0);
  };

  const detectLongMethod = async () => {
    if (!filePath) {
      alert("No file uploaded yet!");
      return;
    }
    setIsAnalyzing(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/detect-long-method",
        { filePath }
      );
      setAnalysisResult(response.data);
    } catch (error) {
      console.error("Analysis error:", error);
      console.log(error.response.data);
      setAnalysisResult("Analysis failed. Please try again.");
    }
    setIsAnalyzing(false);
  };

  const detectLongParamterList = async () => {
    if (!filePath) {
      alert("No file uploaded yet!");
      return;
    }
    setIsAnalyzing(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/detect-long-parameter-list",
        { filePath }
      );
      setAnalysisResult(response.data);
    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysisResult("Analysis failed. Please try again.");
    }
    setIsAnalyzing(false);
  };

  const detectDuplicateCode = async () => {
    if (!filePath) {
      alert("No file uploaded yet!");
      return;
    }
    setIsAnalyzing(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/detect-duplicate-code",
        { filePath }
      );
      setAnalysisResult(response.data);
    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysisResult("Analysis failed. Please try again.");
    }
    setIsAnalyzing(false);
  };

  return (
    <div className=" flex  mt-10 px-10 py-5 space-x-5">
      <div className=" flex-1">
        <div className=" flex items-center space-x-5">
          <h1 className=" tracking-widest text-xl font-bold">
            Lets upload a file!
          </h1>
          <h1 className=" tracking-widest text-gray-600 font-bold">
            Do make sure the file is a .py or .js file.
          </h1>
          <ToastContainer />
        </div>

        <div className=" border h-60 mt-10 rounded-lg border-dashed border-gray-300 w-full mr-10">
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className=" flex flex-col items-center justify-center pt-5 pb-5">
                <Cloud className=" h-5 w-5 text-green-500 mb-3" />
                <p className=" text-sm mb-3 to-zinc-700">
                  <span className=" tracking-widest font-bold underline">
                    Click here to select your file
                  </span>{" "}
                </p>
                <input
                  type="file"
                  id="dropzone-file"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                {/* Display selected file name */}
                {selectedFile && (
                  <div className="text-sm font-medium text-gray-700">
                    {selectedFile.name}
                  </div>
                )}
                {/* Upload button */}
                <button
                  className="mt-2 uppercase text-white bg-black font-bold py-2 px-4 rounded text-xs tracking-widest"
                  onClick={handleUpload}
                  disabled={uploadSuccess}
                >
                  {uploadSuccess ? "Already Uploaded" : "Upload"}
                </button>
              </div>
              {/* Progress bar and status */} {/* not working well */}
              {isUploading && (
                <div className="w-1/2 mt-2 flex flex-col items-center justify-center">
                  <div className="w-full bg-gray-200 rounded h-1">
                    <div
                      className="bg-green-600 h-1 rounded"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  {uploadProgress === 100 ? (
                    <div className="mt-2 text-xs text-gray-800 tracking-widest">
                      File is uploaded
                    </div>
                  ) : (
                    <div className="mt-2 text-xs text-gray-800 tracking-widest">
                      Still Uploading {uploadProgress}%
                    </div>
                  )}
                </div>
              )}
            </label>
          </div>
        </div>
        {/* content of the file*/}
        <div className="flex-1 md:h-screen w-full">
          {fileContent && (
            <div className="md:h-1/2 mt-16 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-lg p-4 cursor-pointer overflow-auto">
              <div className="flex items-center justify-between">
                <FileIcon className="h-5 w-5 text-green-500 mb-2" />
                <p className="text-sm uppercase font-bold text-gray-800">
                  Name:{" "}
                  <span className="font-semibold">{selectedFile.name}</span>
                </p>
                <p className="text-sm uppercase font-bold text-gray-800">
                  Size:{" "}
                  <span className="font-semibold">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </span>
                </p>
              </div>

              {/* File content area */}
              <div className="mt-4 text-gray-800 font-mono whitespace-pre-wrap">
                {fileContent || "No content available"}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Analysis */}
      <div className=" w-1/2  px-10 ">
        {fileContent && (
          <div>
            <h1 className=" text-center tracking-widest uppercase font-bold mb-10">
              Analysis
            </h1>

            <div className="  flex items-center justify-between">
              <button
                onClick={detectLongMethod}
                className=" bg-black text-white p-4 rounded-md uppercase  shadow-md"
              >
                Detect Long Method
              </button>
              <button
                onClick={detectLongParamterList}
                className=" bg-black text-white p-4 rounded-md uppercase  shadow-md"
              >
                Detect Long Parameter List
              </button>
              <button
                onClick={detectDuplicateCode}
                className=" bg-black text-white p-4 rounded-md uppercase  shadow-md"
              >
                Detect Duplicate Code
              </button>
            </div>
            {analysisResult && (
              <div className=" mt-10 space-y-7">
                <h1 className=" text-center tracking-widest uppercase text-xl font-bold underline">
                  {" "}
                  Result:
                </h1>
                <pre className=" text-start text-xl">{analysisResult}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default FileUpload;
