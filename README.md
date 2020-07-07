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
    "https://static.coupangcdn.com/image/retail/images/2020/06/01/14/2/e9c557d2-6f92-4f07-b93e-33c74efdf8dc.jpg",
    "https://thumbnail7.coupangcdn.com/thumbnails/local/320/image2/PRODUCTREVIEW/202006/25/8007917683531862895/d6664573-b707-4166-9d53-6574ed42edbd.jpg",
    "https://thumbnail8.coupangcdn.com/thumbnails/local/320/image2/PRODUCTREVIEW/202006/25/8358360043679892272/19dbf4a1-e542-4142-b8c2-c6fede3007f2.jpg",
    "https://thumbnail9.coupangcdn.com/thumbnails/local/320/image2/PRODUCTREVIEW/202006/20/1792200778088153550/d710e760-3514-4694-b25e-134f430ff86a.jpg",
    "https://thumbnail7.coupangcdn.com/thumbnails/local/320/image2/PRODUCTREVIEW/202006/24/3331616985593799400/e3da2f4f-4a89-4f3a-8bee-2b4249548d2b.jpg",
    "https://thumbnail6.coupangcdn.com/thumbnails/local/320/image2/PRODUCTREVIEW/202006/20/5188510396945357581/5e101faa-d6d0-4c31-83bc-58cbe222a3eb.jpg",
  ],
  dir
);
```
