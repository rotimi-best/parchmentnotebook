
import lib from './libArray';
import interpretations from './meanings';
import images from '../constants/images';

const len = v => v.length;

const generateMeaning = word => {
  let meaning = "";

  const wordParams = interpretations[word];

  if (wordParams) {
    const { title, introduction, meanings, bibleVerse } = wordParams;
    meaning += `*${title}*\n\n`;
    meaning += len(introduction) ? `_${introduction}_\n\n` : "";
    meaning += meanings.reduce((acc, cur) => (acc += `⚬ ${cur.trim()}\n`), "");
    meaning += len(bibleVerse) ? `\n_${bibleVerse}_` : "";
  }

  return meaning;
};

export const generateDictionary = () => {
  const result = {};
  const resultInLocalStorage = localStorage.getItem('dictionary');

  if (resultInLocalStorage) {
    return JSON.parse(resultInLocalStorage);
  }

  for (let i = 0; i < lib.arr.length; i++) {
    const { words, pages } = lib.arr[i].container;

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      const meaning = generateMeaning(word);
      const page = Array.isArray(pages[j]) ? pages[j][0] : pages[j];

      result[page] = images

      result[word] = {
        data: meaning
          ? meaning
          : Array.isArray(page) ? page?.map(p => images[p]) : [images[page]]
      }
    }
  }

  localStorage.setItem('dictionary', JSON.stringify(result))

  return result;
}

export default (msg) => {
  let found = false;
  let words;
  let page;
  let input;
  let meaning = "";
  let suggestions = [];

  // This means the user is searching for a word
  if (isNaN(msg)) {
    input = msg
      .trim()
      .replace(/ /g, "")
      .toLowerCase();
    const firstLetter = input.match(/\w/);

    if (firstLetter) {
      lib.arr.filter(el => {
        let alphabet = el.container.alph;
        if (alphabet === firstLetter[0]) {
          words = el.container.words;

          words.forEach((word, index) => {
            const foundAll = [];
            const reg = new RegExp("\\b" + input + "\\b", "gi");
            const matchWord = word.match(reg);

            if (matchWord) {
              found = true;
              page = Array.isArray(el.container.pages[index])
                ? el.container.pages[index][0]
                : el.container.pages[index];
              meaning = generateMeaning(word);
            }

            for (let i in input) {
              const iLetter = input[i];
              const wLetter = word[i];

              if (iLetter === wLetter) {
                foundAll.push(1);
              } else {
                foundAll.push(0);
              }
            }

            if (!foundAll.includes(0)) {
              suggestions.push(`/${word}`);
            }
          });
        }
        return el
      });
    }
  } // This means the user is searching for a page
  else {
    if (msg >= 19 && msg <= 826) {
      found = true;
      page = msg;
    }
  }

  if (found) {
    // if (meaning) {
    //   return {
    //     type: 'text',
    //     data: meaning
    //   }
    // } else {
      return {
        type: 'image',
        page,
        meaning,
        imageUrl: images[page],
      }
    // }
  }

  return {
    type: null,
    data: null,
  }
}