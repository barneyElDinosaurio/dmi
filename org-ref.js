study(title="My - Directional Movement Index", shorttitle="DMI")

// Default
len = input(8, minval=1, title="H1 a")
lensig = input(8, title="H1 b")

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
