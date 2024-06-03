
import { generateIcon } from "../generate";
export function Planner(height, width, className?) {
    return generateIcon(`<svg width='32' height='32' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'><defs><style>.planner-cls-1{fill:#185c37;}.planner-cls-2{fill:#33c481;}.planner-cls-3{fill:none;}.planner-cls-4{fill:#107c41;}.planner-cls-5{fill:#21a366;}</style></defs><path class='planner-cls-1' d='M21.744,57H11.256A2.256,2.256,0,0,1,9,54.744V31.25l7.91667-2.33333L24,31.25V54.744A2.256,2.256,0,0,1,21.744,57Z'/><path class='planner-cls-2' d='M38,7H51.67A2.33,2.33,0,0,1,54,9.33V36.67A2.33,2.33,0,0,1,51.67,39H38L35.33333,21.91667Z'/><rect class='planner-cls-3' x='4' y='4' width='56' height='56'/><path class='planner-cls-4' d='M9,9.33V32H24V48H36.67A2.33,2.33,0,0,0,39,45.67V7H11.33A2.33,2.33,0,0,0,9,9.33Z'/><rect class='planner-cls-5' x='24' y='7' width='15' height='17'/></svg>`, height, width, className, 0);
}
