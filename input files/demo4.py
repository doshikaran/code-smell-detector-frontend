def analyze_text_file(file_path):
    """
    Reads a text file, cleans the text, counts word frequency,
    and prints the 10 most common words with their frequencies.
    """

    def clean_text(text):
        """
        Removes punctuation from the text and converts it to lowercase.
        """
        translator = str.maketrans('', '', string.punctuation)
        return text.translate(translator).lower()

    def count_words(text):
        """
        Counts the frequency of each word in the text.
        """
        word_counts = {}
        for word in text.split():
            if word in word_counts:
                word_counts[word] += 1
            else:
                word_counts[word] = 1
        return word_counts

    try:
        # Read and clean the text file
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
        cleaned_text = clean_text(text)

        # Count words and determine frequency
        word_counts = count_words(cleaned_text)

        # Sort words by frequency and print the 10 most common words
        common_words = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        print("The 10 most common words and their frequencies:")
        for word, count in common_words:
            print(f"{word}: {count}")

    except FileNotFoundError:
        print(f"The file {file_path} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage, assuming 'example.txt' is a file in the same directory
analyze_text_file('example.txt')
