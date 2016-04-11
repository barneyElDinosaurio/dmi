study(title="My - Directional Movement Index", shorttitle="v2 High signal DMI")

// ================================================================================
// Default
d1 = input(1, title="d1. ADX")
d2 = input(8, title="d2. ADX")
d3 = input(12, title="d3. -DI")
d4 = input(12, title="d4. -DI")

e1 = input(4, title="e1. ADX")
e2 = input(2, title="e2. ADX")
e3 = input(1, title="e3. ADX")
e4 = input(8, title="e4. ADX")

f1 = input(8, title="f1. +DI")
f2 = input(8, title="f2. +DI")
f3 = input(4, title="f3. ADX")
f4 = input(12, title="f4. ADX")

g1 = input(12, title="f1. -DI")
g2 = input(12, title="f2. -DI")
g3 = input(1, title="f3. ADX")
g4 = input(8, title="f4. ADX")

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
d = myadx(d1, d2) - mymins(d3)
// plot(myplus(d1), color=red, title="+DI: 8.8")
// plot(myadx(d3, d4), color=red, title="ADX: 4.2")
plot(d, color=blue, linewidth=1, title="A: (1.8)-(12.12) | (ADX)-(-DI)")

// E.
e = myadx(e1, e2) - myadx(e3, e4)
// plot(myadx(e1, e2), color=blue, title="ADX: 1.8")
// plot(myadx(e3, e4), color=blue, title="ADX: 4.2")
plot(e, color=blue, linewidth=3, title="B: (4.2)-(1.8) | (ADX)-(ADX)")

// F.
f = myplus(f1) - myadx(f3, f4)
// plot(myadx(f1, f2), color=green, title="ADX: 1.8")
// plot(mymins(f3), color=green, title="-DI: 12.12")
plot(f, color=blue, linewidth=5, title="C: (8.8)-(4.2) | (+DI)-(ADX)")

// G.
g = mymins(g1) - myadx(g3, g4)
// plot(myadx(f1, f2), color=green, title="ADX: 1.8")
// plot(mymins(f3), color=green, title="-DI: 12.12")
plot(g, color=blue, linewidth=7, title="C: (12.12)-(1.8) | (-DI)-(ADX)")

// Alert
setA = d - e
setB = f - g
plot(setA, color=gray, linewidth=1, title="alert ref A")
plot(setB, color=gray, linewidth=1, title="alert ref B")

