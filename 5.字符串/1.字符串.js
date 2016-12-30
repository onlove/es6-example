/**
 * Created by Administrator on 2016/7/23.
 */
'user strict';

let emoji = '☔';
console.log(emoji, emoji.length, emoji.codePointAt(0));

let emojiCode = "\uD83D\uDE02";
console.log(emojiCode, emojiCode.length, emojiCode.codePointAt(0));

let es6EmojiCode = "\u{1f602}";
console.log(emojiCode, es6EmojiCode.length, es6EmojiCode.codePointAt(0))