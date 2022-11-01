// code your solution here
function superbowlWin(list) {
    for (const key of list) {
        if (key["result"] === "W"){
            return key["year"]
        }
    }
}
record.isFind(superbowlWin)