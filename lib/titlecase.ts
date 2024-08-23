export function convertToTitleCase(string: string) {
  let words = string.split(" ");

  let titleCaseWords = words.map((word) => {
    if (word.toLowerCase() === "mft") {
      return "MFT";
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  let titleCaseString = titleCaseWords.join(" ");

  return titleCaseString;
}
