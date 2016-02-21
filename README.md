Alert
http://blog.tradingview.com/?p=1633
https://www.tradingview.com/study-script-reference/#fun_alertcondition

Variable List
https://www.tradingview.com/stock-charts-support/index.php/Main_Page
https://www.tradingview.com/stock-charts-support/index.php/Directional_Movement_(DMI)#CALCULATION

Multi chart
https://www.tradingview.com/chart/OjvpeZh5/

Function demo
  - Ref
    http://blog.tradingview.com/?p=223

  - demo
    hehe(a, b, method) =>
      // isEqual = s == s[1]
      ud = (a)
      ud

    plot(hehe(8, 8, plus), color=blue, title="My Trial")

High signal
  (8.8)-(4.2) < (1.8)-(4.2) < (1.8)-(12.12)
  (+DI)-(ADX) < (ADX)-(ADX) < (ADX)-(-DI)
  [orange 1]  < [orange 2]  < [orange 3]
Low signal
  (12.12)-(1.8) < (4.2)-(1.8) < (4.2)-(8.8)
  (-DI)-(ADX)   < (ADX)-(ADX) < (ADX)-(+DI)
  [gray 1]      < [gray 2]    < [gray 3]

================================================================================
#Test

// Test - mins
plot(mymins(12), color=orange, linewidth=1, title="-DI")


// B
plot(myadx(b1, b2), color=green, linewidth=1, title="ADX")
plot(myadx(b3, b4), color=green, linewidth=1, title="ADX")
plot(myadx(b1, b2) - myadx(b3, b4), color=green, linewidth=3, title="Hight signal - B: (ADX)-(ADX)")

// C
plot(myadx(c1, c2), color=red, linewidth=1, title="ADX")
plot(mymins(c3), color=red, linewidth=1, title="-DI")
plot(myadx(c1, c2) - mymins(c3), color=black, linewidth=3, title="Hight signal - C: (ADX)-(-DI)")/
