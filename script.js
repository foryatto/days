// 设置情侣开始的日期
const startDate = new Date('2024-10-23');

// 获取当前日期
const currentDate = new Date();

// 计算相差的天数
const timeDifference = currentDate - startDate;
const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// 显示天数
document.getElementById('days-count').textContent = daysTogether;

// 随机生成雪花并让它飘落
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';  // 雪花符号

  // 随机水平位置
  const randomX = Math.random() * window.innerWidth;  // 生成一个0到屏幕宽度之间的随机数
  const randomDelay = Math.random() * 2; // 随机延迟
  const randomSize = Math.random() * 10 + 10; // 雪花大小在10px到20px之间

  // 设置雪花的初始位置和动画延迟
  snowflake.style.left = `${randomX}px`;
  snowflake.style.fontSize = `${randomSize}px`;
  snowflake.style.animationDelay = `${randomDelay}s`;

  // 添加雪花到页面
  document.body.appendChild(snowflake);

  // 检查雪花是否已经超出屏幕，如果超出就删除
  function checkSnowflakePosition() {
    const snowflakeRect = snowflake.getBoundingClientRect();
    
    // 如果雪花的底部超出了屏幕底部，则删除
    if (snowflakeRect.top > window.innerHeight) {
      snowflake.remove();
    }
  }

  // 每个动画帧检查雪花是否超出屏幕
  const intervalId = setInterval(checkSnowflakePosition, 100);

  // 在雪花动画结束后移除
  snowflake.addEventListener('animationend', () => {
    clearInterval(intervalId);  // 停止检查
    snowflake.remove();
  });
}

// 每隔一段时间创建一个雪花
setInterval(createSnowflake, 300);
