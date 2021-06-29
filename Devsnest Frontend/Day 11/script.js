const quiz = [
    {
        question:`Who is known as "The Kingslayer"?`,
        options:["Jaime Lannister","Sandor Clegane","Joffrey Baratheon","Eddard Stark"]
    },
    {
        question:`What was the name of the khal of the Dothraki that Daenerys marries?`,
        options:["Drogo","Loras Tyrell","Gregor Clegane","Renly Baratheon"]
    }
    ,
    {
        question:`What does Tyrion murder his father with?`,
        options:["Crossbow","Sword","Mace","Poison"]
    }
    ,
    {
        question:`Which of the following famously worships the Lord of Light?`,
        options:["Melisandre","Joffrey Baratheon","Princess Myrcella","Bran Stark"]
    }
    ,
    {
        question:`Who said this memorable line: "First lesson: Stick them with the pointy end."`,
        options:["John Snow","Arya Stark","Gregor Clegane","Lady Sansa"]
    }
    
]
const scoreContainer = document.querySelector('.score');
var score = 0;
var correctAns = false;
let counter = 0;
function createOption(option, ans = false){
    const holdOption = document.createElement('div');
    holdOption.className = 'options';
    

    const button = document.createElement('button');
    button.innerHTML = option;
    button.addEventListener('click',()=>{
        counter+=1;
        if(ans){
            if(!button.classList.contains('right')){
                score++;
            }
            button.classList.add('right');
            scoreContainer.innerHTML = `Score : ${score}/5`;
        }else{
            button.classList.add('wrong');
        }
        reveal(button);
    });
    
    return button;
};
function reveal(ele){
    let temp = score;
    let options = ele.closest(".options");
    let buttons = options.querySelectorAll('button')
    buttons.forEach((button)=>{
        button.click();
    })
    score = temp;
}
function shuffle(arr){
    for(let i = 0; i < arr.length; i++){
        let j = Math.floor(Math.random()*(i+1));
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}
shuffle(quiz);
quiz.forEach((current, number)=>{
    const container = document.createElement('div');
    container.className = "container";

    const question = document.createElement('div');
    question.className = 'questions';
    question.innerHTML = `<span>${number+1}. ${current.question}</span>`;

    const options = document.createElement('div');
    options.className = "options";

    const optionArr = [];
    current.options.forEach((option,number)=>{
        if(number == 0){
            optionArr.push(createOption(option, true));
        }else{
            optionArr.push(createOption(option));
        }
    })

    shuffle(optionArr);
    optionArr.forEach((option)=>{
        
        options.append(option);
    })
    container.append(question);
    container.append(options);
    document.body.append(container);
    console.log(counter);
   
})


{/* <div class="container">
<div class="questions">
    <span>1. Who is known as "The Kingslayer"?</span>
</div>
<div class="options">
    <button class="wrong">Sandor Clegane</button>
    <button class="wrong">Joffrey Baratheon</button>
    <button class="wrong">Eddard Stark</button>
    <button class="right">Jaime Lannister</button>
</div>
</div>
</div> */}