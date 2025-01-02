export function minifyHtml(html: string): string {
    return html
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .replace(/<!--[\s\S]*?-->/g, '')
      .trim();
  }
  
  