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