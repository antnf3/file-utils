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
