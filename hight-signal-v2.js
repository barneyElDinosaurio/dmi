study(title="My - Directional Movement Index", shorttitle="High signal DMI")

// ================================================================================
// Default
d1 = input(8, title="d1. +DI")
d2 = input(8, title="d2. +DI")
d3 = input(4, title="d3. ADX")
d4 = input(2, title="d4. ADX")

e1 = input(1, title="e1. ADX")
e2 = input(8, title="e2. ADX")
e3 = input(4, title="e3. ADX")
e4 = input(2, title="e4. ADX")

f1 = input(1, title="f1. ADX")
f2 = input(8, title="f2. ADX")
f3 = input(12, title="f3. -DI")
f4 = input(12, title="f4. -DI")

// ================================================================================
// Declear variable
up   = change(high)
down = -change(low)

// ================================================================================
// Function
myplus(d1) =>
    trur = rma(tr, d1)
    answer = fixnan(100 * rma(up > down and up > 0 ? up : 0, d1) / trur)

mymins(d1) =>
    trur = rma(tr, d1)
    answer = fixnan(100 * rma(down > up and down > 0 ? down : 0, d1) / trur)

mysum(d2) =>
    answer = myplus(d2) + mymins(d2)

myadx(d1, d2) =>
    adx = 100 * rma(abs(myplus(d2) - mymins(d2)) / (mysum(d2) == 0 ? 1 : mysum(d2)), d1)

// High signal
// (8.8)-(4.2) < (1.8)-(4.2) < (1.8)-(12.12)
// (+DI)-(ADX) < (ADX)-(ADX) < (ADX)-(-DI)

// D. (ABS)
d = abs(myplus(d1) - myadx(d3, d4))
// plot(myplus(d1), color=red, title="+DI: 8.8")
// plot(myadx(d3, d4), color=red, title="ADX: 4.2")
plot(d, color=blue, linewidth=1, title="A: (8.8)-(4.2) | (+DI)-(ADX)")

// E.
e = myadx(e1, e2) - myadx(e3, e4)
// plot(myadx(e1, e2), color=blue, title="ADX: 1.8")
// plot(myadx(e3, e4), color=blue, title="ADX: 4.2")
plot(e, color=blue, linewidth=2, title="B: (1.8)-(4.2) | (ADX)-(ADX)")

// F.
f = myadx(f1, f2) - mymins(f3)
// plot(myadx(f1, f2), color=green, title="ADX: 1.8")
// plot(mymins(f3), color=green, title="-DI: 12.12")
plot(f, color=blue, linewidth=3, title="C: (1.8)-(12.12) | (ADX)-(-DI)")

// Alert
myalert = d < e < f ? 1 : 0
mycolor = d < e < f ? gray : blue
plot(myalert, color=mycolor, linewidth=5, title="High alert")

