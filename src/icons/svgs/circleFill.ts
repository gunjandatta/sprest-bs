import { generateIcon } from "../generate";
export function circleFill(height?:number, width?:number, className?:string) {
  return generateIcon(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-circle-fill' viewBox='0 0 16 16'>   <circle cx='8' cy='8' r='8'/> </svg>`, height, width, className);
}