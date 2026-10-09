export type AgeBand="0-2"|"3-5"|"6-8"|"9-12"|"13-15"|"16-18";
export type Activity={id:string;title:string;minutes:number;ageBands:AgeBand[];parentPrompt:string;steps:string[];reviewStatus:"draft"|"approved"};
export const draftActivities:Activity[]=[
{id:"question-jar",title:"Questions Are Welcome",minutes:10,ageBands:["6-8","9-12","13-15","16-18"],parentPrompt:"What would you like to understand together?",steps:["Each person suggests a question.","Choose one to explore.","Write down what needs checking with a qualified source."],reviewStatus:"draft"},
{id:"gratitude-circle",title:"Gratitude Circle",minutes:5,ageBands:["3-5","6-8","9-12","13-15","16-18"],parentPrompt:"What is one thing you appreciated today?",steps:["Invite everyone to share, or pass.","Listen without correcting feelings.","Choose a kind action for tomorrow."],reviewStatus:"draft"},
{id:"kindness-at-home",title:"Kindness at Home",minutes:10,ageBands:["3-5","6-8","9-12","13-15","16-18"],parentPrompt:"How could we help someone this week?",steps:["Suggest one achievable act.","Agree on a time.","Reflect privately after doing it."],reviewStatus:"draft"},
{id:"mosque-visit",title:"First Mosque Visit",minutes:15,ageBands:["0-2","3-5","6-8","9-12","13-15","16-18"],parentPrompt:"What would help our family feel comfortable visiting?",steps:["Check family facilities and accessibility.","Discuss what to expect.","Prepare questions for the mosque coordinator."],reviewStatus:"draft"}];
export function activitiesForAge(age:AgeBand){return draftActivities.filter(a=>a.ageBands.includes(age));}
