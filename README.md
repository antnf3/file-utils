# file-utils

## isFile

```javascript
const file = path.join(__dirname, "./abc.json");
isFile(file).then(data => console.log(data));
// or
const isFileExists = await isFile(file);

interface fileDataProps {
  abc: number;
}

getFileData<fileDataProps[]>(file).then((data) => console.log(data));

setFileData(file, "452").then((data) => console.log(data));
```

## getFileData

```javascript

interface fileDataProps {
  abc: number;
}
const file = path.join(__dirname, "./abc.json");
getFileData<fileDataProps[]>(file).then((data) => console.log(data));
or
const fileData = await getFileData<fileDataProps[]>(file);
```

## setFileData

```javascript
const file = path.join(__dirname, "./abc.json");
setFileData(file, "452").then((data) => console.log(data));
or;
const isDone = await setFileData(file, "452");
```

## isDierctory

```javascript
isDierctory(dirPath).then((data) => console.log(data));
// or
const isExistsDir = await isDierctory(dirPath);
```

## makeDir

```javascript
const dir = path.join(__dirname, "ccc");
makeDir(dir).then((data) => console.log(data));
// or
const isDone = await makeDir(dir);
```

## downloadImage

```javascript
downloadImage(
  "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg"
).then((data) => console.log(data));
// or;
const downloadImg = await downloadImage(
  "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg"
);
```

## downloadMultiImage

```javascript
const dir = path.join(__dirname, "ccc");
downloadMultiImage(
  [
    "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg",
  ],
  dir
).then((data) => console.log(data));
// or
const downloadList = await downloadMultiImage(
  [
    "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg",
  ],
  dir
);
```
