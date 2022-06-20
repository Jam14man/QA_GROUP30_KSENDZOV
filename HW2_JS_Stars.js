// Квадраты двойки
const grade = function(num){
    x = 1
    while (x<num+1){
        console.log(2**x)
        x++
    }
    return 'Выполнено'
    }
    num = +prompt()
    grade(num)

// Рост количества строк
const smile = function(stroka, numberOfRows){
    y=1
    while (y<numberOfRows+1){
        console.log(stroka.repeat(y))
        y++
    }
    return 'Выполнено'
    }
    stroka = prompt('Наберите строку:')
    numberOfRows = +prompt('Наберите количество:')
    smile(stroka, numberOfRows)

// Подсчёт гласных и согласных
const letters = function getWordStructure(word){
    return (word.match(/[aeiou]/ig)||[]).length + ' гласных, ' + (word.match(/[qwrtypsdfghjklzxcvbn]/ig)||[]).length + ' согласных'
    }
word = prompt('Введите слово:')
letters(word)

// Проверка на палиндром
const pal = function isPalindrom(word){
    to_small = word.toLowerCase()
    return (to_small == to_small.split('').reverse().join(''))
    }
word = prompt('Введите слово:')
pal(word)