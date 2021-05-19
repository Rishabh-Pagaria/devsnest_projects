from questions import QUESTIONS


def isAnswerCorrect(question, ans):

    '''
    :param question: question (Type JSON)
    :param answer:   user's choice for the answer (Type INT)
    :return:
        True if the answer is correct
        False if the answer is incorrect
    '''

    return True if question["answer"] == ans else False      #remove this


def lifeLine(ques):
    import random
    '''
    :param ques: The question for which the lifeline is asked for. (Type JSON)
    :return: delete the key for two incorrect options and return the new ques value. (Type JSON)
    '''
    
    count = 0
    while count <= 2:
        random_opt = random.randint(1, 4)
        if ques["answer"] != random_opt:
            random_opt = "option" + str(random_opt)
            ques[random_opt] = ""
            count += 1
    return ques


def kbc():
    '''
        Rules to play KBC:
        * The user will have 15 rounds
        * In each round, user will get a question
        * For each question, there are 4 choices out of which ONLY one is correct.
        * Prompt the user for input of Correct Option number and give feedback about right or wrong.
        * Each correct answer get the user money corresponding to the question and displays the next question.
        * If the user is:
            1. below questions number 5, then the minimum amount rewarded is Rs. 0 (zero)
            2. As he correctly answers question number 5, the minimum reward becomes Rs. 10,000 (First level)
            3. As he correctly answers question number 11, the minimum reward becomes Rs. 3,20,000 (Second Level)
        * If the answer is wrong, then the user will return with the minimum reward.
        * If the user inputs "lifeline" (case insensitive) as input, then hide two incorrect options and
            prompt again for the input of answer.
        * NOTE:
            50-50 lifeline can be used ONLY ONCE.
            There is no option of lifeline for the last question( ques no. 15 ), even if the user has not used it before.
        * If the user inputs "quit" (case insensitive) as input, then user returns with the amount he has won until now,
            instead of the minimum amount.
    '''

    #  Display a welcome message only once to the user at the start of the game.
    #  For each question, display the prize won until now and available life line.
    # For now, the below code works for only one question without LIFE-LINE and QUIT checks
    ques_cnt = 0
    prize_money = 0
    min_reward = 0
    lifeline_used = False
    while(ques_cnt < 15):
        print(f'\tQuestion {ques_cnt + 1}: {QUESTIONS[ques_cnt]["name"]}'.format(ques_cnt) )
        print(f'\t\tOptions:')
        print(f'\t\t\tOption 1: {QUESTIONS[ques_cnt]["option1"]}')
        print(f'\t\t\tOption 2: {QUESTIONS[ques_cnt]["option2"]}')
        print(f'\t\t\tOption 3: {QUESTIONS[ques_cnt]["option3"]}')
        print(f'\t\t\tOption 4: {QUESTIONS[ques_cnt]["option4"]}')
        ans = input('Your choice ( 1-4 ) : ')
        if ans.lower() == "quit":
            print("Prize Won Till Now: ", prize_money)
            break

        if ans.lower() == "lifeline" and ques_cnt != 14 and not lifeline_used:
            lifeline_used = True
            questions = lifeLine(QUESTIONS[ques_cnt])
            print(f'\tQuestion {ques_cnt + 1}: {questions["name"]}'.format(ques_cnt) )
            print(f'\t\tOptions:')
            print(f'\t\t\tOption 1: {questions["option1"]}')
            print(f'\t\t\tOption 2: {questions["option2"]}')
            print(f'\t\t\tOption 3: {questions["option3"]}')
            print(f'\t\t\tOption 4: {questions["option4"]}')
            ans = input('Your choice ( 1-4 ) : ')
        
        # input validation
        try:
            int(ans)
        except:
            print("Invalid Input, Try Again !!")
            continue

        if isAnswerCorrect(QUESTIONS[0], int(ans) ):
            # print the total money won.
            # See if the user has crossed a level, print that if yes
            if ques_cnt == 4:
                min_reward = "10,000"
            elif ques_cnt == 10:
                min_reward == "3,20,000"
            print('\nCorrect !')
            prize_money += QUESTIONS[ques_cnt]["money"]
            print("Prize Won: ", str(prize_money))

        else:
            # end the game now.
            # also print the correct answer
            prize_money = min_reward
            print('\nIncorrect !')
            print("Prize Won: ", str(prize_money))
            break
        ques_cnt += 1
        # print the total money won in the end.


kbc()
