public class AdvancePatterns {
    public static void butterfly(int n) {
        for(int i=1; i<=n; i++)
        {
            for (int j=1;j<=i; j++)
            {
                System.out.print("*");
            }
            int spaces = 2*(n-i);

            for(int j=1; j<=spaces; j++)
            {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n; i>=1; i--)
        {
            for (int j=1;j<=i; j++)
            {
                System.out.print("*");
            }
            int spaces = 2*(n-i);

            for(int j=1; j<=spaces; j++)
            {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    public static void rhombus(int n) {
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<= n-i; j++)
            {
                System.out.print("   ");
            }
            for(int j=1; j<=n; j++)
            {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    public static void numberPyramid(int n){
        for(int i=1 ;i<=n; i++)
        {
            for(int j=1; j<=n-i; j++)
            {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++) {
                System.out.print(" "+i);
            }
            System.out.println();
        }
    }

    public static void palindromePyramid(int n) {
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<= n-i; j++)
            {
                System.out.print(" ");
            }
            for (int j=i; j>=1; j--)
            {
                System.out.print(j);
            }
            for(int j=2; j<=i; j++)
            {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void diamond(int n) {
        for(int i=1; i<=n; i++) // Odd Star Triangle
        {
            for(int j=1; j<=n-i; j++)
            {
                System.out.print(" ");
            }
            for(int j=1; j<=(2*i-1); j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n; i>=1; i--) // Inverted Odd Star Triangle
        {
            for(int j=1; j<=n-i; j++)
            {
                System.out.print(" ");
            }
            for(int j=1; j<=(2*i-1); j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }

    }
    public static void hollowButterfly(int n) {
        for(int i=1; i<=n; i++)
        {
            for (int j=1;j<=i; j++)
            {
                if(j==1 || j==i)
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            int spaces = 2*(n-i);

            for(int j=1; j<=spaces; j++)
            {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++)
            {
                if(j==1 || j==i)
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            System.out.println();
        }
        for(int i=n; i>=1; i--)
        {
            for (int j=1;j<=i; j++)
            {
                if(j==1 || j==i)
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            int spaces = 2*(n-i);

            for(int j=1; j<=spaces; j++)
            {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++)
            {
                if(j==1 || j==i)
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            System.out.println();
        }

    }

    public static void hourglass(int n) {
        for(int i=n; i>=1; i--)
        {
            for(int j=1; j<=n-i; j++)
            {
                System.out.print(" ");
            }
            for(int j=1; j<=(2 * i-1); j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<=n-i; j++)
            {
                System.out.print(" ");
            }
            for(int j=1; j<=(2 * i-1); j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        butterfly(5);
        System.out.println();
        rhombus(5);
        System.out.println();
        numberPyramid(5);
        System.out.println();
        palindromePyramid(5);
        System.out.println();
        diamond(5);
        System.out.println();
        hollowButterfly(5);
        System.out.println();
        hourglass(5);
    }
}
