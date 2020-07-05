# file-utils

## isFile

```javascript

isFile("./abc.json").then(data => console.log(data));
or
const isFileExists = await isFile("./abc.json");

interface fileDataProps {
  abc: number;
}

getFileData<fileDataProps[]>("./abc.json").then((data) => console.log(data));

setFileData("./abc.json", "452").then((data) => console.log(data));
```

## getFileData

```javascript

interface fileDataProps {
  abc: number;
}

getFileData<fileDataProps[]>("./abc.json").then((data) => console.log(data));
or
const fileData = await getFileData<fileDataProps[]>("./abc.json");
```

## setFileData

```javascript
setFileData("./abc.json", "452").then((data) => console.log(data));
or;
const isDone = await setFileData("./abc.json", "452");
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
downloadMultiImage(
  [
    "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg",
  ],
  "../test"
).then((data) => console.log(data));
// or
const downloadList = await downloadMultiImage(
  [
    "https://static.coupangcdn.com/image/retail/images/2020/05/04/14/2/e241b19a-4a59-40a1-aca1-31f5fd9de6e8.jpg",
  ],
  "../test"
);
```
