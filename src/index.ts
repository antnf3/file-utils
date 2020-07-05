import fs, { promises as pfs } from "fs";
import path from "path";
import { v4 as uuid4 } from "uuid";
import axios from "axios";

/**
 * 파일 존재여부 확인
 */
async function isFile(localFilePath: string): Promise<boolean> {
  let rtn = false;
  try {
    const result = await pfs.stat(localFilePath);
    rtn = true; // 파일이 존재하면
  } catch (error) {
    // console.log(error);
    rtn = false;
  }
  return rtn;
}

/**
 * 파일 데이터 가져오기
 */
async function getFileData<T>(localFilePath: string): Promise<T> {
  let jData: any;
  try {
    const isFileExists = await isFile(localFilePath);
    // 파일이 존재하면
    if (isFileExists) {
      let data = await pfs.readFile(localFilePath, "utf-8");
      try {
        jData = JSON.parse(data);
      } catch (e) {
        jData = [];
      }
    } else {
      // 파일이 존재하지않으면
      jData = [];
    }
  } catch (err) {
    console.log(err);
    jData = [];
  }
  return jData;
}

/**
 * 파일 쓰기
 */
async function setFileData(
  localFilePath: string,
  data: string
): Promise<boolean> {
  let returnVal = false;
  try {
    const isExistsFile = await isFile(localFilePath);
    if (isExistsFile) {
      await pfs.writeFile(localFilePath, data);
      returnVal = true;
    } else {
      console.log(`${localFilePath} 파일이 존재하지 않습니다.`);
      returnVal = false;
    }
  } catch (error) {
    console.log("에러" + error);
    returnVal = false;
  }
  return returnVal;
}

/**
 * 디렉토리 존재여부
 */
async function isDierctory(dirPath: string): Promise<boolean> {
  let result = false;
  try {
    await pfs.readdir(dirPath);
    result = true;
  } catch (e) {
    result = false;
  }
  return result;
}

/**
 * 디렉토리 생성
 * @param dirName
 */
async function makeDir(dirPath: string) {
  const isExistsDir = await isDierctory(dirPath);
  if (!isExistsDir) {
    const abc = await pfs.mkdir(dirPath);
  }
}

/**
 * 단건 이미지파일 다운로드
 * @param imgUrl
 */
async function downloadImage(
  imgUrl: string,
  downloadPath?: string
): Promise<string> {
  const point = imgUrl.lastIndexOf(".");
  const exts = imgUrl.substring(point);
  downloadPath = downloadPath || "";
  const imageName = `${uuid4()}${exts}`;
  await makeDir(downloadPath); // 디렉토리가 존해하지않으면 생성
  const downPath = path.resolve(downloadPath, `${imageName}`);
  const writer = fs.createWriteStream(downPath);

  const response = await axios({
    url: imgUrl,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    const resolveDone = () => resolve(imageName);
    writer.on("finish", resolveDone);
    writer.on("error", reject);
  });
}

/**
 * 멀티 이미지파일 다운로드
 */
async function downloadMultiImage(
  arrImgUrl: string[],
  downloadPath?: string
): Promise<string[]> {
  let returnVal: string[] = [];
  downloadPath = downloadPath || "";
  if (arrImgUrl.length > 0) {
    const imgPromise = arrImgUrl.map(async (imgUrl) => {
      const isHttp = imgUrl.indexOf("http:");
      const isHttps = imgUrl.indexOf("https:");
      if (isHttp === -1 && isHttps === -1) {
        imgUrl = `http:${imgUrl}`;
      }
      return await downloadImage(imgUrl, downloadPath);
    });
    returnVal = await Promise.all(imgPromise);
  }

  return returnVal;
}

export {
  setFileData,
  getFileData,
  isFile,
  downloadImage,
  downloadMultiImage,
  makeDir,
  isDierctory,
};
