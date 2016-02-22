study(title="My - Directional Movement Index", shorttitle="Low Signal DMI")

// ================================================================================
// Default
a1 = input(12, title="a1. -DI")
a2 = input(12, title="a2. -DI")
a3 = input(1, title="a3. ADX")
a4 = input(8, title="a4. ADX")

b1 = input(4, title="b1. ADX")
b2 = input(2, title="b2. ADX")
b3 = input(1, title="b3. ADX")
b4 = input(8, title="b4. ADX")

c1 = input(4, title="c1. ADX")
c2 = input(2, title="c2. ADX")
c3 = input(8, title="c3. +DI")
c4 = input(8, title="c4. +DI")

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

// Low signal
// (12.12)-(1.8) < (4.2)-(1.8) < (4.2)-(8.8)
// (-DI)-(ADX)   < (ADX)-(ADX) < (ADX)-(+DI)

// A.
a = mymins(a1) - myadx(a4, a3)
plot(mymins(a1), color=orange, title="-DI: 12.12")
plot(myadx(a3, a4), color=orange, title="ADX: 1.8")
plot(a, color=orange, linewidth=3, title="A: (12.12)-(1.8) | (-DI)-(ADX)")

// B.
b = myadx(b1, b2) - myadx(b3, b4)
plot(myadx(b1, b2), color=purple, title="ADX: 4.2")
plot(myadx(b3, b4), color=purple, title="ADX: 1.8")
plot(b, color=purple, linewidth=3, title="B: (4.2)-(1.8) | (ADX)-(ADX)")

// C.
c = myadx(c1, c2) - myplus(c3)
plot(myadx(c1, c2), color=lime, title="ADX: 4.2")
plot(myplus(c3), color=lime, title="+DI: 8.8")
plot(c, color=lime, linewidth=3, title="C: (4.2)-(8.8) | (ADX)-(+DI)")

// Alert
alertcondition(a < b < c, title='Alert on Low Signal: a < b < c', message='this is alert msg without index.')
