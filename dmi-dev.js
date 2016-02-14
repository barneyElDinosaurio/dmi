study(title="My - Directional Movement Index", shorttitle="DMI")

// ================================================================================
// Default
a1    = input(8, minval = 1, title  = "1. +DI")
a2 = input(8, title  = "2. +DI")

up   = change(high)
down = -change(low)

trur = rma(tr, a1)
// -Plus
plus = fixnan(100 * rma(up > down and up > 0 ? up : 0, a1) / trur)

// - Min
minus = fixnan(100 * rma(down > up and down > 0 ? down : 0, a1) / trur)

// ================================================================================
// Function
myplus(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(up > down and up > 0 ? up : 0, a1) / trur)
mymins(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(down > up and down > 0 ? down : 0, a1) / trur)
myadx(a1, a2) =>
    sum = myplus(a1) - mymins(a1)
    trur = rma(tr, a1)
    answer = 100 * rma(abs(myplus(a1) - mymins(a1)) / (sum == 0 ? 1 : sum), a2)

// ================================================================================
// Default
len2 = input(4, minval=1, title="3. ADX")
lensig2 = input(2, title="4. ADX")

up2 = change(high)
down2 = -change(low)
trur2 = rma(tr, len2)

// -Plus
plus2 = fixnan(100 * rma(up2 > down2 and up2 > 0 ? up : 0, len2) / trur2)

// - Min
minus2 = fixnan(100 * rma(down2 > up2 and down2 > 0 ? down2 : 0, len2) / trur2)

// - ADX
sum2 = plus2 + minus2
adx2 = 100 * rma(abs(plus - minus2) / (sum2 == 0 ? 1 : sum2), lensig2)

// Result
plot(myplus(a1), color=blue, linewidth=1, title="plot +DI")
// plot(adx, color=red, linewidth=1, title="plot ADX")
// plot(myplus() - adx, color=green, linewidth=3, title="Hight signal - Plot: (+DI)-(ADX)")

// ================================================================================
// High signal
//   (8.8)-(4.2) < (1.8)-(4.2) < (1.8)-(12.12)
//   (+DI)-(ADX) < (ADX)-(ADX) < (ADX)-(-DI)
