const emojiMap: Record<string, string> = {
  happy: "😄",
  excited: "🤩",
  hopeful: "🤞",
  good: "😊",
  content: "😌",
  chill: "😎",
  chillin: "😎",
  fine: "👍",
  ok: "👌",
  normal: "😐",
  alive: "✨",
  motivated: "🔥",
  focused: "🎯",
  energetic: "⚡",
  tired: "😫",
  sleepy: "😴",
  bored: "🥱",
  hungry: "🍕",
  busy: "⏰",
  sad: "😢",
  bad: "😞",
  depressed: "😔",
  stressed: "😫",
  anxious: "😰",
  angry: "😠",
  annoyed: "😒",
  confused: "😕",
  curious: "🤔",
  sick: "🤒",
  playful: "😜",
  lucky: "🍀",
  loved: "❤️",
}

export function getEmoji(mood?: string): string {
  if (!mood) return "🫠"
  return emojiMap[mood.toLowerCase()] || "🫠"
}
