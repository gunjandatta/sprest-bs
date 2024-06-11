
import { generateIcon } from "../generate";
export function Stream(height?: number, width?: number, className?: string) {
    return generateIcon(`<svg width='32' height='32' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'><path d='M56.74707,33.0001a2.24387,2.24387,0,0,0-.82373-2.94189L21.37646,8.18321A2.83823,2.83823,0,0,0,17,10.51328V33.0001l17.58333,4Z' fill='#e8467c'/><path d='M17,32V53.44189A2.83844,2.83844,0,0,0,21.37659,55.772L55.92322,33.897A2.25776,2.25776,0,0,0,56.99719,32Z' fill='#bc1948'/><path d='M9.32267,18.41271l17.9899,12.25536a1.631,1.631,0,0,1,0,2.66067L9.32267,45.5841A1.50411,1.50411,0,0,1,7,44.25376V19.74305A1.50411,1.50411,0,0,1,9.32267,18.41271Z' fill='#8c193f'/></svg>`, height, width, className, 0);
}
