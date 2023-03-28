var num2 = 0;

document.write("Loop 2 (do-while): ")

do {
    num2 += 2;
    if(num2 == 50){
        document.write(" " + num2);
    }
    else{
        document.write(num2 + ", ");
    }
}
while(num2 <= 48){
}

document.write("<br>");