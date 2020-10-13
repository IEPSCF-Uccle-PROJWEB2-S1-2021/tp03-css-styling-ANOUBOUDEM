function textToBin(text) {
  let length = text.length,
      output = [];
  for (let i = 0;i < length; i++) {
    let bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  }
  return output.join(" ");
}
