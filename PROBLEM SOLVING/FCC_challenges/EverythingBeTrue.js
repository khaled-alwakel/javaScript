function truthCheck(collection, pre) {
  for (let item of collection) if (!item[pre]) return false;
  return true;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: true },
      { name: "Naomi", role: "", isBot: true },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
