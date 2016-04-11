study(title="v1.2 My High Signal - DMI", shorttitle="v1.2 High Signal DMI")

// ================================================================================
// Default
d1 = input(1, title="d1. ADX")
d2 = input(8, title="d2. ADX")
d3 = input(4, title="d3. ADX")
d4 = input(2, title="d4. ADX")

e1 = input(4, title="e1. ADX")
e2 = input(2, title="e2. ADX")
e3 = input(8, title="e3. +DI")
e4 = input(8, title="e4. +DI")

f1 = input(1, title="f1. ADX")
f2 = input(8, title="f2. ADX")
f3 = input(12, title="f3. -DI")
f4 = input(12, title="f4. -DI")

g1 = input(4, title="f1. ADX")
g2 = input(2, title="f2. ADX")
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

// D. (ABS)
d = myadx(d1, d2) - myadx(d3, d4)
plot(d, color=blue, linewidth=1, title="A: (1.8)-(4.2) | (ADX)-(ADX)")

// E.
e = myadx(e1, e2) - myplus(e3)
plot(e, color=blue, linewidth=3, title="B: (4.2)-(1.8) | (ADX)-(+DI)")

// F.
f = myadx(f1, f2) - mymins(f3)
plot(f, color=blue, linewidth=5, title="C: (1.8)-(12.12) | (ADX)-(-DI)")

// G.
g = myadx(g1, g2) - myadx(g3, g4)
plot(g, color=blue, linewidth=7, title="C: (4.2)-(1.8) | (ADX)-(ADX)")

// Alert
setA = d - e
setB = f - g
// plot(setA, color=gray, linewidth=1, title="set A alert ref: set A < B")
// plot(setB, color=gray, linewidth=1, title="set B alert ref: set A < B")

