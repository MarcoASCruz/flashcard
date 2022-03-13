from flask import Flask
from core import Flashcard

app = Flask(__name__)

@app.route("/flashcard")
def get_flash_cards():
    return get_n_flash_cards(10)

@app.route("/flashcard/<numb_cards>")
def get_n_flash_cards(numb_cards):
	numb_cards = int(numb_cards)
	if numb_cards <= 0 or numb_cards > 50:
		raise Exception("Number of flashcards/words must be > 0 and <= 50")
	return Flashcard().load_cards(numb_cards)