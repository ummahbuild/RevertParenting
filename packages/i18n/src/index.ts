export type Locale="en"|"sw"|"ar";
const messages={en:{welcome:"Learn Islam. Grow together.",parent:"For the parent",child:"For the child",together:"Together",draft:"Preview only. Curriculum review pending."},sw:{welcome:"Jifunze Uislamu. Kua pamoja.",parent:"Kwa mzazi",child:"Kwa mtoto",together:"Pamoja",draft:"Onyesho la awali tu. Mapitio ya maudhui yanasubiriwa."},ar:{welcome:"تعلّم الإسلام. انموا معًا.",parent:"للوالدين",child:"للطفل",together:"معًا",draft:"معاينة فقط. المحتوى قيد المراجعة."}} as const;
export function translate(locale:Locale,key:keyof typeof messages.en):string{return messages[locale]?.[key]??messages.en[key];}
export function direction(locale:Locale):"rtl"|"ltr"{return locale==="ar"?"rtl":"ltr";}
