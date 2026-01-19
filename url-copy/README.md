# url-copy

- 表示中のページへのハイパーリンクをクリップボードにコピーします。

## ファイル

それぞれ、実行すると表示中のページへのハイパーリンク又は Markdown リンクをクリップボードにコピーします。

- [url-copy.js](./url-copy.js)
  - JavaScript コンパイル前コード
  - text/html 形式のハイパーリンクが入力できるところには、  
    ペーストするとハイパーリンクとして貼り付けられます。
  - そうでないところには、ページ タイトルが貼り付けられます。
- [url-copy_markdown.js](./url-copy_markdown.js)
  - JavaScript コンパイル前コード (Markdown コピー版)
  - Markdown 形式のリンクでコピーします。
  - Markdown でエスケープが必要な文字はエスケープ文字(`\`)をプレフィクスに付与して出力されます。
- \*\_compiled.js
  - JavaScript コンパイル済コード
  - ブックマークレットに保存する場合は、URL先頭に `javascript:` を付与し、残りをこのファイルの内容で保存すれば利用できます。

## コンパイル方法

1. ターミナルから `npm run generate_url-copy` を実行します。
1. \*\_compiled.js ファイルが作成又は更新されます。

## ブックマーク URL

- [url-copy_compiled.js](./url-copy_compiled.js)

```
javascript:(async function(){if(navigator.clipboard){var a=document.URL,b=document.title||a;try{await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([`<a href="${a}">${b}</a>`],{type:"text/html"}),"text/plain":new Blob([b],{type:"text/plain"})})]),alert("Copied!")}catch(c){alert(c.message)}}else alert("navigator.clipboard is not supported.")})();
```

- [url-copy_markdown_compiled.js](./url-copy_markdown_compiled.js)

```
javascript:(async function(){if(navigator.clipboard){var a=document.URL,b=document.title||a;try{await navigator.clipboard.writeText(`[${b.replace(/[!]|#|\(|\)|\*|\+|[-]|\.|<|>|\[|\\|\]|_|\{|\}|`/gi,"\\$&")}](${a})`),alert("Copied!")}catch(c){alert(c.message)}}else alert("navigator.clipboard is not supported.")})();
```
