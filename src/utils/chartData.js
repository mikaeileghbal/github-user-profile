function createLanguagesList(data) {
  console.log(data);
  let languages = data.reduce((langs, val) => {
    langs[val.language]
      ? (langs[val.language] = langs[val.language] + 1)
      : (langs[val.language] = 1);
    return langs;
  }, {});

  return languages;
}

function getLanguagesData(repodata) {
  const data = createLanguagesList(repodata);
  return {
    labels: data ? Object.keys(data) : [],
    datasets: [
      {
        data: data ? Object.values(data) : [],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}

export { getLanguagesData };
