let answerUser,
    answerWrong = 0,
    wrong = 3,
    goals = 0,
    money = 0;
for (let i = 0; i < questions.length; i++) {
    answerUser = +prompt("Вопрос №" +(i + 1) + "  " + questions[i].question + "\n" +
        "Варианты ответов: " + "\n" +
        questions[i].answer1 + "\n" +
        questions[i].answer2 + "\n" +
        questions[i].answer3 + "\n" +
        questions[i].answer4 + "\nВведите номер правильного ответа.\n\nДля выхода из игры введите -1");
    if (answerUser == -1) {
        alert("Игра окончена.");
        break;
    }
    if (answerUser == questions[i].correct) {
        money += (i + 1) * 1000;
        alert("Поздравляем вы ответили правильно! Заработали за ответ " + ((i + 1) * 1000) + " рублей");
        goals++;
    }
    else {
        answerWrong++;
        alert("Вы ответили неверно\n У вас осталось " + (wrong - answerWrong) + " попытки");
        if (answerWrong == wrong) {
            break;
        }
    }
}
alert("Вы  ответиили правильно на "+goals+" вопросов из "+questions.length+" и заработали за игру "+money+" рублей");