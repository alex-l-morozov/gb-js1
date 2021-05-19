var event, ok;
var i = 1;
var answers = [];

dialogOpen(works.a00, [works.a1, works.a2], works.a0, i);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        dialogOpen(works.b00, [works.b1, works.b2], works.b0, ++i);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                dialogOpen(works.d00, [works.d1, works.d2], works.d0, ++i);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                dialogOpen(works.d00, [works.d1, works.d2], works.d0, ++i);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        dialogOpen(works.c00, [works.c1, works.c2], works.c0, ++i);
        switch (event) {
            case 1: // Второе действие
                dialogOpen(works.d00, [works.d1, works.d2], works.d0, ++i);
                break;
            case 2: // Второе действие
                dialogOpen(works.d00, [works.d1, works.d2], works.d0, ++i);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
if (event != -1) {
    let question = +prompt('Введите номер вопроса (1, 2, 3)');
    if (isNaN(question) || !isFinite(question)) {
        alert('Вы ввели недопустимый символ');
    }
    else if (question < 1 || question > 3) {
        alert('Ваше число выходит из допустимого диапозона');
    } else {
        alert(answers[question].question + '\n Ваш ответ: ' + answers[question].answer);
    }
}


//------------------------------------------
function dialogOpen(question, options = [], answer, number = 1) {
    do {
        ok = false;
        event = +prompt(question +  options[0] + options[1] + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answer, event);
            answers[number] = {
                question: question,
                answer: options[answer - 1],
            };
        }
    } while (!ok);
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}