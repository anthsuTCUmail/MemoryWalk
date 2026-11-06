import {execFileSync} from 'node:child_process';
import {writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';import {join} from 'node:path';import {roles,stations} from '../data.js';
const dir=mkdtempSync(join(tmpdir(),'school-guide-'));
try{for(const s of stations){const text=join(dir,'text.txt');writeFileSync(text,s.text);for(const r of roles){const aiff=join(dir,'voice.aiff');execFileSync('say',['-v',r.voice,'-r',String(r.rate),'-f',text,'-o',aiff]);execFileSync('ffmpeg',['-y','-loglevel','error','-i',aiff,'-codec:a','libmp3lame','-q:a','4',`assets/audio/${s.id}-${r.id}.mp3`]);console.log(`${s.id}-${r.id}.mp3`);}}}finally{rmSync(dir,{recursive:true,force:true});}
