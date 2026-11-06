export const roles = [
 {id:'young-man',name:'阿青',label:'青年男性',tone:'清朗親切，陪你發現校園',color:'#d9e6d9',voice:'Eddy (中文（台灣）)',rate:190},
 {id:'young-woman',name:'小禾',label:'青年女性',tone:'輕快溫柔，分享青春日常',color:'#f0dfc7',voice:'Flo (中文（台灣）)',rate:190},
 {id:'senior-man',name:'林老師',label:'熟齡男性',tone:'沉穩從容，細說歲月故事',color:'#d9e1e7',voice:'Grandpa (中文（台灣）)',rate:175},
 {id:'senior-woman',name:'周老師',label:'熟齡女性',tone:'溫暖細膩，拾起校園記憶',color:'#eadbd6',voice:'Grandma (中文（台灣）)',rate:175}
];
export const stations = [
 {id:'01',title:'創校故事',eyebrow:'一切的起點',text:'歡迎來到校史時光導覽。這是一段示範內容，並非學校的真實歷史。請看看眼前的老照片，想像校園最初的模樣。一所學校的起點，往往來自許多人對教育的期待。從第一間教室，到第一屆學生，每一個小小的開始，都可能留下深遠的影響。正式導覽將在這裡介紹創校背景、重要人物，以及早期校園的發展。現在，邀請你停留片刻，找找照片裡最吸引你的細節。'},
 {id:'02',title:'校園生活',eyebrow:'青春留下的聲音',text:'這一站，我們一起走進校園生活。以下是流程展示的示範內容，不代表學校的真實紀錄。課桌、制服、社團合照，都是一代又一代學生的共同記憶。你還記得下課鐘響起時，走廊上的聲音嗎？也許是一場球賽，也許是一次表演，或是一位老師的鼓勵。正式導覽將透過校友故事與生活物件，呈現不同年代的學習日常。請觀察展品，想一想，哪一件物品最能讓你聯想到自己的學生時光？'},
 {id:'03',title:'傳承與展望',eyebrow:'把故事交給未來',text:'來到這一站，我們把目光從過去帶向未來。這段內容僅供導覽流程示範，不是學校的正式介紹。校史不只記錄已經發生的事，也承載每一代人共同珍惜的價值。當校園建築改變，學習方式更新，那份對知識的好奇與對彼此的關懷，仍能繼續傳承。正式導覽將在這裡介紹學校的教育理念與未來方向。離開之前，邀請你想一想，希望未來的學弟妹，從我們這個時代記住什麼？謝謝你的聆聽。'}
];
export function stationFromCode(raw, base) {
 try {const u=new URL(raw,base), b=new URL(base); if(u.origin!==b.origin||u.pathname!==b.pathname)return null; const m=/^#station=(\d{2})$/.exec(u.hash);return stations.find(s=>s.id===m?.[1])||null;}catch{return null;}
}
