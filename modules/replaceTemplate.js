module.exports = (temp, data, time) => {
  let output = temp.replace("{%TITLE%}", data.title);
  output = output.replace("{%CURRENT-TIME%}", data.timeframes[time].current);
  output = output.replace("{%PREVIOUS-TIME%}", data.timeframes[time].previous);
  return output;
}