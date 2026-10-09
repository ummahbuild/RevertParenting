export type AgeBand="0-2"|"3-5"|"6-8"|"9-12"|"13-15"|"16-18";
export type ReviewStatus="draft"|"scholar_review"|"safety_review"|"approved"|"published";
export interface FamilyLesson{id:string;title:string;ageBands:AgeBand[];parentPrimer:string;childExplanation:Partial<Record<AgeBand,string>>;activity:string;evidenceIds:string[];reviewStatus:ReviewStatus;version:number;}
export function publishable(lesson:FamilyLesson):boolean{return lesson.reviewStatus==="published"&&lesson.evidenceIds.length>0&&lesson.ageBands.every(a=>Boolean(lesson.childExplanation[a]));}
export function recommendLesson(lessons:FamilyLesson[],age:AgeBand):FamilyLesson|undefined{return lessons.find(l=>l.reviewStatus==="published"&&l.ageBands.includes(age));}
