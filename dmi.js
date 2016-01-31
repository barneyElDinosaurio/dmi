study(title="Directional Movement Index", shorttitle="DMI")
len = input(14, minval=1, title="DI Length")
lensig = input(14, title="ADX Smoothing", minval=1, maxval=50)
up = change(high)
down = -change(low)
trur = rma(tr, len)
plus = fixnan(100 * rma(up > down and up > 0 ? up : 0, len) / trur)
minus = fixnan(100 * rma(down > up and down > 0 ? down : 0, len) / trur)
sum = plus + minus
adx = 100 * rma(abs(plus - minus) / (sum == 0 ? 1 : sum), lensig)
plot(plus, color=blue, title="+DI")
plot(minus, color=orange, title="-DI")
plot(adx, color=red, title="ADX")

// alertcondition(true, title='12,12 -DI', message='this is alert of...-DI(min)')

/*
  ADX / adx
  +DI / plus
  -DI / minus

  High signal
    (8.8)-(4.2)<(1.8)-(4.2)<(1.8)-(12.12)
  Low signal
    (12.12)-(1.8)<(4.2)-(1.8)<(4.2)-(8.8)

  Existing ref:
    12,12 -DI(minus)
*/
