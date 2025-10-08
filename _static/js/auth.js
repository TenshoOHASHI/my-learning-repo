// _static/js/auth.js
(function () {
  const password = "tensho2025";
  const input = prompt("パスワードを入力してください：");
  if (input !== password) {
    document.body.innerHTML =
      "<h2 style='color:red;text-align:center;margin-top:50px;'>アクセス拒否</h2>";
    throw new Error("Unauthorized access");
  }
})();
