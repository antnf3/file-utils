import { promises as fs } from "fs";
import path from "path";

/**
 * 파일 존재여부 확인
 */
async function isFile(localFilePath: string): Promise<boolean> {
  let rtn = false;
  try {
    const result = await fs.stat(path.join(__dirname, localFilePath));
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
      let data = await fs.readFile(
        path.join(__dirname, localFilePath),
        "utf-8"
      );
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
      await fs.writeFile(path.join(__dirname, localFilePath), data);
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

export { setFileData, getFileData, isFile };
