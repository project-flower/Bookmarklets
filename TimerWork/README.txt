TimerWork

一定時間後にタスクを実行します。

ファイル:
  TimerWork.js
    JavaScript コード
  TimerWork_Compiled.js
    ブックマークレット コード
    ブラウザのブックマークに設定します。

説明:
  所定時間に任意のコードを実行します。

  時刻は同じ日の 9:00 が設定されています。
  下記の 9, 0, 0 を変更する事で任意の時刻を設定できます。
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
  時刻が過ぎている場合、"時刻が過ぎています。設定できません。"と表示し、実行されません。

  実行されるコードは task 関数で定義されています。
  渡されたパラメータを alert 関数で表示するようになっています。
  下記の部分を変更すれば、任意のコードを実行できます。パラメータは option_ 変数で渡されます。
    alert(option_);
