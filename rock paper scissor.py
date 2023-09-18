def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif p1 == 'rock' and p2 == 'scissors':
        return "Player 1 won!"
    elif p1 == 'scissors' and p2 == 'paper':
        return "Player 1 won!"
    elif p1 == 'paper' and p2 == 'rock':
        return "Player 1 won!"
    else:
        return "Player 2 won!"

def rps(p1, p2):
    win = {"rock": "scissors", "scissors":"paper", "paper":"rock"}
    if win[p1] == p2:
        return "Player 1 won!"
    elif win[p2] == p1:
        return "Player 2 won!"
    else:
        return "Draw!"