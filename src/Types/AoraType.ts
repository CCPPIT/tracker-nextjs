import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FrequencyType } from "./FrequencyType";

export type AoraType={
    _id:string,
    name:string,
    icon:IconProp,
    frequency:FrequencyType[],
}

export type DayOption={
    id:number,
    name:string,
    isSelected:boolean
}

