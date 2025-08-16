function solution(str, ending){
    return str.endsWith(ending)
}


function friend(friends){
    return friends.filter((friend) =>
        friend.length === 4
    )
}
var number = function(busStops){
    let people = 0;

    for (let [on, off] of busStops) {
        people += on - off;
    }

    return people;
}