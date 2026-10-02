/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '@svg-maps/india' {
  export interface SVGMapLocation {
    id: string;
    name: string;
    path: string;
  }
  export interface SVGMap {
    label: string;
    viewBox: string;
    locations: SVGMapLocation[];
  }
  const India: SVGMap;
  export default India;
}
