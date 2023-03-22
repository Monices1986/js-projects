function periodIsLate(last, today, cycleLength) {
    return Math.floor((today - last) / 86400000) > cycleLength;
}