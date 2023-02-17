//adjusting function is a function, that is processing data
//for scaling lines on the viewbox accordingly

export const adjusting = (data, w, h) => {
  // Calculate the distance between each x value
  const xDistance = w / (data.length - 1);

  //Finding minimum and maximum Y point values
  let yValues = data.map((d) => d.value);

  //In the morning, i've found out, that almost nothing works
  //so i have to make some quickfixes =/
  yValues = yValues.filter(function (x) {
    return x !== undefined;
  });

  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);

  console.log(yValues);
  // Calculate the range of values for the y axis
  const yRange = maxY - minY;

  // Determine the scaling factor for the y axis
  const yScaleFactor = (h / yRange) * 0.9;

  // Determine the translation factor for the y axis
  const yTranslationFactor = -minY * yScaleFactor;

  // Use the distance between x values to adjust the x-coordinates of the chart elements
  const coordinates = data.map((d, i) => {
    const x = i * xDistance;
    const y = h - (d["value"] - minY) * yScaleFactor;
    return [Math.floor(x), Math.floor(y)];
  });

  const chartConfig = {
    coordinates,
    yRange,
    yTranslationFactor,
    yScaleFactor,
    minY,
    maxY,
    xDistance,
  };
  return chartConfig;
};
