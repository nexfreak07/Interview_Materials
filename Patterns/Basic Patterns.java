public class Patterns {
    public static void solidRectangle() {
        int rows = 5;
        int colums = 8;
        for(int i=0; i<rows; i++) {
            for (int j = 0; j<colums; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void hollowRectangle() {
        int rows = 5;
        for(int i=0; i<=rows; i++) {
            for (int j = 0; j<=rows; j++) {
                if(i==0 || i==rows || j==0 ||j==rows )
                    System.out.print(" * ");
                else
                    System.out.print("   ");
            }
            System.out.println();
        }
    }
    public static void halfPyramid() {
        int rows = 5;
        for(int i=0; i<=rows; i++) {
            for (int j = 0; j<i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void invertedHalfPyramid() {
        int rows = 5;
        for(int i=rows; i>=0; i--) {
            for (int j = 0; j<i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void invertedAndRotatedHalfPyramid() {
        int rows = 5;
        for(int i=0; i<=rows; i++) {
            for(int j=0 ; j<rows-i; j++)
            {
                System.out.print(" ");
            }
            for (int j = 0; j<i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void halfPyramidWithNumbers() {
        int rows = 5;
        for(int i=1; i<=rows; i++) {
            for (int j = 1; j<=i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void invertedHalfPyramidWithNumbers() {
        int rows = 5;
        for (int i=rows; i>=0; i--)
        {
            for (int j=1; j<=i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }

    }

    public static void floydsTriangle() {
        int rows = 5;
        int k =1;
        for(int i=0; i<rows; i++)
        {
            for (int j=0; j<i; j++)
            {
                System.out.print(k+++" ");
            }
            System.out.println();
        }
    }

    public static void Triangle01() {
        int rows = 5;
        for (int i=1; i<=rows; i++)
        {
            for (int j=1; j<i; j++)
            {
                if((i+j)%2==0)
                    System.out.print("0");
                else
                    System.out.print("1");
            }
            System.out.println();
        }

    }

    public static void main(String[] args) {
        solidRectangle();
        System.out.println();
        hollowRectangle();
        System.out.println();
        halfPyramid();
        System.out.println();
        invertedHalfPyramid();
        System.out.println();
        invertedAndRotatedHalfPyramid();
        System.out.println();
        halfPyramidWithNumbers();
        System.out.println();
        invertedHalfPyramidWithNumbers();
        System.out.println();
        floydsTriangle();
        System.out.println();
        Triangle01();
    }
}
