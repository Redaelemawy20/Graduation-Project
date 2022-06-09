export default function (word, table) {
  let result = table.filter((row) => {
    let found = false;
    Object.keys(row).map((cell) => {
      if (String(row[cell]).toLowerCase().includes(word.toLowerCase()))
        found = true;
    });
    return found;
  });
  return result;
}
