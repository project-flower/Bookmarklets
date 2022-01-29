(function () {
    const now = new Date(Date.now());
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);

    if (now.getTime() > targetDate.getTime()) {
        alert("時刻が過ぎています。設定できません。");
        return;
    }

    const task = (option_) => {
        // 経過後に実行されるコード
        alert(option_);
    };

    const arg = prompt("オプションを入力して下さい。");
    setTimeout(function() { task(arg) }, targetDate.getTime() - Date.now());
})();
