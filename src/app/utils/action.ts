'use server'

import { minifyHtml } from '../utils/minifyHtml';

export async function minifyHtmlAction(formData: FormData) {
  const input = formData.get('html') as string;
  const minified = minifyHtml(input);
  return { minified, originalSize: input.length, minifiedSize: minified.length };
}

