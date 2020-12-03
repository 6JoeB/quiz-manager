db.createUser(
    { //In a production solution the user would not be created here in plaintext
        user    : "admin",
        pwd     : "password",
        roles   : [
            {
                role    : "readWrite",
                db      : "quiz-manager",
            }
        ]
    }
)

let res = [
    db.questions_and_answers.createIndex({ quiz: 1 }),
    db.questions_and_answers.createIndex({ question: 1 }),
    db.questions_and_answers.createIndex({ answer: 1 }),
    db.questions_and_answers.insert({ 
        quiz: "Music", 
        question: "What is the title of Arctic Monkeys first album?", 
        answer: "Whatever people say I am, that's what I'm not" 
        }),
    db.questions_and_answers.insert({
        quiz: "Music", 
        question: "What famous bands name includes a royal title?", 
        answer: "Queen" 
    }),
    db.questions_and_answers.insert({
        quiz: "Music", 
        question: "What side of the moon was Pink Floyds album based on?", 
        answer: "The dark side" 
    }),
    db.questions_and_answers.insert({
        quiz: "Maths", 
        question: "What is 2/2?", 
        answer: "1" 
    }),
    db.questions_and_answers.insert({
        quiz: "Maths", 
        question: "What is 12*12?", 
        answer: "144" 
    }),
    db.questions_and_answers.insert({
        quiz: "Maths", 
        question: "What is 42/7?", 
        answer: "6" 
    }),
    db.questions_and_answers.insert({
        quiz: "Christmas", 
        question: "What date is Christmas?", 
        answer: "25th December" 
    })
]

printjson(res)
