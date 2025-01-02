export const compressCode = (code: string, type: 'css' | 'js'): string => {
  if (type === 'css') {
    return code
      .replace(/\/\*[\s\S]*?\*\/|[\r\n\t]+/g, '')  // Remove comments and unnecessary newlines
      .replace(/\s+/g, ' ')  // Replace multiple spaces with one space
      .replace(/\s*{\s*/g, '{')  // Remove space around curly braces
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*:\s*/g, ':')
      .trim();
  } else if (type === 'js') {
    return code
      .replace(/\/\/.*|\/\*[\s\S]*?\*\/|[\r\n\t]+/g, '')  // Remove comments and unnecessary newlines
      .replace(/\s+/g, ' ')  // Replace multiple spaces with one space
      .trim();
  }
  return code;
};
