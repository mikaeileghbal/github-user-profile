function createLanguagesList(data) {
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
          "rgb(248, 241, 144)",
          "rgb(241, 151, 171)",
          "rgb(148, 201, 236)",
          "rgb(159, 238, 238)",
          "rgb(188, 163, 238)",
          "rgb(243, 209, 176)",
        ],
        borderColor: [
          "rgb(250, 245, 148)",
          "rgb(245, 156, 175)",
          "rgb(152, 208, 240)",
          "rgb(162, 242, 242)",
          "rgb(194, 165, 242)",
          "rgb(248, 212, 178)",
        ],
        borderWidth: 0,
      },
    ],
  };
}

export { getLanguagesData };
