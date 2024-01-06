import random

 def get_computer_choice():
    choices = ['rock', 'paper', 'scissors']
    return random.choice(choices)

def get_player_choice():
    print("\nEnter your choice: (rock/paper/scissors): ")
    choice = input().lower()
    while choice not in ['rock', 'paper', 'scissors']:
        print("Invalid choice. Please enter again.")
        choice = input().lower()
    return choice

def determine_winner(player_choice, computer_choice):
    if player_choice == computer_choice:
        return "It's a tie!"
    elif (player_choice == 'rock' and computer_choice == 'scissors') or \
         (player_choice == 'scissors' and computer_choice == 'paper') or \
         (player_choice == 'paper' and computer_choice == 'rock'):
        return "Player wins!"
    else:
        return "Computer wins!"

def play_game():
    player_choice = get_player_choice()
    computer_choice = get_computer_choice()
    print("\nPlayer chose " + player_choice)
    print("Computer chose " + computer_choice)
    print(determine_winner(player_choice, computer_choice))

if __name__ == "__main__":
    play_game()