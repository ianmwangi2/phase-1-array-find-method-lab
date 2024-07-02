function superbowlWin (record) {
    const winRecord = record.find(entry => entry.result === "W");
    if (winRecord) {
        return winRecord.year;
    } else {
        return undefined;
    }
}
