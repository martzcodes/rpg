export const retrieveExpanseData = (dataLocation: string) => {
  return fetch(dataLocation).then((value: any) => value.json());
};
