export type JourneyStage="exploring"|"recent"|"established"|"returning"|"undisclosed";
export type Goal="foundations"|"prayer"|"quran"|"family-conversations"|"character";
export type Locale="en"|"ar"|"sw"|"ur"|"fr"|"es"|"id"|"ha";
export type Profile={journeyStage?:JourneyStage;priorReligiousContext?:string;parentLanguage:Locale;childLanguage:Locale;ageBand:"0-2"|"3-5"|"6-8"|"9-12"|"13-15"|"16-18";goal:Goal;minutes:5|10|20;offlinePreferred?:boolean};
export type Recommendation={moduleId:string;reason:string;parentLanguage:Locale;childLanguage:Locale;minutes:number;requiresReviewedContent:true};
const modules:Record<Goal,string>={foundations:"A03",prayer:"A09",quran:"H01","family-conversations":"B05",character:"I01"};
export function recommendForFamily(profile:Profile):Recommendation{return {moduleId:modules[profile.goal],reason:`Recommended because you selected ${profile.goal} and ${profile.minutes} minutes. You can change this anytime.`,parentLanguage:profile.parentLanguage,childLanguage:profile.childLanguage,minutes:profile.minutes,requiresReviewedContent:true};}
export function backgroundDoesNotChangeCoreLesson(a:Profile,b:Profile):boolean{return recommendForFamily(a).moduleId===recommendForFamily(b).moduleId;}
