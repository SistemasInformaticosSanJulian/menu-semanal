interface HTMLElement {
  value: any;
  checked: any;
}

export { };

declare global {
  interface Document {
    getElementById(id: string): any;
  }
}
