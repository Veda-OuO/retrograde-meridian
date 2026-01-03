export const EXAM_RUBRIC = {
  "1": {
    score: 40,
    requiredGroups: [
      ['miss flora','flora'],
      ['fred wells','fred']
    ],
    maxSuspectNames: 2,
    exclusiveSuspects: true
  }
  // Add more questions...
};

function norm(s){
  return s.toLowerCase()
    .replace(/['’]/g,'')
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

const SUSPECT_GROUPS = [
  ['miss flora','flora'],
  ['fred wells','fred'],
  ['allen flanders','allen','flanders'],
  ['dale dawson','dale','dawson'],
  ['marla barton','marla','barton'],
  ['angie wells','angie'],
  ['mrs lawrence','lawrence'],
  ['thomas grady','grady'],
  ['wesley range','wesley','range']
];

function countDistinctSuspects(text){
  const found = new Set();
  SUSPECT_GROUPS.forEach(group=>{
    if (group.some(tok=> new RegExp(`\\b${tok.replace(/\s+/g,'\\s+')}\\b`,'i').test(text)))
      found.add(group[0]); // canonical = first entry
  });
  return found;
}

function gradeAnswer(qid, raw){
  const cfg = EXAM_RUBRIC[qid];
  if(!cfg) return { score:0, max:0, details:'No rubric' };
  const n = norm(raw);
  // required groups
  let groupsHit = 0;
  cfg.requiredGroups.forEach(g=>{
    if (g.some(tok=> new RegExp(`\\b${tok.replace(/\s+/g,'\\s+')}\\b`,'i').test(n)))
      groupsHit++;
  });
  const all = groupsHit === cfg.requiredGroups.length;
  // suspect stuffing
  const suspects = countDistinctSuspects(n);
  let stuffing = false;
  if (cfg.exclusiveSuspects){
    // only suspects in required groups allowed
    const allowed = new Set(cfg.requiredGroups.flat());
    SUSPECT_GROUPS.forEach(g=>{
      if (g.some(tok=> new RegExp(`\\b${tok.replace(/\s+/g,'\\s+')}\\b`,'i').test(n))){
        if (!g.some(tok=> allowed.has(tok))) stuffing = true;
      }
    });
  }
  if (cfg.maxSuspectNames && suspects.size > cfg.maxSuspectNames) stuffing = true;
  let score = all ? cfg.score : 0;
  if (stuffing) score = 0;
  return {
    score,
    max: cfg.score,
    details: stuffing ? 'Invalid: extra names' : (all ? 'OK' : 'Missing required names')
  };
}

export function gradeExam(answerMap){
  let total=0, max=0;
  const breakdown = {};
  Object.entries(answerMap).forEach(([qid, txt])=>{
    const r = gradeAnswer(qid, txt||'');
    breakdown[qid]=r;
    total += r.score;
    max += r.max;
  });
  return { total, max, breakdown };
}