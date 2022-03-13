import pandas as pd

class GameConfig:
	def __init__(
			self, match_size: int = 10, origin_lang_filter: str = None, 
			target_lang_filter: str = None, data_source_path: str = "./data.csv"
		):
		self.match_size = match_size
		self.origin_lang_filter = origin_lang_filter
		self.target_lang_filter = target_lang_filter
		self.data_source_path = data_source_path

class Flashcard:

	def __init__(self, game_config: GameConfig):
		self.game_config = game_config

	def run(self):
		print(f"Game config: {self.game_config.__dict__}")
		data = self.load_data_source()
		
		result = 0
		for index, row in data.sample(n = self.game_config.match_size).iterrows():
			origin_lang, target_lang, word, translation = row.values
			print(f"\n\nChallange type {origin_lang} -> {target_lang}")
			print(f"Do you know what '{word}' means?\n")
			answer = None
			while answer is None:
				try:
					answer = int(input("1 for Yes, 2 for No:\n"))
				except ValueError:
					print("Please, type a number!")
				if answer == 1:
					result += answer
				elif answer != 2:
					answer = None

			print(f"It means '{translation}' means?")
			

		print(f"You knew {(result/self.game_config.match_size)*100}% of the words.")


	def load_data_source(self) -> pd.DataFrame:
		data = pd.read_csv(self.game_config.data_source_path)
		return data


if __name__ == "__main__":
	Flashcard(GameConfig()).run()