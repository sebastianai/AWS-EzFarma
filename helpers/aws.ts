import { AttributeValue, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {
  WriteBatchCommand,
  Item,
  PutRequest,
  ArrToBatchOptions,
} from "./interfaces";
import { compareStrings } from "./utils";

export const transformArrToBatch = (
  item: Object[],
  options: ArrToBatchOptions
) => {
  let items: any = {}
  item.forEach((item) => {
    const dynamoAttributes = transformObjToItem(item);
    const [, attribute] = Object.entries(dynamoAttributes)
      .filter(
        ([key]) => compareStrings(key, options.KeySchema) > 0.5
      )
      .shift() as [string, AttributeValue];
      items[Object.values(attribute).pop()] = {
        M:dynamoAttributes
      }
  });
  let Item = {
    "Nombre": { S: options.Name },
    "Catalogo-Nombre": { S: options.Drogstore },
    "Productos": { M:
      items }
  };
  let PutRequest: PutRequest = {
    Item
  };
  return PutRequest;
};

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
