study(title="My - Directional Movement Index", shorttitle="DMI hight signal")

// ================================================================================
// Default
a1 = input(8, title="a1. +DI")
a2 = input(8, title="a2. +DI")
a3 = input(4, title="a3. ADX")
a4 = input(2, title="a4. ADX")

b1 = input(1, title="b1. ADX")
b2 = input(8, title="b2. ADX")
b3 = input(4, title="b3. ADX")
b4 = input(2, title="b4. ADX")

c1 = input(1, title="c1. ADX")
c2 = input(8, title="c2. ADX")
c3 = input(12, title="c3. -DI")
c4 = input(12, title="c4. -DI")

// ================================================================================
// Declear variable
up   = change(high)
down = -change(low)

// ================================================================================
// Function
myplus(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(up > down and up > 0 ? up : 0, a1) / trur)
    answer
mymins(a1) =>
    trur = rma(tr, a1)
    answer = fixnan(100 * rma(down > up and down > 0 ? down : 0, a1) / trur)
    answer

mysum(a1) =>
    answer = myplus(a1) + mymins(a1)
    answer

adx = 100 * rma(abs(myplus(a3) - mymins(a3)) / (mysum(a1) == 0 ? 1 : mysum(a1)), a4)

plot(adx, color=red, title="ADX")
