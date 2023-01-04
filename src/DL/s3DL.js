const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();
const albumBucketName = process.env.ALBUM_NAME;
AWS.config.region = "eu-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.IDENTITY_POL_ID,
});
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

async function getPictures() {
  const result = await s3
  .listObjectsV2({ Prefix: "carousel-photos/" })
  .promise();
  if (!result.Contents) return;
  let promises = [];
  result.Contents.forEach((item) => {
    promises.push(
      s3.getObject({ Bucket: albumBucketName, Key: item.Key }).promise()
    );
  });
  let promiseResult = [];
  try {
    promiseResult = await Promise.all(promises);
  } catch (err) {
    console.error(err);
    return;
  }
  let imgArray = [];
  promiseResult.forEach((element) => {
    const imgBase64 = element.Body.toString("base64");
    imgArray.push(`data:image/png;base64, ${imgBase64}`);
  });
  return imgArray;
}
getPictures();
