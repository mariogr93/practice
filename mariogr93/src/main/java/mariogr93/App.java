package mariogr93;

public class App 
{
    public static void main( String[] args )
    {
        
        String x = "how to remove    all white    spaces from          a str     ing";
        x.replace("\\s", "");
        System.out.println( "Hello World!" );
        System.out.println(x.replace("\\s", ""));
    }
}
