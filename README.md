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
Formula ref
```
High signal
  (8.8)-(4.2) < (1.8)-(4.2) < (1.8)-(12.12)
  (+DI)-(ADX) < (ADX)-(ADX) < (ADX)-(-DI)
  [orange 1]  < [orange 2]  < [orange 3]
Low signal
  (12.12)-(1.8) < (4.2)-(1.8) < (4.2)-(8.8)
  (-DI)-(ADX)   < (ADX)-(ADX) < (ADX)-(+DI)
  [gray 1]      < [gray 2]    < [gray 3]
```
================================================================================
#todo ref
```
compareA = 1
compareB = 2
plot(compareA, color=gray, title="")
plot(compareB, color=gray, title="ADX: 1.8")
```
