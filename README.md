# JsA.D.Conversion
西暦から和暦を割り出す

## 処理
昭和元年から10年までの西暦和暦変換を行います

## コード
```
(function () {
    'use strict';

    for (var seireki = 1926; seireki <= 1935; seireki++) {
        process.stdout.write("西暦" + seireki + "年は、");
        var syowa = seireki - 1925;
        console.log("昭和" + syowa + "年です。");
    }

})();
```

## 出力結果  
```
西暦1926年は、昭和1年です。
西暦1927年は、昭和2年です。
西暦1928年は、昭和3年です。
西暦1929年は、昭和4年です。
西暦1930年は、昭和5年です。
西暦1931年は、昭和6年です。
西暦1932年は、昭和7年です。
西暦1933年は、昭和8年です。
西暦1934年は、昭和9年です。
西暦1935年は、昭和10年です。
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
