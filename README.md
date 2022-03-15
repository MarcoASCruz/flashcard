# flashcard

# Setting up your enviroment
1. Add the env variable *FLASK_APP=flashcard_api* in your enviroment
	1. On WINDOWS: $env:FLASK_APP = "flashcard_api"
2. Run python file flashcard_api.py with flask
	1. flask run
3. To get the resources from the just do a *GET* request on flaskcard.
	1. for example: http://127.0.0.1:5000/flashcard
		1. it will return the default number of flashcards (10).
	2. http://127.0.0.1:5000/flashcard/<numb_cards>
		1. for number of cards different from 10. Notice that 1 <= numb_cards <= 50

# Run frontend
1. Go to `frontend` folder
2. Run `npm install`
3. Run `npm run dev`

Enjoy the game 🙌