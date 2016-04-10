study(title="My Low Signal - DMI", shorttitle="v1.2 Low Signal DMI")

// ================================================================================
// Default
a1 = input(1, title="a1. ADX")
a2 = input(8, title="a2. ADX")
a3 = input(12, title="a3. -DI")
a4 = input(12, title="a4. -DI")

b1 = input(4, title="b1. ADX")
b2 = input(2, title="b2. ADX")
b3 = input(8, title="b3. +DI")
b4 = input(8, title="b4. +DI")

c1 = input(1, title="c1. ADX")
c2 = input(8, title="c2. ADX")
c3 = input(4, title="c3. ADX")
c4 = input(2, title="c4. ADX")

d1 = input(4, title="d1. ADX")
d2 = input(2, title="d2. ADX")
d3 = input(1, title="d3. ADX")
d4 = input(8, title="d4. ADX")

// ================================================================================
// Declear variable
up   = change(high)
down = -change(low)

// ================================================================================
// Function
myplus(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(up > down and up > 0 ? up : 0, a1) / trur)

mymins(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(down > up and down > 0 ? down : 0, a1) / trur)

mysum(a2) =>
    answer = myplus(a2) + mymins(a2)

myadx(a1, a2) =>
    adx = 100 * rma(abs(myplus(a2) - mymins(a2)) / (mysum(a2) == 0 ? 1 : mysum(a2)), a1)

// A.
a = myadx(a1, a2) - mymins(a3)
plot(a, color=orange, linewidth=1, title="A: (1.8)-(12.12) | (ADX)-(-DI)")

// B.
b = myadx(b1, b2) - myplus(b3)
plot(b, color=orange, linewidth=3, title="B: (4.2)-(8.8) | (ADX)-(+DI)")

// C.
c = myadx(c1, c2) - myadx(c3, c4)
plot(c, color=orange, linewidth=5, title="C: (1.8)-(4.2) | (ADX)-(ADX)")

// D.
d = myadx(d1, d2) - myadx(d3, d4)
plot(d, color=orange, linewidth=7, title="D: (4.2)-(1.8) | (ADX)-(ADX)")

setA = a - b
setB = c - d
plot(setA, color=gray, linewidth=1, title="alert ref index set A")
plot(setB, color=gray, linewidth=1, title="alert ref index set B")
