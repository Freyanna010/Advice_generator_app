const adviceId = document.getElementById("title"),
      adviceText = document.getElementById("text"),
      adviceBtn = document.querySelector("button");

adviceBtn.addEventListener("click", showAdvice);

function showAdvice()  {
 getAdvice().then(addNewAdvice);
}

function addNewAdvice({slip:{id,advice}}) {
adviceId.innerText = id;
adviceText.innerText = advice;
}

  async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data
}

document.addEventListener("DOMContentLoaded", showAdvice);











