function solution(str, ending){
    return str.endsWith(ending)
}


function friend(friends){
    return friends.filter((friend) =>
        friend.length === 4
    )
}