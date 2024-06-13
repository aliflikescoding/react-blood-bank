export function formatDate(dateStr) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [day, month, year] = dateStr.split("/");
  const monthIndex = parseInt(month) - 1;
  const monthName = months[monthIndex];

  return `${monthName}, ${day} ${year}`;
}

export function getMaleAmount(data) {
  let cnt = 0;
  data.map((content) => {
    if (content.jenisKelamin == "Male") {
      cnt++;
    }
  })
  return cnt;
}

export function getFemaleAmount(data) {
  let cnt = 0;
  data.map((content) => {
    if (content.jenisKelamin == "Female") {
      cnt++;
    }
  })
  return cnt;
}

export function getStock(data) {
  let ap = 0, am = 0, bp = 0, bm = 0, abp = 0, abm = 0, op = 0, om = 0;
  data.forEach((content) => {
    switch (content.tipeDarah) {
      case "A+":
        ap++;
        break;
      case "A-":
        am++;
        break;
      case "B+":
        bp++;
        break;
      case "B-":
        bm++;
        break;
      case "AB+":
        abp++;
        break;
      case "AB-":
        abm++;
        break;
      case "O+":
        op++;
        break;
      case "O-":
        om++;
        break;
    }
  });
  return [
    {
      title: "A+",
      amount: ap,
    },
    {
      title: "A-",
      amount: am,
    },
    {
      title: "B+",
      amount: bp,
    },
    {
      title: "B-",
      amount: bm,
    },
    {
      title: "AB+",
      amount: abp,
    },
    {
      title: "AB-",
      amount: abm,
    },
    {
      title: "O+",
      amount: op,
    },
    {
      title: "O-",
      amount: om,
    },
  ];
}

export function getBloodTypes(data) {
  const bloodTypes = [];

  data.forEach((item) => {
    const { bloodType } = item;
    if (!bloodTypes.includes(bloodType)) {
      bloodTypes.push(bloodType);
    }
  });

  return bloodTypes;
}