package mariogr93;

public class App 
{
    public static void main( String[] args )
    {
        
        String x = "how to remove    all white    spaces from          a str     ing";
        x.replace("\\s", "");
        System.out.println( "Hello World!" );
        System.out.println(x.replace("\\s", ""));

        // int num [][] = new int[5][2];
        // num[0][0] = 1;
        // num[0][1] = 2;
        // num[1][0] = 3;
        // num[1][1] = 4;
        // num[2][0] = 5;
        // num[2][1] = 6;
        // num[3][0] = 7;
        // num[3][1] = 8;
        // num[4][0] = 9;
        // num[4][1] = 10;
        // for(int i = 0; i < num.length; i++){
        //     for(int p = 0; p < 2; p++){
        //         System.out.println(num[i][p]);
        //     }
        // }

        Hi lista1 = new Hi(3,4,5,7,9);
        System.out.println(lista1.sumList()/5);

        
    }
}
