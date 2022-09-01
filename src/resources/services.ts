import fetch, { Response } from "node-fetch";

export const callApi = async (path: string) => {
    return await fetch(path).then((resp: Response) => resp?.json());
}