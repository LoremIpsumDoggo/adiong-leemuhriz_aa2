var num3 = 1;

document.write("Loop 3 (for-loop): " + num3 + ", ");

for (var i = 1; i >= -10; i--){
    num3 = (num3 * 2) + (i);
    if(num3 == 4108){
        document.write(num3)
    }
    else{
        document.write(num3 + ", ")
    }
}

//1, 3, 6, 11, 20, 37, 70, 135, 264, 521, 1034, 2059, 4108