const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://admin:password@127.0.0.1:28017/quiz-manager?authSource=admin&readPreference=primary";
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        // await listDatabases(client);
        // await createQuestion(client, 
        //     {
        //         quiz: "test2",
        //         question: "what is 4+4?",
        //         answer: "8"
        //     }
        // );
        await findAllQuizQuestions(client, "test2");
        // await update(client, 'test2', 'what is a question?', { question: 'what is purple?', answer: 'new answer' });
        // await updateQuizName(client, 'test2', 'test');
        // await deleteQuestion(client, 'test', 'what is purple?')
        // await deleteQuiz(client, 'test2');
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

//list all databases
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//create new question in database collection
async function createQuestion(client, question) {
    const result = await client.db("quiz_manager").collection("questions_and_answers").insertOne(question);
    console.log(`New listing created with the following id: ${result.insertedId}`);
} 

//return questions for specified quiz
async function findAllQuizQuestions(client, quizName) {
    const cursor = client.db("quiz_manager").collection("questions_and_answers")
    .find({
        quiz: { $eq: quizName }
    })

    const results = await cursor.toArray();
    let questionsArray = [];

    if (results.length > 0) {
        results.forEach((result, i) => {
            // console.log("Result(s) found:")
            // console.log(`${i+1}. quiz name: ${result.quiz}, question: ${result.question}, answer: ${result.answer}, Id: ${result._id}`)
            questionsArray.push({quizName: `${result.quiz}`, question: `${result.question}`, answer: `${result.answer}`})
        })
    } else {
        console.log("No results found :(")
    }
    console.log(questionsArray);
}

//update a question or answer or both
async function updateQuestionOrAnswer(client, quizName, originalQuestion, updatedData) {
    result = await client.db("quiz_manager").collection("questions_and_answers").updateOne({ quiz: quizName, question: originalQuestion }, {$set: updatedData});
    console.log(`${result.matchedCount} documents(s) matched the query criteria`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
}

//update a quiz name
async function updateQuizName(client, quizName, newQuizName) {
    result = await client.db("quiz_manager").collection("questions_and_answers").updateMany({ quiz: { $eq: quizName }}, { $set: { quiz: newQuizName }});
    console.log(`${result.matchedCount} documents(s) matched the query criteria`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
}

//delete a question
async function deleteQuestion(client, quizName, question) {
    result = await client.db("quiz_manager").collection("questions_and_answers").deleteOne({ quiz: quizName, question: question })
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

//delete an entire quiz
async function deleteQuiz(client, quizName) {
    result = await client.db("quiz_manager").collection("questions_and_answers").deleteMany({ quiz: { $eq: quizName } })
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

main().catch(console.error);