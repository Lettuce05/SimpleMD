let mdBefore = "@";

const mdOptions = [
  { label: mdBefore + "h1", type: "keyword", apply: "# " },
  { label: mdBefore + "h2", type: "keyword", apply: "## " },
  { label: mdBefore + "h3", type: "keyword", apply: "### " },
  { label: mdBefore + "h4", type: "keyword", apply: "#### " },
  { label: mdBefore + "h5", type: "keyword", apply: "##### " },
  { label: mdBefore + "h6", type: "keyword", apply: "###### " },
  { label: mdBefore + "bold", type: "keyword", apply: "**bold text**" },
  { label: mdBefore + "italic", type: "keyword", apply: "*italicized text*" },
  { label: mdBefore + "blockquote", type: "keyword", apply: "> blockquote" },
  { label: mdBefore + "ol", type: "keyword", apply: "1. First item\n2. Second item\n3. Third item", detail: "Ordered (numbered) list" },
  { label: mdBefore + "ul", type: "keyword", apply: "- First item\n\t- Sub item\n- Second item\n- Third item", detail: "Unordered (bullet point) list" },
  { label: mdBefore + "code", type: "keyword", apply: "`code`" },
  { label: mdBefore + "hr", type: "keyword", apply: "---", detail: "Horizontal rule" },
  { label: mdBefore + "link", type: "keyword", apply: "[title](https://www.example.com)" },
  { label: mdBefore + "image", type: "keyword", apply: "![alt text](image.jpg)" },
  { label: mdBefore + "table", type: "keyword", apply: "| header1 | header2 |\n| ----------- | ----------- |\n| row1col1 | row1col2 |\n| row2col1 | row2col2 |" },
  { label: mdBefore + "tasklist", type: "keyword", apply: "- [x] checked item\n- [] unchecked item\n- [] item3" },
  { label: mdBefore + "cb", type: "keyword", apply: "```\n```", detail: "code block" },
  { label: mdBefore + "strikethrough", type: "keyword", apply: "~~strike through~~" },
]

export function mdCompletions(context) {
  let word = context.matchBefore(/@\w*/)
  if (word.from == word.to && !context.explicit)
    return null
  return {
    from: word.from,
    options: mdOptions
  }
}

