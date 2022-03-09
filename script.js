let results = 0;
function getMedia(){
    let firstResult = Number(document.getElementById("firstGrade").value);
    console.log(firstResult);
    let secondResult = Number(document.getElementById("secondGrade").value);
    console.log(secondResult);
    let thirdResult = Number(document.getElementById("thirdGrade").value);
    console.log(thirdResult);
    let fourthResult = Number(document.getElementById("fourthGrade").value);
    console.log(fourthResult);
    results = ((firstResult + secondResult + thirdResult + fourthResult)/4).toFixed(1);
    console.log(results)
    let answerMedia = document.getElementById("answerMedia")
    // displayResults();
    answerMedia.innerHTML = `Sua média é ${results}`
}