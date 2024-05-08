/**
 * ResultClass
 * name ：卦名
 * phase：卦象
 * image：图片
 * moral：卦名
 * original：原文
 * explain：译文
 * solution：解卦
 * body：部位
 * radius：范围
 * enlighten：启示
 */
class ResultClass {
  '999999' = {
    name: '乾卦',
    phase: '下乾上乾',
    image: '999999.png',
    moral: '上上卦',
    article: [
      { 
        name: '初九爻',
        original: `
        <p>初九。潜龙勿用。</p><br />
        <p>象曰：潜龙勿用，阳在下也。</p><br />
        `,
        explain: `
        <p>初九：潜藏的龙，无法施展。</p><br />
        <p>《象辞》说：潜藏的龙，无法施展，因为初九阳爻处在一卦的下位，所以压抑难伸。</p><br />
        `,
        solution: `
        <p>《时运：培养实力，等待机会。</p><br />
        <p>《财运：宜守不宜攻。</p><br />
        <p>《家宅：娶妻小心。</p><br />
        <p>《身体：保养为宜。</p><br />
        `
      }
    ],
    solution: `
    <p>时运：临事刚健，自强不息。</p><br />
    <p>财运：施比受有福，不利买而利卖。</p><br />
    <p>家宅：积善有余庆;女子过刚宜慎重。</p><br />
    <p>身体：保健有恒。</p><br />
    <p>大象：天行刚健，自强不息。</p><br />
    <p>运势：飞龙在天，名利双收之象，宜把握机会，争取成果。</p><br />
    <p>事业：大吉大利，万事如意，心想事成，自有天佑，春风得意，事业如日中天。但阳气已达顶点，盛极必衰，务须提高警惕，小心谨慎。力戒骄傲，冷静处世，心境平和，如是则能充分发挥才智，保证事业成功。</p><br />
    <p>经商：十分顺利，有发展向上的大好机会。但切勿操之过急，宜冷静分析形势，把握时机，坚持商业道德，冷静对待中途出现的困难，定会有满意的结果。</p><br />
    <p>求名：潜在能力尚未充分发挥，只要进一步努力，克服骄傲自满情绪，进业修德，以渊博学识和高尚品质，成君子之名。</p><br />
    <p>婚恋：阳盛阴衰，但刚柔可相济，形成美满结果。女性温柔者更佳。</p><br />
    <p>决策：可成就大的事业。坚持此卦的刚健、正直、公允的实质，修养德行，积累知识，坚定信念，自强不息，必能克服困难，消除灾难。</p><br />
    `,
    body: '<p>头、首、胸部、大肠、肺、右足、右下腹、精液、男性生殖器等。</p><br />',
    radius: `
    <p>凡是积极向上的、刚健有力的、权威的、圆形的、男性长辈、珍贵的、富有的、寒冷的、坚硬易碎的、在上的等事物，都归于乾卦。</p><br />
    <p>六十四卦中乾用来象征天、阳、日、君、父、夫、圆、玉、金、冰、寒、马、赤色、快速、快车、不知疲倦等。</p><br />
    `,
    enlighten: `
    <p>乾卦代表着积极向上，刚强。但是生活中，特别刚强、坚硬的事物，往往能够直顶压力，挑得起大梁。相应地，它的柔韧性就会欠缺，在超强压力下，就会断裂。做人做事要既能刚强，扛得起重压，同时还具有一定的韧度和耐磨性，实在面临超压，还能变通，稍作弯曲，做一些让步，避免了折断。</p><br />
    <p>乾卦是代表积极向上的，权威的，讲义气的。这些特征与古代的项羽是非常相似，但是，我们看到的结果是，项羽最后乌江自勿」而死，这证明了“刚则易折”的道理。</p><br />
    <p>占得此卦者，一是不要过于刚硬，要能屈能伸。另外在做事时，不要不知疲倦地工作，要注意休息，一张一弛才是文武之道，身体方面要注意中枢神经、头脑、呼吸系统、骨质、新陈代谢等方面的疾病。</p><br />
    <p>我们知道，乾为天，代表着天气晴朗，场所是广场，所以若是对于一个国家，举行什么庆典或是盛大隆重的仪式，占得此卦是非常吉利的。</p><br />
    <p>对于个人来讲，若是占得此卦，可能会有官职。因为乾金为官，上卦为乾多有官职。若是占得此卦，还表示此人作事沉稳，甚得人缘，讲义气，性格刚健，果断，多动少静，动中求财，办事情追求完美，尽善尽美。</p><br />
    <p>占得此卦，在事业上会大吉大利，如日中天。但阳气己达顶点，盛极必衰，务须提高警惕，小心谨慎。宜冷静分析形势，心境平和，做到这一点则能充分发挥才智，保证事业上的成功。</p><br />
    <p>在求名方面，潜在能力尚未充分发挥，只要进一步努力，坚持此卦的刚健、正直、公允的精神，修养德行，积累知识，自强不息，定能成名。占得此卦，有利于外出，结伴而行更佳。</p><br />
    <p>在婚恋方面，阳刚阴柔，刚柔可相济，形成美满结果。女性温柔者更佳。</p><br />
    `
  }

  constructor(data: Partial<ResultClass> = {}) {
    Object.assign(this, data);
  }
}

export { ResultClass }
