
declare const Release;

declare interface Window {
  Release: boolean;
}

//https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
declare namespace ENV {
  const isRelease: boolean;
}
