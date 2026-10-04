# 工会插画重设计

使用内置图像生成工具，以原工会卡插画为编辑目标。

新版图片：`assets/union-v2.png`。原图保留在 `assets/union.png`，页面已经切换至新版。

修改：自然的人物鼻部与嘴部、上方条幅“团结互助”，保留黑白线稿、举拳姿势与 UNION 讲台。卡片列表改为完整容纳图片，防止条幅文字被裁切。

## 最终生成提示词

Use case: precise-object-edit.
Asset type: replacement square character illustration for the Chinese card game “1886”, character 工会 (trade union).
Input image 1 is the EDIT TARGET: the existing black-and-white line drawing of a union organizer speaking at a UNION podium, with one clenched fist raised and an empty banner overhead.
Primary request: redesign and polish this specific illustration to fix the unnatural nose and fill the banner. Keep the single human male organizer, slightly three-quarter view, swept short hair, suit and tie, raised clenched fist, podium, bold black ink outlines on a clean pure white background. Maintain simple expressive editorial cartoon / card-game line art that will match the other existing cards. Improve the face into a believable human face with a modest natural nose, coherent nose bridge and nostril, normal mouth, natural human facial proportions, determined friendly expression. Remove the strange horizontal snout and spiral-nostril appearance entirely. Draw the raised hand with plausible anatomy.
Text (verbatim): upper banner must read “团结互助” in four large, legible, bold black Chinese characters, precisely 团 / 结 / 互 / 助, left-to-right, centered, without extra text. The podium must retain “UNION” in large clear capitals.
Composition: 1:1 square bitmap. Recompose slightly to give the whole banner a comfortable white margin above it: keep all banner lettering within the middle 80% of the canvas width and between 12% and 26% of canvas height. The character face should remain central and prominent. Keep the entire word UNION inside the canvas and above 89% canvas height. All critical parts must survive a modest center crop on the website. No outer card frame, no UI, no extra figures, no scenery. Crisp legible linework with restrained solid black areas; no colors, sepia, gradients, paper texture, or photographic shading. Do not add a watermark or signature.
Output: one final replacement illustration only.

