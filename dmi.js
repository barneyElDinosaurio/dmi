study(title="My - Directional Movement Index", shorttitle="DMI")

// Default
len = input(8, minval=1, title="DI Length")
lensig = input(12, title="ADX Smoothing", minval=1, maxval=50)
up = change(high)
down = -change(low)
trur = rma(tr, len)
plus = fixnan(100 * rma(up > down and up > 0 ? up : 0, len) / trur)
minus = fixnan(100 * rma(down > up and down > 0 ? down : 0, len) / trur)
sum = plus + minus
adx = 100 * rma(abs(plus - minus) / (sum == 0 ? 1 : sum), lensig)

// plot(plus, color=blue, title="+DI")
// plot(minus, color=orange, title="-DI")
// plot(adx, color=red, title="ADX")

// Custom Fn.
hehe(a, b, method) =>
    // isEqual = s == s[1]
    len = input(8, minval=1, title="DI Length")
    lensig = input(12, title="ADX Smoothing", minval=1, maxval=50)
    up = change(high)
    down = -change(low)
    trur = rma(tr, len)
    plus = fixnan(100 * rma(up > down and up > 0 ? up : 0, len) / trur)
    minus = fixnan(100 * rma(down > up and down > 0 ? down : 0, len) / trur)
    sum = plus + minus
    adx = 100 * rma(abs(plus - minus) / (sum == 0 ? 1 : sum), lensig)

    // ud = fixnan(100 * rma(up > down and up > 0 ? up : 0, leifn) / trur) // Plus - demo

    // @ref
    // isInside() ? yellow : isOutsideUp() ? aqua : isOutsideDown() ? purple : na
    // sessioncolor = timeinrange("30", "0400-0930") ? premarket : timeinrange("30", "0930-1600") ? regular : timeinrange("30", "1600-2000") ? postmarket : notrading
    ud = (123) //@temp
    ud

plot(hehe(8, 8, plus), color=blue, title="High signal A")


// alertcondition(true, title='12,12 -DI', message='this is alert of...-DI(min)')

// High signal
//   (8.8)-(4.2) < (1.8)-(4.2) < (1.8)-(12.12)
//   (+DI)-(ADX) < (ADX)-(ADX) < (ADX)-(-DI)

