export const fetchFlashcards = async () => {
  const url = "http://127.0.0.1:5000/flashcard";
  const response = await fetch(url);
  return await response.json();
};
