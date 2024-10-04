export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  let delimiter = /[,\n]/;
  let numberString = numbers;

  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numberString = numbers.substring(delimiterEnd + 1);
  }

  const nums = numberString.split(delimiter).map(str => {
    // Remove quotes if present
    const trimmed = str.trim().replace(/^"(.*)"$/, '$1');
    const num = Number(trimmed);
    if (isNaN(num)) {
      throw new Error(`Invalid number: ${str}`);
    }
    return num;
  });

  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}