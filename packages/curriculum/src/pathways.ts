export type AgeBand = "0-2"|"3-5"|"6-8"|"9-12"|"13-15"|"16-18";
export type FamilyGoal="foundations"|"prayer"|"quran"|"family-conversations"|"character";
export type ParentConfidence="new"|"learning"|"confident";
export type FamilyProfile={ageBand:AgeBand;confidence:ParentConfidence;goal:FamilyGoal;minutes:5|10|20};
export type PlanStep={id:string;title:string;parentFocus:string;childFocus:string;activity:string;minutes:number};
const plans:Record<FamilyGoal,PlanStep[]>={
 foundations:[{id:"foundations-1",title:"Learning together",parentFocus:"Reflect on your journey and what you want to learn.",childFocus:"Invite your child's questions about your journey.",activity:"Share something each person is curious about.",minutes:5},{id:"foundations-2",title:"Gratitude",parentFocus:"Explore gratitude and its place in everyday life.",childFocus:"Name things you appreciate.",activity:"Share three appreciations together.",minutes:5}],
 prayer:[{id:"prayer-1",title:"Why people pray",parentFocus:"Review the purpose of salah with verified sources when available.",childFocus:"Ask what prayer means to them.",activity:"Talk about moments of gratitude and reflection.",minutes:5}],
 quran:[{id:"quran-1",title:"Listening to the Qur'an",parentFocus:"Explore what Qur'an is and how to learn it with a qualified teacher.",childFocus:"Listen to an approved recitation with a caregiver.",activity:"Discuss what questions came up.",minutes:5}],
 "family-conversations":[{id:"conversation-1",title:"Questions are welcome",parentFocus:"Practice listening before responding.",childFocus:"Ask any question without fear of embarrassment.",activity:"Take turns asking and listening.",minutes:5}],
 character:[{id:"character-1",title:"Kindness at home",parentFocus:"Reflect on modeling kindness and patience.",childFocus:"Notice an act of kindness.",activity:"Choose one kind act together.",minutes:5}]
};
export function createStarterPlan(profile:FamilyProfile):PlanStep[]{const steps=plans[profile.goal];return steps.map(step=>({...step,minutes:Math.min(step.minutes,profile.minutes),childFocus:profile.ageBand==="0-2"?"Model this gently through everyday care; no child screen time needed.":profile.ageBand==="13-15"||profile.ageBand==="16-18"?"Invite an open-ended discussion, respecting independent views.":step.childFocus}));}
