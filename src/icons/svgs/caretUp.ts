import { generateIcon } from "../generate";
export function caretUp(height?:number, width?:number, className?:string) {
  return generateIcon(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-up' viewBox='0 0 16 16'>   <path d='M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659'/> </svg>`, height, width, className);
}