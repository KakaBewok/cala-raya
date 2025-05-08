import Hashids from "hashids";

const hashids = new Hashids("coyuli", 5);

export function encode(ids: number[]) {
  return hashids.encode(ids);
}

export function decode(hash: string) {
  return hashids.decode(hash);
}
