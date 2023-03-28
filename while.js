var num1 = 1;

document.write("Loop 1 (while): ");

while(num1 <= 51){
    if(num1 == 51){
        document.write(" " + num1);
    }
    else{
        document.write(num1 + ", ");
    }
    num1 += 2;
}

document.write("<br>");