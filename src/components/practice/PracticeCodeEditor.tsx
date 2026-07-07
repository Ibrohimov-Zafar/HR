const KEYWORDS = new Set([
  "class",
  "def",
  "if",
  "not",
  "return",
  "while",
  "else",
  "in",
  "and",
  "or",
  "elif",
  "for",
  "import",
  "from",
  "as",
  "None",
  "True",
  "False",
]);

const TYPES = new Set(["int", "List", "str", "bool", "float", "Optional", "ListNode"]);

function tokenize(line: string) {
  const tokens: { text: string; type: string }[] = [];
  let i = 0;

  while (i < line.length) {
    const ch = line[i];

    if (ch === " " || ch === "\t") {
      let ws = ch;
      i++;
      while (i < line.length && (line[i] === " " || line[i] === "\t")) {
        ws += line[i];
        i++;
      }
      tokens.push({ text: ws, type: "plain" });
      continue;
    }

    if (/[0-9]/.test(ch)) {
      let num = ch;
      i++;
      while (i < line.length && /[0-9]/.test(line[i])) {
        num += line[i];
        i++;
      }
      tokens.push({ text: num, type: "number" });
      continue;
    }

    if (/[a-zA-Z_]/.test(ch)) {
      let word = ch;
      i++;
      while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
        word += line[i];
        i++;
      }
      if (KEYWORDS.has(word)) tokens.push({ text: word, type: "keyword" });
      else if (TYPES.has(word)) tokens.push({ text: word, type: "type" });
      else if (tokens.length > 0 && tokens[tokens.length - 1].text === "def") {
        tokens.push({ text: word, type: "function" });
      } else if (word === "self") tokens.push({ text: word, type: "self" });
      else tokens.push({ text: word, type: "plain" });
      continue;
    }

    tokens.push({ text: ch, type: "punctuation" });
    i++;
  }

  return tokens;
}

const tokenColors: Record<string, string> = {
  keyword: "text-[#569cd6]",
  type: "text-[#4ec9b0]",
  function: "text-[#dcdcaa]",
  number: "text-[#b5cea8]",
  self: "text-[#9cdcfe]",
  punctuation: "text-[#d4d4d4]",
  plain: "text-[#d4d4d4]",
};

function HighlightedLine({ line }: { line: string }) {
  const tokens = tokenize(line);
  return (
    <span>
      {tokens.map((t, i) => (
        <span key={i} className={tokenColors[t.type]}>
          {t.text}
        </span>
      ))}
    </span>
  );
}

type PracticeCodeEditorProps = {
  code: string;
};

export default function PracticeCodeEditor({ code }: PracticeCodeEditorProps) {
  const lines = code.split("\n");

  return (
    <div className="flex min-h-0 flex-1 overflow-auto bg-[#1e1e1e] font-mono text-[13px] leading-[1.6]">
      <div className="select-none border-r border-[#2d2d2d] bg-[#1e1e1e] py-4 pr-3 pl-4 text-right text-[#858585]">
        {lines.map((_, i) => (
          <div key={i} className="h-[1.6em]">
            {i + 1}
          </div>
        ))}
      </div>
      <pre className="flex-1 overflow-x-auto py-4 pr-4 pl-3">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="h-[1.6em] whitespace-pre">
              <HighlightedLine line={line} />
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
