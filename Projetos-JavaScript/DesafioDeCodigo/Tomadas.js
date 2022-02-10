let lines = gets().split("\n");


let tomadas = lines.shift().split(' ');

let [t1, t2, t3, t4] = tomadas

t1 = parseInt(t1)
t2 = parseInt(t2)
t3 = parseInt(t3)
t4 = parseInt(t4)

let regua = (t1 + t2 + t3 + t4) - 3;

print (regua)


