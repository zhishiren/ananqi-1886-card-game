# 十位角色统一插画 · v1

生成方式：内置 image_gen，style-transfer 编辑模式，逐角色独立生成。最终资产保存在本项目内；原图与已批准的工会、教会旧版本均保留。未改动 Excel、角色数值、技能或对局规则。

## 设计方向

以用户评价最高的资佬为主风格参考：中等粗细的复古钢笔轮廓、短而疏的局部排线、大面积留白。刺客和工会保留已有形象，导师和教会减少密集细节；工农、神棍、密探、工贼、军警重点改善人物比例、面部与手绘质感。

反抗：锈红（纸色 #e9c5b3）；群众：赭黄（纸色 #e5d095）；权威：灰蓝（纸色 #bfcfdf）。神棍、密探、工贼按初始群众阵营着色。

插画文件保留白底黑线，网页通过同一套 CSS 阵营纸色和 multiply 混合显示。这样图鉴、首页、详情与对局始终一致，不在不同图片上重复烘焙色差。图鉴画框统一为方形并完整显示插画。

## 最终图片

- [导师](assets/mentor-unified-v1.png)：保留圆眼镜、长胡须与 A 徽章，减少脸部及胡须的密集排线。
- [工会](assets/union-unified-v1.png)：保留工装背带裤、卷袖衬衫与举拳动作；英文条幅 SOLIDARITY、讲台 UNION。
- [刺客](assets/assassin-unified-v1.png)：保留礼帽、小胡须、持枪动作及沉着表情。
- [工农](assets/worker-unified-v1.png)：将符号化形象重绘为有清晰五官的工农，保留草帽、工装与农叉。
- [神棍](assets/cultist-unified-v1.png)：保留软尖帽、长袍、手杖与举指动作，以夸谈神态表现神棍。
- [密探](assets/spy-unified-v1.png)：保留低帽檐与高领大衣，加入警觉的侧视眼神。
- [工贼](assets/scab-unified-v1.png)：保留安全帽与眼罩，补全工装及人物面部。
- [军警](assets/police-unified-v1.png)：保留军帽、制服、大胡须与佩刀，调整成人比例和傲慢神态。
- [资佬](assets/capitalist-unified-v1.png)：全套画风主参考，保留高礼帽、单片眼镜、卷胡须及简洁排线。
- [教会](assets/church-unified-v1.png)：保留虚构贪婪教权人物的负面讽刺形象、赎罪券与钱袋，减少细密纹饰；标题 INDULGENCE。

## 完整生成提示词

资佬使用其原图作为目标和风格参考。其余角色的输入图 1 是对应旧图，输入图 2 是生成后的 `capitalist-unified-v1.png`。工会旧图使用 `union-v3.png`，教会旧图使用 `church-v2.png`；其余使用角色同名原图。

### 导师

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 导师 / Mentor. Preserve the elder's recognizable bald crown with side hair, oval wire spectacles, thoughtful steady eyes, wide flowing beard and moustache, period suit and small circled A lapel badge. Recreate as a clear head-and-chest bust with generous margins. IMPORTANT the target is too densely engraved: remove all full-face horizontal stripe fills, almost all beard strands and suit stripes; instead define beard with a few flowing contour groups and 3–5 small separated hatch groups. Keep a thoughtful humane expression. Drawing must be as economical and uncluttered as the Capitalist master, not a detailed historical portrait. Only badge text: a single 'A' in a circle.
```

### 工会

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 工会 / Union organizer. Keep the approved youthful adult male, natural facial anatomy and understated natural nose, determined confident face, raised fist, rolled-sleeve collared work shirt and BIB OVERALLS with a chest pocket. Preserve workwear, NOT a suit. Preserve top cloth banner and the smaller foreground podium sign. Adapt the clean but thick cartoon line to the medium-weight organic pen lines and sparse hatching of image 2; face must remain recognizable, not over-detailed or realistic. Compose square with head large and both banner and sign fully inside frame and clear margins; banner modestly tall so character is primary. Exact bold uppercase text in top banner: 'SOLIDARITY' (S O L I D A R I T Y); exact podium text: 'UNION'. No Chinese lettering or extra words. The banner letters must be dark, crisp, correctly spelled and complete.
```

### 刺客

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 刺客 / Assassin. Keep recognizable fedora, short neat moustache, serious composed expression, suit and tie, and a naturally drawn hand holding the same simple pistol toward the front-left of the picture. Head-and-upper-chest framing, whole hat and hand/pistol inside frame with margins. Retain the existing face and attitude, polish drawing, unify medium pen outlines and sparse short hatch marks to image 2. No firing, no victim or blood, no extra weapons, no text.
```

### 工农

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 工农 / Worker-farmer. Redesign the crude faceless full-body icon from image 1 into an appealing, believable hand-drawn adult male worker-farmer bust, simple alert eyes and a small goatee, broad worn straw work hat, practical shirt and bib overalls. Upright pitchfork held naturally beside his shoulder in a clearly drawn hand; fork head fully visible. Calm, hardy and quietly determined expression. Keep straw hat, pitchfork, overalls and small goatee; do NOT retain faceless icon face or stick-limb body. No text.
```

### 神棍

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 神棍 / Charlatan. Redesign the crude little wizard icon from image 1 into a believable human charlatan, upper-body/waist portrait, wiry adult with short scruffy beard, bent soft pointed hat, plain worn robe and cord belt, crooked wooden staff held upright at one side, the other hand with one raised index finger as if making a dubious grand claim. A shrewd, overconfident sideways look and a theatrical, boastful mouth; not a fantasy dwarf, not cute mascot, no magical effects. Preserve the old role-defining hat/staff/robe/finger silhouette; replace its heavy pictogram execution with the sparse pen style of image 2. No text.
```

### 密探

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 密探 / Secret agent. Redesign the anonymous pictogram in image 1 as a quiet, watchful adult human spy bust. Preserve low-brim fedora and high coat collar buttoned up, lower face partly concealed naturally by collar. Add restrained narrow visible eyes under brim and subtle natural face structure, thoughtful sideways glance, slim shoulders. Distinct from the assassin: no pistol and no visible moustache or necktie, posture withdrawn rather than aggressive. Keep face legible rather than an empty oval or solid black silhouette. No text.
```

### 工贼

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 工贼 / Strikebreaker. Redesign the crude hard-hat eye-mask icon in image 1 as a hand-drawn adult worker bust with real facial structure, slight furtive expression and a sidelong glance. Preserve simple rounded hardhat with central rib and small brim, eye mask with visible eyes, add ordinary collared work shirt within bust. Face has simple cheek, mouth and natural nose lines. Not a faceless pictogram, superhero, bandit warrior or tactical soldier. Mask is a small role-defining accessory, not a solid black face. No new props, no text.
```

### 军警

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 军警 / Military police. Redesign the awkward short cartoon from image 1 as a stern, pompous adult male uniformed official, upper body to belt, natural adult proportions. Keep flat military cap, large neat moustache, shoulder boards, button-front period uniform, simple cord and diagonal cross-strap, belt and visible sheathed saber hilt at side. Hands behind back. Face must have clear narrow eyes and naturally shaped nose, not chibi or toy-like. The visual satire is directed at his arrogant official bearing. Simplify costume hatching and insignia. No text.
```

### 资佬

```text
Use case: style-transfer.
Asset type: one square character illustration for the 1886 political-satire card game; no card UI.
Input image 1 is both the edit target (Capitalist / 资佬) and the PRIMARY STYLE STANDARD for a coordinated ten-character series.
Primary request: carefully redraw and polish this same character while preserving its excellent simplicity and personality. Keep the tall curled-brim top hat, monocle and chain, curled handlebar moustache, bow tie, suit lapels, recognizable head and bust silhouette. Keep the original wry, self-satisfied expression and stylized natural nose.
Style: hand-drawn vintage editorial pen illustration; medium-weight dark charcoal ink contours with slight organic variation, a SMALL amount of short widely spaced parallel hatching. Spacious unfilled surfaces. No dense engraving, shading gradients or cross-hatching. Match the reference's simple line vocabulary and sparse detail very closely, do not turn it into a realistic portrait or a flat pictogram.
Composition: one centered head-and-chest bust, square canvas, complete hat and shoulders visible, occupy about 85% height with at least 6% clear margin, bottom ends naturally at jacket lapels. Blank pure white background and white interiors throughout so the website can tint the entire paper consistently by faction. Black line art only.
Constraints: no new props, no border, no text, no signature or watermark. Do not add detailed scenery, dramatic lighting, texture, color fills, large black filled hat or realistic skin rendering. Deliver a single finished raster illustration.
```

### 教会

```text
Use case: style-transfer.
Asset type: a single square character illustration in a unified 10-role 1886 political-satire card deck, no card UI.
Input image 1: character redesign target, preserve its role-defining clothing and props but not its old drawing quality. Input image 2: THE EXACT STYLE MASTER, the approved Capitalist pen illustration. Match image 2's line weight, line economy, open white shapes, widely spaced short hatch groups, stylized human facial structure and vintage editorial caricature. All ten should look drawn by the same artist with the same pen.
Style/medium: medium-weight organic charcoal-black pen contours, limited short parallel hatching only in a few shadow edges; mostly unfilled white surfaces. Flat monochrome ink, not realistic engraving or a vector pictogram. Stylized yet coherent adult anatomy with meaningful simple eyes, face and hands. Natural non-distorted nose. No heavily detailed wrinkles, no dense cross-hatching, no black-filled clothes or hats.
Composition: one centered head-and-upper-body character, square canvas, all headwear and role-defining props inside frame, about 85% canvas height with at least 6% clear margins. Head large enough to read at 200px card size, consistent head-and-chest/waist framing with the master. Bottom silhouette ends naturally.
Scene/backdrop: blank pure white background AND white character interiors, so the site can tint the whole paper using a uniform faction color. No paper texture or gradients, no scenery, no border, no new props. No watermark, signature, labels or text unless expressly specified.
Subject: 教会 / Church authority, a FICTIONAL corrupt clerical official from this political-satire game. Preserve the approved mitre, clerical robes, small cross pendant, displayed indulgence certificate in one hand and a coin-filled purse clutched protectively in the other. Preserve the negative satirical personality: complacent half-lidded eyes, raised chin, self-serving smug grin, proud greedy institutional authority; not kindly, holy, heroic or a caricature of believers as a group. Crucial change: the target is much too finely drawn. Radically simplify ALL small ornaments and shading, remove dense fine face/hand engraving, use the exact master image's medium pen contours, sparse widely spaced short hatch marks and large white shapes. Simplified facial features and robe folds, simple unornamented pendant and only a few robe trim motifs. Clear centered head/upper-body bust. Entire certificate/purse/hat inside frame with margins. Certificate heading exact bold uppercase serif text: 'INDULGENCE' (I N D U L G E N C E); below it only a few short ruled lines and a simple seal, no other words. No added text or props.
```

## 验收范围

逐张检查了人物特征、手绘线条、文字拼写与主要道具。语法、角色图片绑定、阵营数据和本地资源加载由代码与 HTTP 检查验证。浏览器视觉验收因 Mac 锁屏暂未完成；不以静态检查代替实际浏览器截图结论。
