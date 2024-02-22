export function orderString(inputString: string, customAlphabet?: string): string {
  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = customAlphabet ? customAlphabet.toLowerCase() : standardAlphabet;
  const lowerCaseInputString = inputString.toLowerCase();

  for (const char of lowerCaseInputString) {
    if (!alphabet.includes(char)) {
      throw new Error('Input contains invalid characters not in the alphabet');
    }
  }

  const inputArray = lowerCaseInputString.split('').filter((char) => char !== ' ');
  const result = inputArray.sort((a, b) => alphabet.indexOf(a) - alphabet.indexOf(b));

  return result.join('');
}
