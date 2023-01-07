const AWS = require("aws-sdk");
// const dotenv = require("dotenv");
// dotenv.config();
const albumBucketName = process.env.VUE_APP_ALBUM_NAME;
AWS.config.region = "eu-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.VUE_APP_IDENTITY_POL_ID,
});
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

export async function getPictures() {
  const result = await s3
    .listObjectsV2({ Prefix: "compresed/" })
    .promise();
  if (!result.Contents) return;
    let imgsList= [];
  result.Contents.forEach((item) => {
    const url = s3.getSignedUrl("getObject", {
      Bucket: albumBucketName,
      Key: item.Key,
      Expires: 15*60
    });
    const name = item.Key.split("/")[1];
    imgsList.push({url, name}); 
  });
  return imgsList;
}

