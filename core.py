import pandas as pd

_DATA_SOURCE_PATH = "./data.csv"

class GameConfig:
	def __init__(
			self, match_size: int = 10, origin_lang_filter: str = None, 
			target_lang_filter: str = None
		):
		self.match_size = match_size
		self.origin_lang_filter = origin_lang_filter
		self.target_lang_filter = target_lang_filter

class CardDTO:
	def __init__(
			self, origin_lang: str = None, target_lang: str = None,
			origin_word: str = None, target_word: str = None
		):
		self.origin_lang = origin_lang
		self.target_lang = target_lang
		self.origin_word = origin_word
		self.target_word = target_word


class Flashcard:

	def __init__(self, game_config: GameConfig = None):
		self.game_config = game_config

	def load_cards(self, numb_words, orient="records"):
		data_source = self.load_data_source()
		data_source.columns = CardDTO().__dict__.keys()
		data_source = data_source.sample(n = numb_words)
		return data_source.to_json(orient=orient)
	
	def load_data_source(self) -> pd.DataFrame:
		data = pd.read_csv(_DATA_SOURCE_PATH)
		return data


if __name__ == "__main__":
	Flashcard(GameConfig()).run()