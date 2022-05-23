import { AttributeValue, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {
  WriteBatchCommand,
  Item,
  PutRequest,
  ArrToBatchOptions,
} from "./interfaces";
import { compareStrings } from "./utils";



const transformObjToItem = (obj: Object): Item => {
  let map: Item = {};
  Object.entries(obj).forEach(([key, value]) => {
    map[`${key}`] = checkType(value);
  });


  return map;
};

const checkType = (value: any): AttributeValue => {
  switch (typeof value) {
    case "string":
      return { S: value };
    case "number":
      return { N: value.toString() };
    case "boolean":
      return { BOOL: value };
    default:
      return { S: value };
  }
};
