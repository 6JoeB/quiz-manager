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
        //         questions: "what is the meaning of life?",
        //         answer: "41"
        //     }
        // );
        await findAllQuizQuestions(client, "test");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

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
    console.log(results);
}

main().catch(console.error);