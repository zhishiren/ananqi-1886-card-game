window.GAME_DATA = {
  "roles": [
    {
      "id": "mentor",
      "name": "导师",
      "faction": "反抗",
      "group": "resist",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/mentor-unified-v1.png",
      "signature": [
        "鼓舞",
        "遗志"
      ],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [],
      "victory": "胜利条件是权威阵营全部死亡，群众阵营角色(不包括内奸阵营)成活不少于1。",
      "source": "角色与技能表!B2:L2",
      "victorySource": "角色与技能表!C45",
      "position": "团队支援",
      "tags": "治疗 · 分牌",
      "tagline": "以鼓舞凝聚同伴，以遗志延续反抗。",
      "review": "角色核心清晰。鼓舞的全体治疗受红桃 A 稀缺性制约；遗志需确定能否自留、如何分配。"
    },
    {
      "id": "union",
      "name": "工会",
      "faction": "反抗",
      "group": "resist",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/union-unified-v1.png",
      "signature": [
        "合作社",
        "救济"
      ],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [],
      "victory": "胜利条件是权威阵营全部死亡，群众阵营角色(不包括内奸阵营)成活不少于1。",
      "source": "角色与技能表!B3:L3",
      "victorySource": "角色与技能表!C46",
      "position": "补给治疗",
      "tags": "补牌 · 救济",
      "tagline": "让牌流动起来，让同伴留在牌桌上。",
      "review": "合作社与救济定位一致。先测 J/Q/K 转治疗的频率，再决定救济是否需要每回合一次。"
    },
    {
      "id": "assassin",
      "name": "刺客",
      "faction": "反抗",
      "group": "resist",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/assassin-unified-v1.png",
      "signature": [
        "炸弹",
        "刺杀"
      ],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [],
      "victory": "胜利条件是权威阵营全部死亡，群众阵营角色(不包括内奸阵营)成活不少于1。",
      "source": "角色与技能表!B4:L4",
      "victorySource": "角色与技能表!C47",
      "position": "进攻突破",
      "tags": "群攻 · 追击",
      "tagline": "一次出手之后，还留有第二次机会。",
      "review": "刺杀的补刀条件合理；炸弹必须定义虚拟斗的点数，否则无法与防比较。"
    },
    {
      "id": "worker",
      "name": "工农",
      "faction": "群众",
      "group": "people",
      "hp": 4,
      "limit": 5,
      "count": 3,
      "art": "assets/worker-unified-v1.png",
      "signature": [],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [
        "躺平隐匿",
        "忍辱复仇"
      ],
      "victory": "胜利条件是权威阵营全部死亡，群众阵营角色(不包括内奸阵营)成活不少于1。该角色有三人。",
      "source": "角色与技能表!B5:L5",
      "victorySource": "角色与技能表!C48",
      "position": "群众协作",
      "tags": "避税 · 掩护",
      "tagline": "沉默也是选择，互助也是力量。",
      "review": "工农有三个席位。躺平需要持续时间；忍辱获得斗的来源需要写明。"
    },
    {
      "id": "cultist",
      "name": "神棍",
      "faction": "群众",
      "group": "hidden",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/cultist-unified-v1.png",
      "signature": [],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [
        "躺平隐匿",
        "忍辱复仇"
      ],
      "victory": "表面上是群众角色，在教会角色死亡后升级为新的教会角色，胜利条件是成立教会角色后胜利。",
      "source": "角色与技能表!B6:L6",
      "victorySource": "角色与技能表!C49",
      "position": "潜伏继任",
      "tags": "隐藏 · 继任教会",
      "tagline": "以群众身份入局，等待另一种权力。",
      "review": "转化顺序、继任时血量和手牌处理未定；继任前能否使用群众通用技存在表文冲突。"
    },
    {
      "id": "spy",
      "name": "密探",
      "faction": "群众",
      "group": "hidden",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/spy-unified-v1.png",
      "signature": [],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [
        "躺平隐匿",
        "忍辱复仇"
      ],
      "victory": "表面上是群众角色，在军警角色死亡后升级为新的军警角色，胜利条件是成立军警角色后胜利。",
      "source": "角色与技能表!B7:L7",
      "victorySource": "角色与技能表!C50",
      "position": "潜伏继任",
      "tags": "隐藏 · 继任军警",
      "tagline": "在公开的立场背后，保留第二重身份。",
      "review": "建议先完成死亡事件中的继任，再统一检查胜负，避免最后一名权威死亡时跳过继任。"
    },
    {
      "id": "scab",
      "name": "工贼",
      "faction": "群众",
      "group": "hidden",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/scab-unified-v1.png",
      "signature": [],
      "shared": [
        "互助",
        "掩护",
        "爆料揭露"
      ],
      "joint": [
        "总罢工",
        "民兵武装"
      ],
      "common": [
        "躺平隐匿",
        "忍辱复仇"
      ],
      "victory": "表面上是群众角色，在资佬角色死亡后升级为新的资佬角色，胜利条件是成立资佬角色后胜利。",
      "source": "角色与技能表!B8:L8",
      "victorySource": "角色与技能表!C51",
      "position": "潜伏继任",
      "tags": "隐藏 · 继任资佬",
      "tagline": "同处一张牌桌，未必站在同一边。",
      "review": "“成为新资佬”建议视为技能及阵营转换，而非复活；是否保留现有生命与手牌需统一。"
    },
    {
      "id": "police",
      "name": "军警",
      "faction": "权威",
      "group": "authority",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/police-unified-v1.png",
      "signature": [
        "征税",
        "征兵",
        "搜查"
      ],
      "shared": [
        "巧取豪夺",
        "内幕交易",
        "转嫁矛盾"
      ],
      "joint": [
        "大图沙"
      ],
      "common": [],
      "victory": "胜利条件是反抗阵营全部死亡。",
      "source": "角色与技能表!B9:L9",
      "victorySource": "角色与技能表!C52",
      "position": "资源压制",
      "tags": "征税 · 征兵",
      "tagline": "控制手牌，也控制行动的余地。",
      "review": "征税取牌对象没有上限，保留四张不能限制全场失牌；这是优先测试的资源风险。"
    },
    {
      "id": "capitalist",
      "name": "资佬",
      "faction": "权威",
      "group": "authority",
      "hp": 4,
      "limit": 10,
      "count": 1,
      "art": "assets/capitalist-unified-v1.png",
      "signature": [
        "贪婪",
        "剥削",
        "收买"
      ],
      "shared": [
        "巧取豪夺",
        "内幕交易",
        "转嫁矛盾"
      ],
      "joint": [
        "大图沙"
      ],
      "common": [],
      "victory": "胜利条件是反抗阵营全部死亡。",
      "source": "角色与技能表!B10:L10",
      "victorySource": "角色与技能表!C53",
      "position": "资源积累",
      "tags": "囤牌 · 交易",
      "tagline": "将手中的资源，变成下一步的筹码。",
      "review": "十张上限可以保留，但贪婪与剥削原文完全重复，剥削尚缺独立效果。"
    },
    {
      "id": "church",
      "name": "教会",
      "faction": "权威",
      "group": "authority",
      "hp": 4,
      "limit": 5,
      "count": 1,
      "art": "assets/church-unified-v1.png",
      "signature": [
        "神权",
        "赎罪券",
        "离间"
      ],
      "shared": [
        "巧取豪夺",
        "内幕交易",
        "转嫁矛盾"
      ],
      "joint": [
        "大图沙"
      ],
      "common": [],
      "victory": "胜利条件是反抗阵营全部死亡。",
      "source": "角色与技能表!B11:L11",
      "victorySource": "角色与技能表!C54",
      "position": "控制博弈",
      "tags": "免疫 · 离间",
      "tagline": "信仰、索取与庇护，在此交织。",
      "review": "赎罪券对全场索取或扣血，且与多项免疫叠加，控制强度优先实测。"
    }
  ],
  "skills": [
    {
      "id": 1,
      "name": "斗",
      "original": "所有人基本技能：单数字卡牌3、5、7、9：类似三国杀中的杀。需要比较对方出防的卡牌大小！攻击能力从小到大为3-9。每角色每回合只能出一张斗。",
      "source": "角色与技能表!C14"
    },
    {
      "id": 2,
      "name": "防",
      "original": "所有人基本技能：双数字卡牌2、4、6、8、10：防住对方的斗，类似三国杀中的防。需要比较对方出斗的卡牌大小！防御能力从小到大为2-10",
      "source": "角色与技能表!C15"
    },
    {
      "id": 3,
      "name": "决斗",
      "original": "所有人基本技能：卡牌中的K,即为决斗牌，双方应各出一张斗，且需要比大小。功能与三国杀中的决斗相似。",
      "source": "角色与技能表!C16"
    },
    {
      "id": 4,
      "name": "救援",
      "original": "所有人基本技能：卡牌中的A,即为救援牌，功能与三国杀中的桃类似，可用于自己和他人。A意为apple。",
      "source": "角色与技能表!C17"
    },
    {
      "id": 5,
      "name": "鼓舞",
      "original": "导师的角色技：使用一张红桃A，可以为所有群众阵营和反抗阵营加一滴血，类似桃园结义。",
      "source": "角色与技能表!C18"
    },
    {
      "id": 6,
      "name": "合作社",
      "original": "工会的角色技：使用一张红桃J，可以让所有群众阵营和反抗阵营获得一张牌，类似五谷丰登。",
      "source": "角色与技能表!C19"
    },
    {
      "id": 7,
      "name": "炸弹",
      "original": "刺客的角色技：使用一张黑桃Q，视作同时向权威阵营各角色出一张斗。",
      "source": "角色与技能表!C20"
    },
    {
      "id": 8,
      "name": "征税",
      "original": "军警的角色技：在拿牌阶段，可以从所有角色的手牌区抽取一张手牌，保留不超过4张。对教会无效。",
      "source": "角色与技能表!C21"
    },
    {
      "id": 9,
      "name": "贪婪",
      "original": "资佬的角色技：被动技，资佬的手牌上限为10。",
      "source": "角色与技能表!C22"
    },
    {
      "id": 10,
      "name": "神权",
      "original": "教会的角色技：被动技，决斗、征兵、征税对其无效；在无手牌时出斗对其无效。",
      "source": "角色与技能表!C23"
    },
    {
      "id": 11,
      "name": "遗志",
      "original": "导师的角色技：收到一点伤害后，可以获得两张手牌转移给其他角色，类似郭嘉。",
      "source": "角色与技能表!C24"
    },
    {
      "id": 12,
      "name": "救济",
      "original": "工会的角色技：可以使用任意一张JQK，让任意角色恢复一点生命值。",
      "source": "角色与技能表!C25"
    },
    {
      "id": 13,
      "name": "刺杀",
      "original": "刺客的角色技：当第一张斗被防住后，可以再出一张斗。",
      "source": "角色与技能表!C26"
    },
    {
      "id": 14,
      "name": "征兵",
      "original": "军警的角色技：使用两张斗，所有角色要出一张斗，否则掉一个生命值。类似南蛮入侵。",
      "source": "角色与技能表!C27"
    },
    {
      "id": 15,
      "name": "剥削",
      "original": "资佬的角色技：被动技，资佬的手牌上限为10。",
      "source": "角色与技能表!C28"
    },
    {
      "id": 16,
      "name": "赎罪券",
      "original": "教会的角色技：在拿牌阶段，所有角色应贡献1张牌，否则失去一点生命值。",
      "source": "角色与技能表!C29"
    },
    {
      "id": 17,
      "name": "搜查",
      "original": "军警的角色技：使用1张J，可以让一名角色的手牌公开。",
      "source": "角色与技能表!C30"
    },
    {
      "id": 18,
      "name": "收买",
      "original": "资佬的角色技：使用一张Q,可以公开任意角色的手牌。",
      "source": "角色与技能表!C31"
    },
    {
      "id": 19,
      "name": "离间",
      "original": "教会的角色技：使用一张J,可以让任意两个角色决斗。",
      "source": "角色与技能表!C32"
    },
    {
      "id": 20,
      "name": "躺平隐匿",
      "original": "工农的角色技：本轮选择不出牌，则免遭征税、赎罪券和剥削的影响。",
      "source": "角色与技能表!C33"
    },
    {
      "id": 21,
      "name": "忍辱复仇",
      "original": "工农的角色技：当受到巧取豪夺时，可以获得一张斗作为手牌。",
      "source": "角色与技能表!C34"
    },
    {
      "id": 22,
      "name": "互助",
      "original": "工农及反抗阵营的角色技：指定的对方与你可以互换一张手牌，若对方无手牌，则为直接赠送一张。",
      "source": "角色与技能表!C35"
    },
    {
      "id": 23,
      "name": "掩护",
      "original": "工农及反抗阵营的角色技：为任意一方出防。",
      "source": "角色与技能表!C36"
    },
    {
      "id": 24,
      "name": "爆料揭露",
      "original": "工农及反抗阵营的角色技：若为Q,则可以公开某人的手牌。",
      "source": "角色与技能表!C37"
    },
    {
      "id": 25,
      "name": "巧取豪夺",
      "original": "权威阵营的角色技：若为JQ，则可以夺取对方一张手牌，类似顺手牵羊。",
      "source": "角色与技能表!C38"
    },
    {
      "id": 26,
      "name": "内幕交易",
      "original": "权威阵营的角色技：指定的权威阵营与你可以互换多张手牌",
      "source": "角色与技能表!C39"
    },
    {
      "id": 27,
      "name": "转嫁矛盾",
      "original": "权威阵营的角色技：使用一张JQK，可以将斗转嫁给其他角色。",
      "source": "角色与技能表!C40"
    },
    {
      "id": 28,
      "name": "总罢工",
      "original": "工农及反抗阵营的角色技：使用一张K,询问其他角色，若共有三张K，则发起总罢工，权威阵营在下一轮无法通过征税剥削和赎罪券获得手牌。",
      "source": "角色与技能表!C41"
    },
    {
      "id": 29,
      "name": "民兵武装",
      "original": "工农及反抗阵营的角色技：使用一张10，询问其他角色，若共有两人出10，可以让所有群众阵营随机获得一张斗。",
      "source": "角色与技能表!C42"
    },
    {
      "id": 30,
      "name": "大图沙",
      "original": "权威阵营的角色技：使用一张K,询问其他角色，若共出三张K,则发起大图沙，所有群众和反抗阵营都出一张防，否则失去一点生命值。",
      "source": "角色与技能表!C43"
    }
  ],
  "source": "1886.xlsx",
  "hpSource": "角色与技能表!C56"
};
