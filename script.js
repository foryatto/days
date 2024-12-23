const startDate = new Date('2024-10-23');

// 获取当前日期
const currentDate = new Date();

// 计算相差的天数
const timeDifference = currentDate - startDate;
const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// 显示天数
document.getElementById('days-count').textContent = daysTogether;
