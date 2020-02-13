package mariogr93;

public class Hi{
    private int lista [] = new int[5];
    public Hi( int a , int b , int c ,int d , int e ){
        this.lista[0] = a;
        this.lista[1] = b;
        this.lista[2] = c;
        this.lista[3] = d;
        this.lista[4] = e;
    }

    public int sumList(){
        int x = 0;
        for(int i:this.lista){
            x += i;
        }
        return x;
    }
}